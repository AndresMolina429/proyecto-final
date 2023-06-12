// importar los modelos
const Users = require("./users.model");
// const Roles = require("./roles.model");
const Car = require("./car.model");
const Order = require("./order.model");
const Product = require("./product.model");
const ProductInCar = require("./productInCar.model");
const ProductInOrder = require("./productInOrder.model");

const initModels = () => {
  Users.hasOne(Car, { foreignKey: "userId" });
  Car.belongsTo(Users);
  
  Car.hasMany(ProductInCar, { foreignKey: "carId" });
  ProductInCar.belongsTo(Car, { foreignKey: "carId" });

  Users.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(Users, { foreignKey: "userId" });
  
  Order.hasMany(ProductInOrder, { foreignKey: "orderId" });
  ProductInOrder.belongsTo(Order, { foreignKey: "orderId" });


  Product.hasMany(ProductInOrder, { foreignKey: "productId" });
  ProductInOrder.belongsTo(Product, { foreignKey: "productId" });

  Product.hasMany(ProductInCar, { foreignKey: "productId" });
  ProductInCar.belongsTo(Product, { foreignKey: "productId" });

};

module.exports = initModels;
// Un usuario tine un rol? 1 (belongsTo)
// Un rol lo pueden tener muchos? Muchos (hasMany)
// 1 - M
