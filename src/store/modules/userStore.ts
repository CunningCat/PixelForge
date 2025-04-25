import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { User } from "@/types/user";
//用户信息
const userSlice = createSlice({
  name:'user',
  initialState:{
    userInfo:{
      id:0,
      name:'',
      avatar_url:''
    }
  },
  reducers:{
    setUser(state,action:PayloadAction<User>){
      state.userInfo = action.payload
    },
    
  }
})

const {setUser} = userSlice.actions
const reducer = userSlice.reducer
export {setUser}
export default reducer