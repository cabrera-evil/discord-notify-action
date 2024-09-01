import * as lodash from 'lodash';
import { DISCORD_DEFAULTS } from '../constants/default-values.constant';
import { DiscordService } from '../services/discord.service';

export async function sendDiscordNotification(
  eventContent: string,
): Promise<void> {
  const discordService = DiscordService.getInstance();
  lodash.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  const eventPayload = JSON.parse(eventContent);
  const argsMessage = process.argv.slice(2).join(' ');
  try {
    await discordService.notify(
      process.env.DISCORD_WEBHOOK,
      process.env.GITHUB_EVENT_NAME,
      {
        content: argsMessage
          ? lodash.template(argsMessage)({ eventPayload })
          : undefined,
        embeds: process.env.DISCORD_EMBEDS
          ? [JSON.parse(process.env.DISCORD_EMBEDS)]
          : undefined,
        username: process.env.DISCORD_USERNAME ?? DISCORD_DEFAULTS.USERNAME,
        avatar_url: process.env.DISCORD_AVATAR ?? DISCORD_DEFAULTS.AVATAR,
      },
    );
  } catch (error) {
    console.error('Error sending Discord notification:', error);
  }
}
