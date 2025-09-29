import * as core from '@actions/core';

describe('getGitHubPullRequestImageUrl', () => {
	it('should return the correct URL when the event is a pull request', () => {
		jest.spyOn(core, 'getInput').mockReturnValue('pull_request');
		jest.spyOn(core, 'getBooleanInput').mockReturnValue(false);
	});

	it('should return undefined when the event is not a pull request', () => {
		jest.spyOn(core, 'getInput').mockReturnValue('push');
		jest.spyOn(core, 'getBooleanInput').mockReturnValue(false);
	});
});
