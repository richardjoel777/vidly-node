const dotenv = require("dotenv");
dotenv.config();

// const config = require("config");
const exprss = require("express");
const app = exprss();
const mongoose = require("mongoose");
const genres = require("./routers/genres");
const home = require("./routers/home");
const customers = require("./routers/customer");
const movies = require("./routers/movies");
const rentals = require("./routers/rentals");
const users = require("./routers/users");
const auth = require("./routers/auth");

if (!process.env.SECRET_KEY) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

app.use(exprss.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/", home);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@vidly.l1jsu.mongodb.net/vidly?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("could not connect to mongodb", err));

console.log(process.env.SECRET_KEY);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}`));
