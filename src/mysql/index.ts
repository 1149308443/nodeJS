import { Sequelize } from '../utils';
import config from '../config';
import User from '../models/User';

const { DB, USER, PASSWORD, HOST, PORT } = config.MYSQL_CONFIG;
const sequelize = new Sequelize({
  db: DB,
  user: USER,
  pwd: PASSWORD,
  host: HOST,
  port: PORT
});

sequelize.defineModel('user', User);

export const models = sequelize.dynamicSqlModels();

// sequelize.synchronize();

export default sequelize;
