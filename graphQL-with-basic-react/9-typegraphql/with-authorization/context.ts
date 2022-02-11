import { Request } from "express";
import { Author } from "./entities/Author";
import { Post } from "./entities/Post";
import { Repository } from "typeorm";

export interface Context {
  authors: Repository<Author>;
  posts: Repository<Post>;
  req: Request;
}
