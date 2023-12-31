"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  posts.init(
    {
      title: DataTypes.STRING(200),
      content: DataTypes.TEXT,
      category: DataTypes.STRING(100),
      status: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};
