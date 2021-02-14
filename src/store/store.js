import middlewares from "./middlewares";
import reducers from "./reducers";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Confguring a Store With Persistor
 */
const configureStore = () => {
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
  ));
  const persistor = persistStore(store);

  // persistor.purge();

  return { store, persistor };
};

export default configureStore();
