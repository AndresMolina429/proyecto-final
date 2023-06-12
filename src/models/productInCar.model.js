const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInCar = db.define(
  "product_in_car",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: 'notPurchased'
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at",
  }
);

module.exports = ProductInCar;
