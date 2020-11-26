const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const port=process.env.PORT || 3000;
const api= require("./api.js");
var swaggerUi= require("swagger-ui-express");

swaggerDoc=require("./swagger.json");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
api.setup(app);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});