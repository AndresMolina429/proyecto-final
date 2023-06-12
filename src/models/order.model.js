const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Order = db.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "total_price",
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: 'pending'
    }
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at",
  }
);

module.exports = Order;
