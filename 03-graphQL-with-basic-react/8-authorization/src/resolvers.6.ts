import db, { User, Post, PostInput } from './database';
import { createUserToken } from './authentication';

type Context = {
  token: string;
  isAuthenticated: boolean;
  user: User;
};

function getUsers(): Array<User> {
  const users = Array.from(db.users.values());

  return users;
}

function getPosts(_: Object, {}, { isAuthenticated }: Context): Array<Post> {
  const posts = Array.from(db.posts.values());

  if (!isAuthenticated) {
    return posts.filter(({ published }) => published === true);
  }

  return posts;
}

function getPostsByUser({ id }: User): Array<Post> {
  const posts = Array.from(db.posts.values());

  return posts.filter(({ authorId }) => authorId === id);
}

function getAuthorForPost({ authorId }: Post): User | null {
  return db.users.get(authorId);
}

function computeName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

function addPost(
  _: Object,
  { post }: { post: PostInput },
  { user }: Context,
): Post | Error | undefined {
  if (user) {
    if (db.posts.get(post.id)) {
      return new Error('A post with this id already exists');
    }

    const newPost = new Post(post.id, user.id, post.title, post.body, false, 0);

    db.posts.set(post.id, newPost);

    return newPost;
  }
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
  Mutation: {
    addPost,
    loginUser: createUserToken,
  },
};

export default resolvers;
