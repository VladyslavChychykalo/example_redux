import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import timerReducer from "./timer/timerReducer";
import postsReducer from "./posts/postsReducer";

// import logger from "./middleware/logger";
import logger from "redux-logger";
import throttle from "./middleware/throttle";
import stateValidator from "./middleware/state-validation";
import analytics from "./middleware/analytics";

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer
});

const enhancer = applyMiddleware(throttle, logger, analytics, stateValidator);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
