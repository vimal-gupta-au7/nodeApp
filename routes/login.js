const routes = require("express").Router();
const passport = require("passport");

const User = require("../models/user.model");

routes.post("/", (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/user",
		failureRedirect: "/",
	})(req, res, next);
});

module.exports = routes;
