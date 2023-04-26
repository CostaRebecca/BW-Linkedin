import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import userDataReducer from "../reducers/userDataReducer";
import usersReducer from "../reducers/usersReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import postsDataReducer from "../reducers/postsReducer";
import jobReducer from "../reducers/jobReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET
    })
  ]
};

const rootReducer = combineReducers({
  userData: userDataReducer,
  users: usersReducer,
  experieces: experiencesReducer,
  posts: postsDataReducer,
  job: jobReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
