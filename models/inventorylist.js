'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InventoryList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InventoryList.init({
    serialId: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    package: DataTypes.STRING,
    color: DataTypes.STRING,
    year: DataTypes.STRING,
    category: DataTypes.STRING,
    mileage: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InventoryList',
  });
  return InventoryList;
};