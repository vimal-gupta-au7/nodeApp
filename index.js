import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";

require("./config/passport")(passport);
const { ensureAuthenticated } = require("./config/auth");

require("dotenv").config();

mongoose
	.connect(process.env.mongooseURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB Connected..."))
	.catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));

//Express session
app.use(
	session({
		secret: "secret",
		saveUninitialized: true,
		resave: true,
	}),
);

//Passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
	res.send("Home");
});
app.use("/signup", require("./routes/signUp"));
app.use("/login", require("./routes/login"));

app.use("/viewpost", require("./routes/post"));
app.use("/user", ensureAuthenticated, require("./routes/user"));

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}.`);
});
