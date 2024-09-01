import axios from 'axios';
import { TDiscordMessage } from 'src/types/discord-message.type';

export class DiscordService {
  private static instance: DiscordService;

  public static getInstance(): DiscordService {
    return DiscordService.instance ?? new DiscordService();
  }

  async notify(baseUrl: string, event: string, payload: TDiscordMessage) {
    await axios.post(`${baseUrl}?wait=true`, payload, {
      headers: {
        'X-GitHub-Event': event,
      },
    });
  }
}
