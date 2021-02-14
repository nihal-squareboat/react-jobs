import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/**
 * redux-persist config
 */
const persistConfig = {
  key: "jobs",
  storage: storage,
};

/**
 * Configure Redux Persist
 */
export const configurePersistReducer = (reducers) => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
