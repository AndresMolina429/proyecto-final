const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const db = require('./utils/database');
require("dotenv").config();
const apiRoutes = require("./routes");
const errorRoutes = require("./routes/errors.routes");
const initModels = require("./models/initModels");

initModels();
/* Configuracion db */
db.authenticate()
    .then(() => {
        console.log('db.connect');
    })
    .catch(err => console.log(err));

db.sync({ alter: true })
    .then(() => {
        console.log('sync');
    })
    .catch((err) => console.log(err));
/* Configuracion db */

const app = express();

app.use(cors());
// app.use(morgan())
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Servidor trabajando OK");
});

// agrupar todas las rutas en un archivo
apiRoutes(app);
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});