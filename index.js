// @flow
const express = require('express');
const session = require('express-session')
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const AuthRouter = require('./routes/auth/userAuth');

app.get('/', (req, res) => {
	res.send('Hello world');
})

app.use(session({secret: 'REPLACE THIS SOON', cookie: { maxAge: 6000 }}))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/login', AuthRouter);

app.listen(3000, () => {
	console.log('App is listening on port 3000');
})