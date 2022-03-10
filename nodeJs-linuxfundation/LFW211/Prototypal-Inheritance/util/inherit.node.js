const util = require("util");

module.exports = function inherit(object, inheritFrom) {
    return util.inherits(object, inheritFrom);
}
