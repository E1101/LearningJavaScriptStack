import { gql } from 'apollo-server-express';

export default gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    author: User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    name: String! # This is the computed full name of a user
    age: Float
    email: String
    posts: [Post]
  }

  type Query {
    users: [User]
    posts: [Post]
  }
`;
