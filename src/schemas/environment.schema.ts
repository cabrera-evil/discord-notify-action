import * as Joi from 'joi';

export const EnvironmentSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .required(),
  GITHUB_EVENT_PATH: Joi.string().required(),
  GITHUB_REPOSITORY: Joi.string().optional(),
  GITHUB_WORKFLOW: Joi.string().optional(),
  GITHUB_ACTOR: Joi.string().optional(),
  GITHUB_EVENT_NAME: Joi.string().optional(),
  GITHUB_ACTION: Joi.string().optional(),
  DISCORD_WEBHOOK: Joi.string().uri().required(),
  DISCORD_EMBEDS: Joi.string().optional(),
  DISCORD_USERNAME: Joi.string().optional(),
  DISCORD_AVATAR: Joi.string().uri().optional(),
});
