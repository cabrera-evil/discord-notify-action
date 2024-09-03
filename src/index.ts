import * as core from '@actions/core';
import * as lodash from 'lodash';
import { DiscordService } from './services/discord.service';
import { createEmbed } from './utils/embed.util';

export async function main() {
  try {
    const discordService = DiscordService.getInstance();
    const webhookUrl = core.getInput('webhook_url', { required: true });
    const eventName = core.getInput('event_name') || 'default_event';
    const title = core.getInput('title');
    const description = core.getInput('description');
    const avatarUrl = core.getInput('avatar_url');
    const username = core.getInput('username');
    const color = core.getInput('color');
    const includeImage = core.getBooleanInput('include_image');
    const customImageUrl = core.getInput('custom_image_url');
    const titleUrl = core.getInput('title_url');
    await discordService.notify(
      webhookUrl,
      eventName,
      lodash.omitBy(
        {
          embeds: [
            createEmbed({
              title,
              description,
              color,
              titleUrl,
              includeImage,
              customImageUrl,
            }),
          ],
          username,
          avatar_url: avatarUrl,
        },
        lodash.isNil,
      ),
    );
    core.info('Discord notification sent successfully');
  } catch (error) {
    core.setFailed(
      `Failed to send Discord notification: ${error instanceof Error ? error.message : error}`,
    );
  }
}

main();
