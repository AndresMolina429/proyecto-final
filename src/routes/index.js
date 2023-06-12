const userRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(authRoutes);
  app.use(productRoutes);
};

module.exports = apiRoutes;
