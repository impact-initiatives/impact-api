import { Post } from './models';

const resolvers = {
  Query: {
    posts: () => Post.find({}),
  },
  Mutation: {
    addPost: (_, post) => {
      const newPost = new Post({
        title: post.title,
        content: post.content,
      });
      return newPost.save();
    },
  },
};

export default resolvers;
