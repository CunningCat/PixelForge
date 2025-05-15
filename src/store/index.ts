import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userStore";
import postReducer from "./modules/postStore";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
   
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
