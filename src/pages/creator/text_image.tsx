export function TextImage() {
  return (
    <div>
      <button className="bg-gray-200 w-30 h-30 text-4xl mt-3 text-gray-500 cursor-pointer rounded-lg">+</button>
      <div className="mt-5 mx-auto bg-gray-200 h-[300px] rounded-lg">
        <div className="pt-2 pl-2">
          <input type="text" placeholder="标题" className="focus:outline-none w-full">
          </input>
        </div>
        <hr className="w-full border-gray-300 mt-2  " />
        <div className="pt-2 pl-2">
          <textarea placeholder="正文" maxLength={500} className="focus:outline-none w-full resize-none" >
          </textarea>
        </div>
        
      </div>
      <div>
          <span className="mr-2">关联社区</span>
          <button className="bg-gray-200 w-25 h-10 text-l mt-2 text-gray-500 cursor-pointer rounded-lg">+添加社区</button>
        </div>
    </div>
  )}