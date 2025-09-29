import { TEmbed } from '@/types/discord';
import * as core from '@actions/core';
import { getGitHubPullRequestImageUrl } from './pull-request';

export function createEmbed(): TEmbed {
	return {
		title: core.getInput('title') ?? '🚀 Deployment Notification',
		description:
			core.getInput('description') ??
			'A new deployment has been successfully completed! All systems are operational.',
		timestamp: new Date().toISOString(),
		color: core.getInput('color')
			? parseInt(core.getInput('color').replace('#', ''), 16)
			: undefined,
		footer: {
			text: 'Deployment Service | Powered by Github',
			icon_url: core.getInput('avatar_url'),
		},
		image: core.getBooleanInput('include_image')
			? {
					url:
						core.getInput('custom_image_url') ??
						getGitHubPullRequestImageUrl() ??
						'',
				}
			: undefined,
		thumbnail: {
			url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
		},
		fields: [
			...(core.getInput('repo_name') && core.getInput('repo_url')
				? [
						{
							id: Math.floor(Math.random() * 1000000000),
							name: '📂 Project',
							value: `[${core.getInput('repo_name')}](${core.getInput('repo_url')})`,
							inline: true,
						},
					]
				: []),
			...(core.getInput('environment')
				? [
						{
							id: Math.floor(Math.random() * 1000000000),
							name: '🌍 Environment',
							value: core.getInput('url')
								? `[${core.getInput('environment')}](${core.getInput('url')})`
								: core.getInput('environment'),
							inline: true,
						},
					]
				: []),
			...(core.getInput('status')
				? [
						{
							id: Math.floor(Math.random() * 1000000000),
							name: '✅ Status',
							value: core.getInput('status'),
							inline: true,
						},
					]
				: []),
			...(core.getInput('author')
				? [
						{
							id: Math.floor(Math.random() * 1000000000),
							name: '👤 Author',
							value: `[${core.getInput('author')}](https://github.com/${core.getInput('author')})`,
							inline: true,
						},
					]
				: []),
			...(core.getInput('commit_sha') &&
			core.getInput('repo_url') &&
			core.getInput('commit_message')
				? [
						{
							id: Math.floor(Math.random() * 1000000000),
							name: '🔗 Commit',
							value: `[${core.getInput('commit_sha')}](${core.getInput('repo_url')}/commit/${core.getInput('commit_sha')}): ${core.getInput('commit_message')}`,
							inline: false,
						},
					]
				: []),
		],
	};
}
