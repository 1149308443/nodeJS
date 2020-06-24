import { Sequelize } from '../utils';
import config from '../config';
import User from './user';

const { DB, USER, PASSWORD, HOST, PORT } = config.MYSQL_CONFIG;
const sequelize = new Sequelize({
  db: DB,
  user: USER,
  pwd: PASSWORD,
  host: HOST,
  port: PORT
});

sequelize.defineModel('user', User);

// Sequelize.synchronize();

export default sequelize;
