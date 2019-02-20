const express = require('express');
const express_graphql = require('express-graphql');
const resolvers = require('./resolvers');
const schema = require('./schema.js');

// Create an express server and a GraphQL endpoint
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use('/graphql', express_graphql({
    schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
