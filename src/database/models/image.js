'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     /*  Image.belongsTo(models.Course,{
        as:"course",
        foreignKey:"courseId"
      }) */
    }
  }
  Image.init({
    name: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
    primary : {
      type : DataTypes.BOOLEAN,
      defaultValue : false
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};