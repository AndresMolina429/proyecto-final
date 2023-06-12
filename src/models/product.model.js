const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: 'deactivated'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productImage: {
      type: DataTypes.TEXT,
      allowNull: 'image001.png',
      field: "product_image"
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at",
  }
);

module.exports = Product;
