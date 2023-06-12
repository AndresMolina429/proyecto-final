const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Car = db.define(
  "car",
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
      defaultValue: 0
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at",
  }
);

module.exports = Car;
