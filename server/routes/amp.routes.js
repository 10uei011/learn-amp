/**
 * Created by ttn on 21/3/17.
 */

const ampController = require('../controllers/amp.controller');

exports.register = function (server, option, next) {

    const route = server.routePrefix('/amp');

    route([
        {
            method: 'GET',
            path: '/recept/{friendlyUrl}',
            handler: ampController.recipe
        },
        {
            method: 'GET',
            path: '/blogPost/show/{userFriendlyUrl}/{friendlyUrl}',
            handler: ampController.blogPost
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'amp',
    version: '1.0.0'
};