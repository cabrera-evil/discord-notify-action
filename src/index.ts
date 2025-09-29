import { DiscordService } from '@/services/discord';
import { createEmbed } from '@/utils/embed';
import * as core from '@actions/core';
import * as lodash from 'lodash';

export async function main() {
	try {
		const discordService = DiscordService.getInstance();
		await discordService.notify(
			lodash.omitBy(
				{
					embeds: [createEmbed()],
					username: core.getInput('username'),
					avatar_url: core.getInput('avatar_url'),
				},
				lodash.isNil
			)
		);
		core.info('Discord notification sent successfully');
	} catch (error) {
		core.setFailed(
			`Failed to send Discord notification: ${error instanceof Error ? error.message : error}`
		);
	}
}

main();
