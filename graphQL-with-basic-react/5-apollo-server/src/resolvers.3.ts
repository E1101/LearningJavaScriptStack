import db, { User, Post } from './database';

function getPosts(): Array<Post> {
  return Array.from(db.posts.values());
}

function getUsers(): Array<User> {
  return Array.from(db.users.values());
}

function computeName(user: User): string {
  console.log(`Computing name for`, user);
  return `${user.firstName} ${user.lastName}`;
}

const resolvers = {
  User: {
    name: computeName,
  },
  Query: {
    users: getUsers,
    posts: getPosts,
  },
};

export default resolvers;
