const routes = require("express").Router();
const controller = require("../controller/post.controller");

routes.get("/all", controller.allPost);

module.exports = routes;
