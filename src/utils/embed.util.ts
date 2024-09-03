import * as github from '@actions/github';
import { TEmbed } from '..//types/embed.type';

export function createEmbed({
  title,
  message,
  color,
  titleUrl,
  includeImage,
  customImageUrl,
}: {
  title: string;
  message: string;
  color: string;
  titleUrl?: string;
  includeImage: boolean;
  customImageUrl?: string;
}): TEmbed {
  const embed: TEmbed = {
    title,
    description: message,
    color: parseInt(color.replace('#', ''), 16),
    url: titleUrl || undefined,
    image: includeImage
      ? { url: customImageUrl || getGitHubPullRequestImageUrl() }
      : undefined,
  };
  return embed;
}

function getGitHubPullRequestImageUrl(): string | undefined {
  if (github.context.eventName === 'pull_request') {
    const { owner, repo } = github.context.repo;
    const prNumber = github.context.payload.pull_request?.number;
    return `https://opengraph.githubassets.com/${github.context.sha}/${owner}/${repo}/pull/${prNumber}`;
  }
  return undefined;
}
