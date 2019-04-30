/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const password = require('passport');

module.exports = {
  login: (req, res) => {
    password.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return res.send({
          success: false,
          message: info.message
        });
      }
      req.login(user, err => {
        if (err) {
          return res.send({
            success: false,
            message: err
          });
        }
        return res.send({
          success: true,
          user
        });
      });
    })(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
};
