// since the invisible closure object cannot be accessed outside of function
// if function returned a function can provide controlled access to the parent closure scope.
//
function init (type) {
    var id = 0
    return (name) => {
        id += 1
        return { id: id, type: type, name: name }
    }
}

const createUser = init('user')
const createBook = init('book')

// these two functions have access to two separate instance of the init
// functions closure scope.
const dave = createUser('Dave')
const annie = createUser('Annie')

const ncb = createBook('Node Cookbook')

console.log(dave)  // {id: 1, type: 'user', name: 'Dave'}
console.log(annie) // {id: 2, type: 'user', name: 'Annie'}
console.log(ncb)   // {id: 1, type: 'book', name: 'Node Cookbook'}
