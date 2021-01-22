const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./initial-data');

const UserSchema = require('./lists/User');
const TodoSchema = require('./lists/Todo');
const PostSchema = require('./lists/Post');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'my cool app';
const adapterConfig = { mongoUri: 'mongodb://root:example@localhost:27017' };


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
  cookieSecret: '3D4BB8E7-7C25-451F-80B6-E0074D44A163',
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

// SCHEMAS
keystone.createList('User', UserSchema);
keystone.createList('Todo', TodoSchema);
keystone.createList('Post', PostSchema);


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
