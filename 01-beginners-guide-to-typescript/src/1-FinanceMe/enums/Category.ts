// enum members are by default given a numeric value,
// starting from 0, incrementing by one as members are
// added to the list.
// ---
// we can change this behavior by initializing our enum members to
// string values, which is useful when we intend to read or print
// an enum member's value at runtime.
enum Category {
  Food,
  Entertainment,
  Housing,
  Utilities,
  Transportation,
  Misc,
}

export default Category;
