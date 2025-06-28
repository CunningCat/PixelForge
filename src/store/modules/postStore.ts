import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostUploadInfo } from "@/types/postuploadinfo";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postInfo: {
      uid: "",
      title: "",
      content: "",
      imageUrl: "",
      author: "",
      community: "",
    },
  },
  reducers: {
    setPost(state, action: PayloadAction<PostUploadInfo>) {
      state.postInfo = {
        ...action.payload,
        community: state.postInfo.community,
      };
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
    setAuthor(state, action: PayloadAction<string>) {
      state.postInfo.author = action.payload;
    },
    setCommunity(state, action: PayloadAction<string>) {
      state.postInfo.community = action.payload;
    },
  },
});

export const {
  setPost,
  setTitle,
  setContent,
  setImageUrl,
  setUid,
  setAuthor,
  setCommunity,
} = postSlice.actions;
const reducer = postSlice.reducer;
export default reducer;
