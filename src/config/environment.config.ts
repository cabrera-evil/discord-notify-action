import { config } from 'dotenv';
import { EnvironmentSchema } from '../schemas/environment.schema';

export function configureEnvironment() {
  config();
  const { error } = EnvironmentSchema.validate(process.env, {
    allowUnknown: true,
  });
  if (error) {
    console.error(`Environment validation error: ${error.message}`);
    process.exit(1);
  }
}
