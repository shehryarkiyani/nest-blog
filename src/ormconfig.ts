import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'blog',
  logging: true,
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrationsTableName: 'migration',
  migrations: [__dirname + '/migrations/**/*.ts'],
};
const AppDataSource = new DataSource(config);

export { AppDataSource };
export default config;
