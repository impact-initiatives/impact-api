import { ApolloServer } from 'apollo-server-express';

import { context } from '../utils';
import typeDefs from './schema';
import resolvers from './resolvers';
import auth from './auth';

const server = new ApolloServer({ typeDefs, resolvers, context });

export default server;
export { auth };
