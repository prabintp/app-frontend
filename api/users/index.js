const users = require('../data/users.json');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res.json(users);
}