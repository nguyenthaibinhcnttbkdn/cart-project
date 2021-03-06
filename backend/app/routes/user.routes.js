const userController = require('./../controllers/user.controller');
const authJwt = require('./../middlewares/authJwt');
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
  
    app.get(
      "/api/test/user",
      [authJwt.verifyToken],
      userController.getUserContent
    );
  
    
  };