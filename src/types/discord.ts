export interface TDiscordMessage {
  embeds?: TEmbed[];
  username?: string;
  avatar_url?: string;
}

export type TEmbed = {
  title: string;
  description: string;
  timestamp?: string;
  color?: string;
  url?: string;
  footer?: TFooter;
  image?: TImage;
  thumbnail?: TThumbnail;
  fields?: TField[];
};

export type TFooter = {
  text: string;
  icon_url: string;
};

export type TImage = {
  url: string;
};

export type TThumbnail = {
  url: string;
};

export type TField = {
  id: number;
  name: string;
  value: string;
  inline: boolean;
};
