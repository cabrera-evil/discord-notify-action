import { createEmbed } from '@/utils/embed';
import * as core from '@actions/core';

describe('createEmbed', () => {
	it('should create embed with all fields populated when inputs are provided', () => {
		jest.spyOn(core, 'getInput').mockImplementation((name: string) => {
			const inputs: { [key: string]: string } = {
				title: 'Test Deploy',
				description: 'Test description',
				color: '#FF0000',
				avatar_url: 'https://test.com/avatar.png',
				repo_name: 'test-repo',
				repo_url: 'https://github.com/org/test-repo',
				environment: 'production',
				status: 'success',
				author: 'testuser',
				commit_sha: 'abc123',
				commit_message: 'chore(deps): bump dependencies',
			};
			return inputs[name as keyof typeof inputs] || '';
		});

		jest.spyOn(core, 'getBooleanInput').mockReturnValue(false);
		const result = createEmbed();
		expect(result.title).toBe('Test Deploy');
		expect(result.description).toBe('Test description');
		expect(result.color).toBe(0xff0000);
		expect(result.footer?.icon_url).toBe('https://test.com/avatar.png');
		expect(result.fields).toHaveLength(5);
		expect(result.fields?.[0].value).toBe(
			'[test-repo](https://github.com/org/test-repo)'
		);
	});

	it('should use default values when inputs are missing', () => {
		jest.spyOn(core, 'getInput').mockReturnValue('');
		jest.spyOn(core, 'getBooleanInput').mockReturnValue(false);
		const result = createEmbed();
		expect(result.title).toBe('');
		expect(result.description).toBe('');
		expect(result.color).toBeUndefined();
		expect(result.image).toBeUndefined();
		expect(result.fields).toHaveLength(0);
		expect(result.thumbnail?.url).toBe(
			'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
		);
	});
});
