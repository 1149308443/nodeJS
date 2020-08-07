import { DataTypes } from 'sequelize';

const UserModel = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false, // 是否允许为空
    primaryKey: true, // 是否为主键
    autoIncrement: true // 选项用于创建一个自增的整型列
  },
  avatar: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nickName: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  mobile: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING(35),
    allowNull: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
};

export default UserModel;

