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
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "Posts" })
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column()
  @Field()
  title!: string;

  @Column()
  @Field()
  text!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  authorId!: number;
}

@Resolver(() => Post)
export class PostResolver {
  @Query(() => [Post])
  async posts(
    @Ctx() context: Context,
    @Args()
    { offset, limit }: PaginationInput
  ): Promise<Post[]> {
    const [posts] = await context.posts.findAndCount({
      skip: offset,
      take: limit,
    });
    return posts;
  }

  @Mutation(() => Post)
  async addPost(
    @Ctx() context: Context,
    @Arg("authorId") authorId: number,
    @Arg("title") title: string,
    @Arg("text") text: string
  ): Promise<Post> {
    const post = context.posts.create();
    post.authorId = authorId;
    post.title = title;
    post.text = text;

    return context.posts.save(post);
  }
}
