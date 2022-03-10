module.exports = function inherit(object, inheritFrom) {
    function ChainLink() {}
    ChainLink.prototype = inheritFrom.prototype;

    object.prototype = new ChainLink();
}
