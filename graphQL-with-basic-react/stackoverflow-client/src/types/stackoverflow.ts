export type StackOverflowUser = {
  display_name: String,
  link: String,
  profile_image: String,
  reputation: Number,
  user_id: Number,
  user_type: String
}

export type SearchItem = {
  answer_count: Number,
  creation_date: Number,
  is_answered: Boolean,
  last_activity_date: Number,
  link: String,
  question_id: Number,
  score: Number,
  owner: StackOverflowUser,
  view_count: Number
}
