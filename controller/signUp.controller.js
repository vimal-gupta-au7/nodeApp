const User = require("../models/user.model");

const signUp = (req, res) => {
	const { userName, name, email, password } = req.body;
	let e = [];
    if (!userName) {
		e.push("User name is required.");
	}
    if (!name) {
		e.push("Name is required.");
	}
	if (!email) {
		e.push("Email is required");
	}
	if (!password) {
		e.push("Password is Required");
	}
	console.log(req.body, e);

	if (e.length > 0) {
		res.send(e);
	} else {
		var newUser = new User({
            userName: userName,
			name: name,
			email: email,
			password: password,
		});
		User.saveUser(newUser, function (err, user) {});
		res.send("Saved");
	}
};

module.exports = {
	signUp,
};
