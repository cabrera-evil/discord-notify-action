<!--

********************************************************************************

WARNING:

    DO NOT EDIT "amplify-json/README.md"

    IT IS AUTO-GENERATED

    (based on Dockerfile, usage example, and entrypoint logic)

********************************************************************************

-->

# Quick reference

- **Maintained by**:  
  [Douglas Cabrera](https://github.com/cabrera-evil)

- **Where to get help**:  
  [GitHub Issues](https://github.com/cabrera-evil/discord-notify-action/issues)

# Supported tags and respective `Dockerfile` links

- [`latest`](https://github.com/cabrera-evil/discord-notify-action/blob/master/Dockerfile)

# What is Discord Notify Action?

**Discord Notify Action** is a GitHub Action that allows you to send notifications to a Discord channel using a webhook. It is designed to be simple and easy to use, providing a way to notify your team about important events in your GitHub repository, such as new commits, pull requests, or issues.

> The project uses `node.js` to send the notification to Discord, and it is designed to be run as a Docker container. This allows for easy integration into your CI/CD pipeline or local development environment.

# How to use this action

## docker exec usage (standalone)

```bash
docker run --name discord-notify-action --restart no -e INPUT_WEBHOOK_URL=${INPUT_WEBHOOK_URL} -e INPUT_TITLE=${INPUT_TITLE} -e INPUT_DESCRIPTION=${INPUT_DESCRIPTION} -e INPUT_AVATAR_URL=${INPUT_AVATAR_URL} -e INPUT_USERNAME=${INPUT_USERNAME} -e INPUT_URL=${INPUT_URL} -e INPUT_COLOR=${INPUT_COLOR} -e INPUT_STATUS=${INPUT_STATUS} -e INPUT_ENVIRONMENT=${INPUT_ENVIRONMENT} -e INPUT_INCLUDE_IMAGE=${INPUT_INCLUDE_IMAGE} -e INPUT_CUSTOM_IMAGE_URL=${INPUT_CUSTOM_IMAGE_URL} -e INPUT_REPO_NAME=${INPUT_REPO_NAME} -e INPUT_REPO_URL=${INPUT_REPO_URL} -e INPUT_COMMIT_MESSAGE=${INPUT_COMMIT_MESSAGE} -e INPUT_COMMIT_SHA=${INPUT_COMMIT_SHA} -e INPUT_AUTHOR=${INPUT_AUTHOR} cabreraevil/discord-notify-action $INPUT_WEBHOOK_URL,$INPUT_TITLE,$INPUT_DESCRIPTION,$INPUT_AVATAR_URL,$INPUT_USERNAME,$INPUT_URL,$INPUT_COLOR,$INPUT_STATUS,$INPUT_ENVIRONMENT,$INPUT_INCLUDE_IMAGE,$INPUT_CUSTOM_IMAGE_URL,$INPUT_REPO_NAME,$INPUT_REPO_URL,$INPUT_COMMIT_SHA,$INPUT_AUTHOR
```

## docker-compose usage

```yaml
services:
  action:
    image: cabreraevil/discord-notify-action
    container_name: discord-notify-action
    restart: no
    environment:
      INPUT_WEBHOOK_URL: '${INPUT_WEBHOOK_URL}' # Required
      INPUT_TITLE: ${INPUT_TITLE} # Optional
      INPUT_DESCRIPTION: ${INPUT_DESCRIPTION} # Required
      INPUT_AVATAR_URL: ${INPUT_AVATAR_URL} # Optional
      INPUT_USERNAME: ${INPUT_USERNAME} # Optional
      INPUT_URL: ${INPUT_URL} # Optional
      INPUT_COLOR: ${INPUT_COLOR} # Optional
      INPUT_STATUS: ${INPUT_STATUS} # Optional
      INPUT_ENVIRONMENT: ${INPUT_ENVIRONMENT} # Optional
      INPUT_INCLUDE_IMAGE: ${INPUT_INCLUDE_IMAGE} # Optional
      INPUT_CUSTOM_IMAGE_URL: ${INPUT_CUSTOM_IMAGE_URL} # Optional
      INPUT_REPO_NAME: ${INPUT_REPO_NAME} # Optional
      INPUT_REPO_URL: ${INPUT_REPO_URL} # Optional
      INPUT_COMMIT_MESSAGE: ${INPUT_COMMIT_MESSAGE} # Optional
      INPUT_COMMIT_SHA: ${INPUT_COMMIT_SHA} # Optional
      INPUT_AUTHOR: ${INPUT_AUTHOR} # Optional
    command:
      - $INPUT_WEBHOOK_URL
      - $INPUT_TITLE
      - $INPUT_DESCRIPTION
      - $INPUT_AVATAR_URL
      - $INPUT_USERNAME
      - $INPUT_URL
      - $INPUT_COLOR
      - $INPUT_STATUS
      - $INPUT_ENVIRONMENT
      - $INPUT_INCLUDE_IMAGE
      - $INPUT_CUSTOM_IMAGE_URL
      - $INPUT_REPO_NAME
      - $INPUT_REPO_URL
      - $INPUT_COMMIT_SHA
      - $INPUT_AUTHOR
```

## GitHub Action usage

```yaml
notify:
  name: Discord Notification
  runs-on: ubuntu-latest
  steps:
    - name: Discord notification
      uses: cabrera-evil/discord-notify-action@v1.0.1
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

| Variable           | Description                                           | Default                                                                     |
| ------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| `webhook_url`      | Discord Webhook URL                                   | `''` (required)                                                             |
| `title`            | Title of the notification                             | `''`                                                                        |
| `description`      | Description of the notification                       | `''` (required)                                                             |
| `avatar_url`       | URL of the avatar image to use in the notification    | `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` |
| `username`         | Username to use in the notification                   | `GitHub`                                                                    |
| `color`            | Color of the notification                             | `#24292e`                                                                   |
| `status`           | Status of the notification                            | `''`                                                                        |
| `environment`      | Environment of the notification                       | `''`                                                                        |
| `include_image`    | Boolean value to include an image in the notification | `false`                                                                     |
| `custom_image_url` | URL of a custom image to include in the notification  | `''`                                                                        |
| `repo_name`        | Name of the repository                                | `''`                                                                        |
| `repo_url`         | URL of the repository                                 | `''`                                                                        |
| `commit_message`   | Message of the commit                                 | `''`                                                                        |
| `commit_sha`       | SHA of the commit                                     | `''`                                                                        |
| `author`           | Author of the commit                                  | `''`                                                                        |

# Quick reference (cont.)

- **Where to file issues**:
  [https://github.com/cabrera-evil/discord-notify-action/issues](https://github.com/cabrera-evil/discord-notify-action/issues)

- **Supported architectures**:
  `linux/amd64`, `linux/arm64`

- **Published image details**:
  [Docker Hub: cabreraevil/discord-notify-action](https://hub.docker.com/r/cabreraevil/discord-notify-action)

- **Source of this description**:
  [docs repo’s `discord-notify-action/` directory](https://github.com/cabrera-evil/discord-notify-action)

## License

This project is released under the [MIT License](https://github.com/cabrera-evil/discord-notify-action/blob/master/LICENSE).
