'use  strict';

const Hapi = require('hapi');
const routeDecoratorPlugin = require('hapi-routes-prefixer');
const server = new Hapi.Server();
const inert = require('inert');
const vision = require('vision');

const plugins = [];

server.connection({ port: 3000, host: 'localhost'});

const ampPlugin = {
    register: require('./routes/amp.routes.js'),
    options: {}
};


plugins.push(
    vision,
    inert,
    routeDecoratorPlugin,
    ampPlugin,
    require('./routes/static.files.routes')
);

console.log('plugins', plugins);

server.register(plugins, (err) => {
    if (err) {
        console.log('Failed to load plugin:', err);
    }

    server.views({
        engines: { ejs: require('ejs') },
        relativeTo: __dirname,
        path: 'views'
    });


    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
})


module.exports = server;