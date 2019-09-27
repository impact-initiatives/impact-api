import { ApolloServer } from 'apollo-server-express';

import options from '../options';
import typeDefs from './schema';
import resolvers from './resolvers';
import auth from './auth';

const server = new ApolloServer({
  ...options,
  typeDefs,
  resolvers,
});

export default { server, auth };
