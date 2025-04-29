import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { PostInfo } from "@/types/postinfo";

const postSlice = createSlice({
  name:'post',
  initialState:{
    postInfo:{
      uid: '',
      title: '',
      content: '',
      imageUrl: '',
    }
  },
  reducers:{
    setPost(state,action:PayloadAction<PostInfo>){
      state.postInfo = action.payload
    },
    setTitle(state, action: PayloadAction<string>) {
      state.postInfo.title = action.payload;
    },
    setContent(state, action: PayloadAction<string>) {
      state.postInfo.content = action.payload;
    },
    setImageUrl(state, action: PayloadAction<string>) {
      state.postInfo.imageUrl = action.payload;
    },
    setUid(state, action: PayloadAction<string>) {
      state.postInfo.uid = action.payload;
    },
  }
})

export const {setPost,setTitle,setContent,setImageUrl,setUid} = postSlice.actions
const reducer = postSlice.reducer
export default reducer