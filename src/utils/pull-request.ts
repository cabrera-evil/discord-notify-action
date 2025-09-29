import * as github from '@actions/github';

export function getGitHubPullRequestImageUrl(): string | undefined {
	if (github.context.eventName === 'pull_request') {
		const { owner, repo } = github.context.repo;
		const prNumber = github.context.payload.pull_request?.number;
		return `https://opengraph.githubassets.com/${github.context.sha}/${owner}/${repo}/pull/${prNumber}`;
	}
	return undefined;
}
