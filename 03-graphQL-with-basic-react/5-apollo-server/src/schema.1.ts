import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    age: Float
    email: String
  }

  type Query {
    users: [User]
  }
`;
