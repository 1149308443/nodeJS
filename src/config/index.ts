import development from './dev';
import production from './prod';
const env = process.env.NODE_ENV || 'development';
const defaultConfig = {
  env
};

const config = {
  development,
  production
};

export default {
  ...defaultConfig,
  ...config[env]
};
