import { AuthenticationError } from 'apollo-server-express';

import { Post } from './models';

const resolvers = {
  Query: {
    postsPublic: () => Post.find({}),
    posts: (_, __, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to do this');
      }
      return Post.find({});
    },
  },
  Mutation: {
    addPost: (_, args, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to do this');
      }
      const newPost = new Post({
        title: args.title,
        content: args.content,
      });
      return newPost.save();
    },
  },
};

export default resolvers;
