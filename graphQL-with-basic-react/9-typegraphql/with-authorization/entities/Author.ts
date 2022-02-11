import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
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

@Entity({ name: "Users" })
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column()
  @Field()
  name!: string;
}

@Resolver(() => Author)
export class AuthorResolver {
  @Query(() => [Author])
  async authors(
    @Ctx() context: Context,
    @Args()
    { offset, limit }: PaginationInput
  ): Promise<Author[]> {
    const [authors] = await context.authors.findAndCount({
      skip: offset,
      take: limit,
    });

    return authors;
  }

  @FieldResolver(() => [Post])
  async posts(
    @Ctx() context: Context,
    @Root() author: Author,
    @Args() { offset, limit }: PaginationInput
  ): Promise<Post[]> {
    const [posts] = await context.posts.findAndCount({
      where: { authorId: author.id },
      skip: offset,
      take: limit,
    });
    return posts;
  }

  @Mutation(() => Author)
  async addAuthor(@Ctx() context: Context, @Arg("name") name: string) {
    const author = context.authors.create();
    author.name = name;
    return context.authors.save(author);
  }
}
