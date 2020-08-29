const routes = require("express").Router();
const controller = require('../controller/post.controller')

routes.get("/", (req, res) => {
	res.send("User Routes");
});

routes.post('/addpost', controller.addPost)

routes.delete('/deletepost/:id', controller.deletePost)

module.exports = routes;

