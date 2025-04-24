import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userStore";

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store