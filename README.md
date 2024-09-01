# Discord Notify Action

Welcome to the **Discord Notify Action** project repository. This project provides a GitHub Action for sending notifications to a Discord channel using a webhook. It is built with Node.js and MongoDB, and is fully containerized using Docker and Docker Compose.

## Table of Contents

- [Discord Notify Action](#discord-notify-action)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Arguments](#arguments)
  - [Examples](#examples)
  - [Environment Variables](#environment-variables)
  - [License](#license)
  - [Contributing](#contributing)

## Usage

To use this GitHub Action in your workflows, include the following step in your `.github/workflows` YAML file:

For a raw message:

```yaml
raw-message:
  runs-on: ubuntu-latest
  steps:
    - name: Discord notification
      env:
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
      uses: cabrera-evil/discord-notify-action@master
      with:
        message: 'A new commit has been pushed to cabrera-evil/discord-notify-action.'
```

For an embed message:

```yaml
embed-message:
  runs-on: ubuntu-latest
  steps:
    - name: Discord notification
      env:
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
        DISCORD_EMBEDS: '{"title": "New commit", "description": "A new commit has been pushed to cabrera-evil/discord-notify-action."}'
      uses: cabrera-evil/discord-notify-action@master
```

## Arguments

The action sends a notification with event information by default. You can override the default message by providing a custom message through the `message` input.

## Examples

Here are some example `message` values you can use:

- `message = "The project {{ EVENT_PAYLOAD.repository.full_name }} has been deployed."`

## Environment Variables

The following environment variables can be configured:

- **`DISCORD_WEBHOOK`** (**required**): The [Discord Webhook URL](https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
- **`DISCORD_USERNAME`** (_optional_): Overrides the bot's username in the notification.
- **`DISCORD_AVATAR`** (_optional_): Overrides the bot's avatar image URL.
- **`DISCORD_EMBEDS`** (_optional_): A valid JSON string of an array of Discord embed objects. For more information, refer to the [Discord Webhook Embeds Documentation](https://birdie0.github.io/discord-webhooks-guide/structure/embeds.html).

## License

This repository is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute as long as you include the original license text.

## Contributing

We welcome and encourage contributions to enhance the functionality and usability of this project. Please contact the repository owner to discuss your ideas, or submit a pull request. All contributions will be reviewed and must meet the project's standards before being merged.
