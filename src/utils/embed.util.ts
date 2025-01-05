import { TEmbed } from '@/types/discord.type';
import * as core from '@actions/core';
import { getGitHubPullRequestImageUrl } from './pull-request.util';

export function createEmbed(): TEmbed {
  return {
    title: core.getInput('title') ?? '🚀 Deployment Notification',
    description:
      core.getInput('description') ??
      'A new deployment has been successfully completed! All systems are operational.',
    timestamp: new Date().toISOString(),
    color: parseInt(core.getInput('color').replace('#', ''), 16),
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
      {
        id: Math.floor(Math.random() * 1000000000),
        name: '📂 Project',
        value: `[${core.getInput('repo_name')}](${core.getInput('repo_url')})`,
        inline: true,
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        name: '🌍 Environment',
        value: core.getInput('environment'),
        inline: true,
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        name: '✅ Status',
        value: core.getInput('status'),
        inline: true,
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        name: '👤 Author',
        value: `[${core.getInput('author')}](https://github.com/${core.getInput('author')})`,
        inline: true,
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        name: '🔗 Commit',
        value: `[${core.getInput('commit')}](${core.getInput('repo_url')}/commit/abc1234): Fix critical bug in user authentication`,
        inline: false,
      },
    ],
  };
}
