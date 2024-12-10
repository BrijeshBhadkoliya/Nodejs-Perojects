import { createApp } from '@kottster/server';
import { dataSourceRegistry } from './data-sources/registry';
import schema from '../../app-schema.json';

export const app = createApp({
  schema,
  secretKey: 'j3QhGYR0zpaxw3xtG8L8525w',

  // For security, consider moving the secret key to an environment variable:
  // secretKey: process.env.NODE_ENV === 'development' ? 'dev-secret-key' : process.env.SECRET_KEY,
});

app.registerDataSources(dataSourceRegistry);