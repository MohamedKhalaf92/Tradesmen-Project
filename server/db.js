import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  database: 'test',
  user: 'postgres',
  password: 'password',
  port: 5432,
});

export default pool;
