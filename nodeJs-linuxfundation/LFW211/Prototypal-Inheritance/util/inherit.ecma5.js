function inherit(object, inheritFrom) {
    object.prototype = Object.create(inheritFrom.prototype)
    object.prototype.construct = inheritFrom

    return object
}

module.exports = {
    inherit: inherit
}
