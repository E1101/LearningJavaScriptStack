// enum members are by default given a numeric value,
// starting from 0, incrementing by one as members are
// added to the list.
enum CategoriesID {
    Food,
    Entertainment,
    Housing,
    Utilities,
    Transportation,
    Misc,
}

let myCategoriesID: CategoriesID;

myCategoriesID = CategoriesID.Food // OK
myCategoriesID = CategoriesID.Entertainment // OK
myCategoriesID = 0 // OK
myCategoriesID = 100 // OK

myCategoriesID = 'Food' // ERROR
// --------------------------------------

enum Category {
    Food = 'FOOD',
    Housing = 'HOUSING',
    Utilities = 'UTILITIES',
}

let myCategory: Category

myCategory = Category.Utilities; // OK
myCategory = 0 // ERROR
myCategory = 'FOOD' // ERROR
// --------------------------------------

enum HTTP {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}

let myHttp: HTTP

myHttp = HTTP.Success // OK
myHttp = 200 // OK
myHttp = 400 // OK

myHttp = 'Success' // ERROR
