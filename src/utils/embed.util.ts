import { TEmbed } from '@/types/discord.type';
import * as github from '@actions/github';

interface Props {
  title: string;
  description: string;
  color: string;
  titleUrl?: string;
  includeImage: boolean;
  customImageUrl?: string;
}

export function createEmbed({
  title,
  description,
  color,
  titleUrl,
  includeImage,
  customImageUrl,
}: Props): TEmbed {
  const embed: TEmbed = {
    title,
    description,
    color: parseInt(color.replace('#', ''), 16),
    url: titleUrl || undefined,
    image: includeImage
      ? { url: customImageUrl || getGitHubPullRequestImageUrl() || '' }
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
