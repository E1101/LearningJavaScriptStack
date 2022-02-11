import {
  Resolver,
  Query,
  ObjectType,
  Field,
  Arg,
  Args,
  Mutation,
  FieldResolver,
  Root,
  Ctx,
} from "type-graphql";
import { PaginationInput } from "../entities/PaginationInput";
import { Context } from "../context";
import { Post } from "./Post";

@ObjectType()
export class Author {
  @Field()
  id!: number;

  @Field()
  name!: string;
}

@Resolver(() => Author)
export class AuthorResolver {
  @Query(() => [Author])
  authors(
    @Ctx() context: Context,
    @Args() { offset, limit }: PaginationInput
  ): Author[] {
    return context
      .authors
      .slice(offset, offset + limit);
  }

  @FieldResolver()
  posts(
    @Ctx() context: Context, 
    @Root() author: Author,
    @Args() {offset, limit}: PaginationInput  
  ): Post[] {
    return context
      .posts
      .filter(post => post.authorId == author.id)
      .slice(offset, offset+limit);
  }

  @Mutation(() => Author)
  addAuthor(
    @Ctx() context: Context, 
    @Arg("name") name: string
  ): Author {
    const author = {
      id: context.authors.length,
      name: name,
    };

    context.authors.push(author);

    return author;
  }
}
