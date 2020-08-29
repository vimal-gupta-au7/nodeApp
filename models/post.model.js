import { Schema, model } from "mongoose";
var bcrypt = require("bcryptjs");

const PostSchema = new Schema(
	{
		Title: {
			type: String,
			required: true,
		},
		Description: {
			type: String,
		},
		Author: {
			type: String,
			required: true,
		},
		Date: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = model("Post", PostSchema);
