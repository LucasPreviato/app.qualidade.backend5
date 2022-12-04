import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as path from 'path';

const mikroOrmConfig: Options = {
  port: 5432,
  user: 'suntech',
  host: 'localhost',
  type: 'postgresql',
  dbName: 'qualilab',
  password: 'nk5alp@PPP@suntech@',
  entities: ['./dist//*.entity.js'],
  entitiesTs: ['./src//*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: path.resolve(__dirname, './src/migrations'),
  },
};

export default mikroOrmConfig;
