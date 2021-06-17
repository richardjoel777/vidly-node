const config = require('config')
const exprss = require('express');
const app = exprss();
const mongoose = require('mongoose');
const genres = require('./routers/genres');
const home = require('./routers/home');
const customers = require('./routers/customer');
const movies = require('./routers/movies')
const rentals = require("./routers/rentals")
const users = require('./routers/users');
const auth = require('./routers/auth')

if(!config.get('jwtPrivateKey')) {
    console.error("FATAL ERROR: jwtPrivateKey is not defined")
    process.exit(1);
}

app.use(exprss.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers)
app.use('/api/movies', movies)
app.use('/api/rentals', rentals)
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/', home);

mongoose.connect('mongodb://localhost/vidly', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to mongodb"))
 .catch((err) => console.log("could not connect to mongodb", err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}`))