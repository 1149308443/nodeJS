import path from 'path';
import fs from 'fs';
import { Sequelize, Utils, Model } from 'sequelize';
import { TModels } from './typings';

export interface ISUtil {
  db: string;
  user: string;
  pwd: string;
  host: string;
  port: number;
  options?: object
}
export interface IAttributes {
  [key: string]: any;
}

export interface IOptions {
  [key: string]: any;
}

export default class SequelizeUtil {
  private sequelizeManager: Sequelize;
  private props: ISUtil;

  constructor(props: ISUtil) {
    this.props = props;
    const { db, user, pwd, host, port, options = {} } = this.props;

    this.sequelizeManager = new Sequelize(db, user, pwd, Utils.mergeDefaults({
      dialect: 'mysql',
      host,
      port,
      logging: false, // 是否打印日志
      define: {
        underscored: true, // 转换列名的驼峰命名规则为下划线命令规则
        charset: 'utf8',
        collate: 'utf8_general_ci',
        freezeTableName: true, // Model对应的表名将与model名相同
        timestamps: true // 为模型添加 createdAt 和 updatedAt 两个时间戳字段
      }
    }, options));
  }

  /**
 * @description 初始化链接数据库
 * @returns {Promise} 返回值
 */
  public init(): Promise<void> {
    return this.sequelizeManager
      .authenticate()
      .then(() => {
        console.log('数据库连接成功!');
      }).catch((error: Error) => {
        console.log('无法连接数据库', error.message);
      });
  }

  /**
   * @description 创建Model
   * @param {string} name 表名
   * @param {any} attributes 表字段
   * @param {object} options model其他配置参数
   * @returns {Models} 表模型Model
   */
  public defineModel(name:string, attributes:IAttributes, options?:IOptions): typeof Model {
    // const modelDir = path.resolve(__dirname, '../models');
    // const dirs: anyKey = fs.readdirSync(modelDir);

    return this.sequelizeManager.define(name, attributes, options);
  }

  // public registryModels ():void {
  //   const modelDir = path.resolve(__dirname, '../models');
  //   const dirs: anyKey = fs.readdirSync(modelDir);

  //   for (const key in dirs) {
  //     const name: string = dirs[key].replace(/.[j|t]s$/, '');
  //     const filepath = path.resolve(modelDir, dirs[key]);
  //     const file = require(filepath);
  //     // const STATICS = file['Statics']
  //     const MODELS = file.Models;
  //     const OPTIONS = file.Options;

  //     this.models[name] = this.sequelizeManager.define(name, MODELS, OPTIONS);

  //     return this.models;
  //   }
  // }

  /**
   *  @description 动态创建数据库Models
   * @param {string} path 加载Models文件夹路径
   * @param {RegExp} match 加载path路径下的文件匹配正则表达式
   * @returns {Object} Models 对象
  */
  public dynamicSqlModels(): TModels {
    return this.sequelizeManager.models;
  }

  /**
   * @description 同步数据库模型 - 不要轻易执行
   * @returns {Promise} 表模型Model
   */
  public synchronize(): Promise<void> {
    return new Promise((resolve: any, reject) => {
      if (process.env.NODE_ENV !== 'production') {
        this.sequelizeManager.sync({ force: true }).then(resolve, reject).catch(reject);
      } else {
        reject('Connot sync() when NODE_ENV is set to \'production\'.');
      }
    });
  }

}
