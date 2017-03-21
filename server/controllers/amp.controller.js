
module.exports.recipe = function (request, reply) {
    // reply(encodeURIComponent(request.params.friendlyUrl));
    return reply.view('recipe');
};

module.exports.blogPost = function (request, reply) {
    reply(encodeURIComponent(request.params.userFriendlyUrl));
};