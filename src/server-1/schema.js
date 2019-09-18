import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    content: String
  }

  type Query {
    posts: [Post]
    postsPublic: [Post]
  }

  type Mutation {
    addPost(title: String!, content: String!): Post
  }
`;

export default typeDefs;
