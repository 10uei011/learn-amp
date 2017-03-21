/**
 * Created by ttn on 21/3/17.
 */

exports.register = function (server, option, next) {

    server.route({
        method: 'GET',
        path: '/posts',
        handler: function (request, reply) {
            reply('ok');
        }
    });

    next();
};

exports.register.attributes = {
    name: 'posts',
    version: '1.0.0'
};