'use strict'

module.exports = (app) => {
    // const indexController = require('../Controller/IndexController'); - для теста
    const usersController = require('./../Controller/UsersController');
    
    app
        .route('/api/users')
        .get(usersController.getAllUsers);
    app
        .route('/api/auth/signup')
        .post(usersController.signup);
}