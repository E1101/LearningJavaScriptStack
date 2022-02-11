import {
  Resolver,
  Query,
  ObjectType,
  Field,
  Arg,
  Args,
  Mutation
} from "type-graphql";

@ObjectType()
export class Author {
  @Field()
  id!: number;

  @Field()
  name!: string;
}

@Resolver(() => Author)
export class AuthorResolver {
  private _authors: Author[] = [] // our in memory database

  @Query(() => [Author])
  authors(    
    @Args() { offset, limit }: PaginationInput
  ): Author[] {
    return this
      ._authors
      .slice(offset, offset + limit);
  }

  @Mutation(() => Author)
  addAuthor(
    @Arg("name") name: string
  ): Author {
    const author = {
      id: this._authors.length,
      name: name
    };

    this._authors.push(author);
    return author;
  }
}