var authController = require('../db/controllers/authcontroller');
 
module.exports = function(app) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
}

