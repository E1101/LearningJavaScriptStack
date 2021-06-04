import {
  Resolver,
  Query,
  ObjectType,
  Field
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
  private _authors: Author[] = [{
    id: 0,
    name: 'Test Author'
  }]; // our in-memory "database"

  @Query(() => [Author])
  authors(): Author[] {
    return this._authors;
  }
}