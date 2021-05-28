import authReducer from "./reducers/authReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import appReducer from "./reducers/appReducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk),
    // other store enhancers if any
);
const reducers = combineReducers({auth: authReducer, app: appReducer })
export const store = createStore(reducers,enhancer);