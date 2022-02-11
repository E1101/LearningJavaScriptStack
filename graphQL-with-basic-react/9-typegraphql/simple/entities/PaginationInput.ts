import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class PaginationInput {
  @Field({ nullable: true, defaultValue: 0 })
  offset!: number;

  @Field({ nullable: true, defaultValue: 10 })
  limit!: number;
}
