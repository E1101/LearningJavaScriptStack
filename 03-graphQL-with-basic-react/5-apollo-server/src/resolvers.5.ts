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

function getPostsByUser({ id }: User): Array<Post> {
  const posts = Array.from(db.posts.values());

  return posts.filter(({ authorId }) => authorId === id);
}

function getAuthorForPost({ authorId }: Post): User | undefined {
  return db.users.get(authorId);
}

const resolvers = {
  User: {
    name: computeName,
    posts: getPostsByUser,
  },
  Post: {
    author: getAuthorForPost,
  },
  Query: {
    users: getUsers,
    posts: getPosts,
  },
};

export default resolvers;
