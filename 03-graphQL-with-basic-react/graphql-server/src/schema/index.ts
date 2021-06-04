import gql from 'graphql-tag';

export default gql`
type User {
  name: String
  avatarUrl: String    
  posts: [Post]
}

type Post {
  title: String
  author: String
  body: String
}

type Query {
  users: [User]
}
`
