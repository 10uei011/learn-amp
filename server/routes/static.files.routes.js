/**
 * Created by ttn on 21/3/17.
 */

'use strict';

exports.register = function (server, options, next) {
    server.route([
        {
            method: 'GET',
            path: '/js/{path*}',
            handler: {
                directory: {
                    path: './public/js'
                }
            },
        },
        {
            method: 'GET',
            path: '/images/{path*}',
            handler: {
                directory: { path: './public/images' }
            },
        },
        {
            method: 'GET',
            path: '/css/{path*}',
            handler: {
                directory: { path: './public/css' }
            },
        },
        {
            method: 'GET',
            path: '/bower_components/{path*}',
            handler: {
                directory: { path: './public/bower_components' }
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'static.files',
    version: '1.0.0'
};
