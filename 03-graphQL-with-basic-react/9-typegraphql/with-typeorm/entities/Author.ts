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
  OneToMany
} from "type-graphql";
import { PaginationInput } from "../entities/PaginationInput";
import { Context } from "../context";
import { Post } from "./Post";

@Entity({ name: "Authors" })
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column()
  @Field()
  name!: string;

  @OneToMany(() => Post, (post: Post) => post.authorId, { lazy: true })
  @Field(() => [Post])
  posts!: Promise<Post>
}

@Resolver(() => Author)
export class AuthorResolver {
  @Query(() => [Author])
  async authors(
    @Ctx() context: Context,
    @Args()
    { offset, limit }: PaginationInput
  ): Promise<Author[]> {
    const authors = await context.authors.findAll({
      skip: offset,
      take: limit,
    });

    return authors;
  }

  @Mutation(() => Author)
  async addAuthor(@Ctx() context: Context, @Arg("name") name: string) {
    const author = context.authors.create();
    author.name = name;
    return context.authors.save(author);
  }
}
