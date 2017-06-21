"use strict";
exports.__esModule = true;
var List = (function () {
    function List() {
        this.raw = [];
    }
    List.prototype.add = function (obj) {
        this.raw.push(obj);
    };
    List.prototype.each = function (func) {
        this.raw.forEach(function (val, index) { return func(val, index); });
    };
    List.prototype.map = function (func) {
        return this.raw.map(function (val, index) { return func(val, index); });
    };
    List.prototype.remove = function (id) {
        delete this.raw[id];
    };
    List.prototype.find = function (id) {
        return this.raw[id];
    };
    List.prototype.where = function (scope) {
        return this.raw.filter(function (i) { return scope(i); });
    };
    List.prototype.clone = function () {
        var c = new List();
        c.raw = this.raw;
        return c;
    };
    return List;
}());
exports["default"] = List;
