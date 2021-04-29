import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import storage from "redux-persist/lib/storage";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const middlewares = [promise, thunk];
const enhancers = [];
const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

let store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(...middlewares, ...enhancers))
);
let persistor = persistStore(store);

export { store, persistor };
