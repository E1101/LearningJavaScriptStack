import db, { User } from './database';

function getUsers(): Array<User> {
  return Array.from(db.users.values());
}

const resolvers = {
  Query: {
    users: getUsers,
  },
};

export default resolvers;
