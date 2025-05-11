import { CommentInfo } from "./CommentInfo";

export function CommentList() {
  return (
    <div className="mx-40 mt-5 mb-5">
      <div>
        <span className="text-xl text-black">全部评论</span>
        <div>
          <hr></hr>
          <CommentInfo  />
        </div>
      </div>
    </div>
  )
}