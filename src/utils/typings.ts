import { Model, ModelCtor } from 'sequelize';

/**
 * @description 返回Model模型范型
 */
export type TModels = {
  // User: ModelCtor<Model<any, any>>;

  [key: string]: ModelCtor<Model<any, any>>;
}

export type anyKey = {
  [key: string]: any;
}
