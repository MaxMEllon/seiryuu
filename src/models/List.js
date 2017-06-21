"use strict";
exports.__esModule = true;
var List = (function () {
    function List() {
        this.raw = [];
    }
    List.prototype.updated = function () {
    };
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
        var index = this.raw.findIndex(function (i) { return i.id == id; });
        if (index != -1)
            this.raw.splice(index, 1);
    };
    List.prototype.find = function (id) {
        return this.raw.find(function (i) { return i.id == id; });
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
