export interface TDiscordMessage {
  embeds?: TEmbed;
  username?: string;
  avatar_url?: string;
}

export type TEmbed = {
  title: string;
  description: string;
  color?: number;
  url?: string;
  image?: { url: string };
};
