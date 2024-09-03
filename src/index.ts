import * as core from '@actions/core';
import * as lodash from 'lodash';
import { configureEnvironment } from './config/environment.config';
import { DiscordService } from './services/discord.service';
import { TDiscordMessage } from './types/discord-message.type';
import { createEmbed } from './utils/embed.util';

export async function main() {
  try {
    configureEnvironment();
    const discordService = DiscordService.getInstance();
    const webhookUrl = core.getInput('webhook_url', { required: true });
    const title = core.getInput('title');
    const message = core.getInput('message');
    const avatarUrl = core.getInput('avatar_url');
    const username = core.getInput('username');
    const color = core.getInput('color') || '#000000';
    const includeImage = core.getBooleanInput('include_image');
    const customImageUrl = core.getInput('custom_image_url');
    const titleUrl = core.getInput('title_url');
    const embed = createEmbed({
      title,
      message,
      color,
      titleUrl,
      includeImage,
      customImageUrl,
    });
    const notificationPayload: TDiscordMessage = {
      embeds: [embed],
      username,
      avatar_url: avatarUrl,
    };
    await discordService.notify(
      webhookUrl,
      core.getInput('event_name') || 'default_event',
      lodash.omitBy(notificationPayload, lodash.isNil),
    );
    core.info('Discord notification sent successfully');
  } catch (error) {
    core.setFailed(
      `Failed to send Discord notification: ${error instanceof Error ? error.message : error}`,
    );
  }
}

main();
