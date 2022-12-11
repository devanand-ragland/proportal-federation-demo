const parseBoolean = (str = '') => str.toLowerCase() === 'true';

// Environment
export const ENABLE_MOCKS = parseBoolean(process.env.REACT_APP_ENABLE_MOCKS);

export const IS_TEST = parseBoolean(process.env.REACT_APP_IS_TEST);

export const GRAPHQL_SCHEMA_PACKAGE = process.env.REACT_APP_GRAPHQL_SCHEMA_PACKAGE;

export const GRAPHQL_MOCK_SCENARIO = process.env.REACT_APP_MOCK_SCENARIO ?? 'default';

const config = {
  //Auth0
  audience: process.env.REACT_APP_AUTH0_AUDIENCE || '',
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
  auth0Connection: process.env.REACT_APP_AUTH0_CONNECTION || 'REZI-Ping',
  domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  namespace: `${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  scope: 'openid profile email',
};
export { config };

// Relay
export const USE_PERSISTED_QUERIES = parseBoolean(process.env.REACT_APP_USE_PERSISTED_QUERIES);
export const PERSISTED_QUERIES_APP_NAME = process.env.REACT_APP_PERSISTED_QUERIES_APP_NAME || '';
export const PERSISTED_QUERIES_APP_VERSION = process.env.REACT_APP_PERSISTED_QUERIES_APP_VERSION || '';

export const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL || '/gateway/graphql';

// Sentry
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN || '';
export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'development';
export const SENTRY_SAMPLE_RATE = parseFloat(process.env.REACT_APP_SENTRY_SAMPLE_RATE || '0.2');

// ImageKit IMK
export const imkPublicKey = process.env.REACT_APP_IMK_PUBLIC_KEY || '';
export const imkUrlEndpoint = process.env.REACT_APP_IMK_URL_ENDPOINT || '';
export const imkLogoFolder = process.env.REACT_APP_IMK_LOGO_FOLDER || '';
export const imkUploadUrl = process.env.REACT_APP_IMK_UPLOAD_URL || 'https://upload.imagekit.io/api/v1/files/upload';

export default config;
