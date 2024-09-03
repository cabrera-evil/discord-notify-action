import { TEmbed } from './embed.type';

export interface TDiscordMessage {
  embeds?: TEmbed;
  username?: string;
  avatar_url?: string;
}
