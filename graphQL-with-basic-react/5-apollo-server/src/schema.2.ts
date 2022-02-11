import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    name: String! # This is the computed full name of a user
    age: Float
    email: String
  }

  type Query {
    users: [User]
  }
`;
