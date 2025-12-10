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
  synchronize: true, //typeorm will auto create or update your db based on your entities each time when you run application. Don't use in production
};
export default config;
