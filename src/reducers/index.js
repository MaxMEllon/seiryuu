"use strict";
exports.__esModule = true;
var Comment_1 = require("../models/Comment");
var List_1 = require("../models/List");
var actions_1 = require("../actions");
var initialState = {
    comments: new List_1["default"]()
};
var leatestCommentId = 0;
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.RECIEVE_COMMENT_NAME: {
            var nextState = Object.assign({}, state);
            nextState.comments = state.comments.clone();
            var newComment = new Comment_1["default"](action.content, leatestCommentId++);
            nextState.comments.add(newComment);
            return nextState;
        }
        case actions_1.DISPOSE_COMMENT_NAME: {
            var nextState = Object.assign({}, state);
            nextState.comments = state.comments.clone();
            nextState.comments.remove(action.id);
            return nextState;
        }
        default:
            return state;
    }
}
exports["default"] = reducer;
