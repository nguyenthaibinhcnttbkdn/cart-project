const verifySignUp = require('./../middlewares/verifySignUp');
const authController = require('./../controllers/auth.controller');
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/auth/signup",
      [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
      ],
      authController.signUp
    );
    app.post(
      "/api/auth/signin",
      authController.signIn
    )
  
  };