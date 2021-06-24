const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require ('./schemas')

// The following code is no longer needed in Grapql setup
// const routes = require('./routes');
// app.use(routes);

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
})
const app = express();
// The parameter you provide to applyMiddleware is your middleware's top-level representation of your application. In Express applications, this variable is commonly named app.
// When you pass your app to applyMiddleware, Apollo Server automatically configures various middleware (including body parsing, the GraphQL Playground frontend, and CORS support), so you don't need to apply them with a mechanism like app.use.
server.applyMiddleware({app});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 GraphQL is now listening on localhost:${PORT}${server.graphqlPath}`));
});
