type User = {
  name: String,
  avatarUrl: String
}


type Post = {
  title: String,
  author: String,
  body: String
}


const posts : Array<Post> = [{
  title: "foo",
  author: "Alice",
  body: "bar"
}];

const users : Array<User> = [{
  name: "Alice",
  avatarUrl: ""
}, {
  name: "Bob",
  avatarUrl: ""
}]

function getPostForUser(user: User): Array<Post> {
  return posts
    .filter( ({author}) => author === user.name);
}

function getUsers(): Array<User> {
  return users
}

export default {
  Post: {},
  User: {
    posts: getPostForUser
  },
  Query: {
    users: getUsers
  }
}
