import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user";
//用户信息
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      uid: "",
      name: "",
      avatar_url: "",
      exp: 0,
    },
  },
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.userInfo = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userInfo.name = action.payload;
    },
    setAvatar(state, action: PayloadAction<string>) {
      state.userInfo.avatar_url = action.payload;
    },
    setExp(state, action: PayloadAction<number>) {
      state.userInfo.exp = action.payload;
    },
  },
});

export const { setUser, setUserName, setAvatar, setExp } = userSlice.actions;
const reducer = userSlice.reducer;

export default reducer;
