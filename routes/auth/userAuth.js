const express = require('express');
const authRouter = express.Router();

const utils = require('./utils');

authRouter.post('/', (req, res) => {
  const { sessionId } = req.session;
  if(utils.userSessionIsValid(sessionId)) 
    res.send('user is already logged in');
    //Allow for user to be redirected to home page, we send usermeta data
  else {
    const { username, password } =  req.body;
    if(utils.validLoginCredentails(username, password)) {
      res.send('user successfully logged in');
    } 
    res.send('user credentials incorrect');
  }

})

module.exports = authRouter;