import { Schema, model } from "mongoose";
var bcrypt = require("bcryptjs");

const UserSchema = new Schema({
	userName: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = model("User", UserSchema);

module.exports.saveUser = function (newUser, callback) {
	bcrypt.hash(newUser.password, 10, function (err, hash) {
		if (err) throw err;
		newUser.password = hash;
		console.log("User is being Saved");
		newUser
			.save()
			.then((user) => {
				console.log("saved");
			})
			.catch((err) => console.log(err));
		callback;
	});
};
