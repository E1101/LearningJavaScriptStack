import { gql } from 'apollo-server-express';

export default gql`
  enum Role {
    ADMIN
    EDITOR
  }

  directive @auth(role: Role) on FIELD_DEFINITION

  type Post {
    id: ID!
    title: String!
    body: String!
    author: User
    views: Int @auth(isAuthenticated: true, role: ADMIN) # this field should only be visible to admins
    published: Boolean! # unpublished posts are only visible to editors and admins
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    name: String!
    age: Float
    email: String
    posts: [Post]
    role: Role! # users are either admins or editors
  }

  type Credentials {
    token: String
  }

  type Query {
    users: [User]
    posts: [Post]
  }

  type Mutation {
    loginUser(userName: String!, password: String!): Credentials
  }
`;
