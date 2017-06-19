var redux_logger_1 = require('redux-logger');
var redux_1 = require('redux');
var logger = redux_logger_1.createLogger({});
function configureStore() {
    var store = redux_1.compose(redux_1.applyMiddleware(logger))(redux_1.createStore)({});
    return store;
}
exports["default"] = configureStore;
