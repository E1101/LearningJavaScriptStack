import {
  ObjectType,
  Field,
  Resolver,
  Query,
  Mutation,
  Args,
  Ctx,
  Arg,
} from "type-graphql";
import { PaginationInput } from "./PaginationInput";
import { Context } from "../context";

@ObjectType()
export class Post {
  @Field()
  id!: number;

  @Field()
  title!: string;

  @Field()
  text!: string;

  authorId!: number;
}

@Resolver(() => Post)
export class PostResolver {
  @Query(() => [Post])
  posts(
    @Ctx() context: Context,
    @Args()
    { offset, limit }: PaginationInput
  ): Post[] {
    return context
      .posts
      .slice(offset, offset + limit);
  }

  @Mutation(() => Post)
  addPost(
    @Ctx() context: Context,
    @Arg("authorId") authorId: number,
    @Arg("title") title: string,
    @Arg("text") text: string
  ): Post {
    const post = {
      id: context.posts.length,
      authorId,
      text,
      title,
    };

    context.posts.push(post);

    return post;
  }
}