const routes = require("express").Router();
import passport from "passport";
const controller = require('../controller/signUp.controller')

routes.post('/', controller.signUp);


module.exports = routes