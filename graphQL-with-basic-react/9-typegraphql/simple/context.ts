import { Author } from "./entities/Author";
import { Post } from "./entities/Post";

export interface Context {
  authors: Author[];
  posts: Post[];
}

export const createContext = () => ({
  authors: [],
  posts: [],
});