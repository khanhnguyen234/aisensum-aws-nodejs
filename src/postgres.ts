require('dotenv').config();
import { createConnection, EntityManager, getManager } from 'typeorm';
import { Segment } from './apis/segment/segment.entity';

const POSTGRES_OPTIONS = {
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  name: 'default',
  type: 'postgres',
  // logging: ['error', 'schema', 'query'],
  entities: [__dirname + '/apis/*/*.entity.js'],
  synchronize: true,
};

export let connection;
export let pgManager = {} as EntityManager;

export async function connectPostgres() {
  if (typeof connection === 'undefined') {
    console.log('----- Connect Postgres -----');
    console.log(POSTGRES_OPTIONS);
    console.log('----- Connect Postgres -----');
    try {
      // @ts-ignore
      connection = await createConnection(POSTGRES_OPTIONS);
      pgManager = getManager();
      console.log('----- Connect Postgres Success -----');
    } catch (e) {
      console.log('----- Connect Postgres Error -----');
      console.log(e);
    }
  }
  return connection;
}
