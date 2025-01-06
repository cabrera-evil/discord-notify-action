# Discord Notify Action

Welcome to the **Discord Notify Action** project repository. This project provides a GitHub Action for sending notifications to a Discord channel using a webhook. It is built with Node.js and MongoDB, and is fully containerized using Docker and Docker Compose.

## Table of Contents

- [Discord Notify Action](#discord-notify-action)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Arguments](#arguments)
  - [License](#license)
  - [Contributing](#contributing)

## Usage

To use this GitHub Action in your workflows, include the following step in your `.github/workflows` YAML file:

For a raw message:

```yaml
notify:
    name: Discord Notification
    runs-on: ubuntu-latest
    steps:
      - name: Discord notification
        uses: cabrera-evil/discord-notify-action@1.1.0
        with:
          webhook_url: ${{ secrets.DISCORD_WEBHOOK }}
          title: 'GitHub Action'
          description: 'A new commit has been pushed.'
          avatar_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          username: 'GitHub'
          color: '#24292e'
          status: 'success'
          environment: 'production'
          include_image: 'true'
          custom_image_url: ''
          repo_name: ${{ github.repository }}
          repo_url: ${{ github.event.repository.html_url }}
          commit_message: ${{ github.event.head_commit.message }}
          commit_sha: ${{ github.sha }}
          author: ${{ github.actor }}
```

## Arguments

The following arguments can be configured:

- **`webhook_url`** (**required**): The [Discord Webhook URL](https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
- **`title`** (_optional_): The title of the notification.
- **`description`** (_optional_): The description of the notification.
- **`avatar_url`** (_optional_): The URL of the avatar image to use in the notification.
- **`username`** (_optional_): The username to use in the notification.
- **`color`** (_optional_): The color of the notification.
- **`status`** (_optional_): The status of the notification.
- **`environment`** (_optional_): The environment of the notification.
- **`include_image`** (_optional_): A boolean value to include an image in the notification.
- **`custom_image_url`** (_optional_): The URL of a custom image to include in the notification.
- **`repo_name`** (_optional_): The name of the repository.
- **`repo_url`** (_optional_): The URL of the repository.
- **`commit_message`** (_optional_): The message of the commit.
- **`commit_sha`** (_optional_): The SHA of the commit.
- **`author`** (_optional_): The author of the commit.

## License

This repository is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute as long as you include the original license text.

## Contributing

We welcome and encourage contributions to enhance the functionality and usability of this project. Please contact the repository owner to discuss your ideas, or submit a pull request. All contributions will be reviewed and must meet the project's standards before being merged.
