export const getInput = jest.fn(
  (name: string) => process.env[name.toUpperCase()] || '',
);
export const getBooleanInput = jest.fn(
  (name: string) => process.env[name.toUpperCase()] === 'true',
);
export const setFailed = jest.fn((message: string) =>
  console.error(`Action failed: ${message}`),
);
export const info = jest.fn((message: string) =>
  console.log(`INFO: ${message}`),
);
export const debug = jest.fn((message: string) =>
  console.debug(`DEBUG: ${message}`),
);
