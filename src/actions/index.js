"use strict";
exports.__esModule = true;
exports.RECIEVE_COMMENT_NAME = 'comment/recieve';
exports.recieveComment = function (content) { return ({
    type: exports.RECIEVE_COMMENT_NAME,
    content: content
}); };
exports.DISPOSE_COMMENT_NAME = 'comment/dispose';
exports.disposeComment = function (id) { return ({
    type: exports.DISPOSE_COMMENT_NAME,
    id: id
}); };
