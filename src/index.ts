import { configureEnvironment } from './config/environment.config';
import { sendDiscordNotification } from './utils/discord.util';
import { loadEventContent } from './utils/load-event.util';

async function main() {
  try {
    configureEnvironment();
    const eventContent = loadEventContent(process.env.GITHUB_EVENT_PATH);
    await sendDiscordNotification(eventContent);
    console.log('Message sent! Shutting down...');
  } catch {
    process.exit(1);
  }
}

main();
