'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Article,{
        foreignKey: 'tagId',
          through: 'ArticleTags',
      })
    }
  }
  Tag.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    createdAt: {
      type:DataTypes.DATE,
      allowNull:false
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};