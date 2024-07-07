export default function ProfilePage() {
  return (
    <div className=" relative bg-white h-96 w-96">
      <div className=" relative">
        <div className="bg-blue-300 h-28 w-96"></div>
      </div>
      <div className=" relative mt-16">
        <div className="flex justify-center">
          <div className="font-semibold text-xl">Raj Vardhan Singh</div>
          <div className="font-semibold text-xl pl-2 text-slate-400">21</div>
        </div>
        <div className="font-semibold text-xl pl-2 text-slate-400 text-center mt-2">
          Ghaziabad
        </div>
        <hr className="h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <div className="grid grid-cols-3">
          <div>
            <div className="text-center font-bold text-xl">80K</div>
            <div className="text-center text-slate-400">Followers</div>
          </div>
          <div>
            <div className="text-center font-bold text-xl">803K</div>
            <div className="text-center text-slate-400">Likes</div>
          </div>
          <div>
            <div className="text-center font-bold text-xl">1.4K</div>
            <div className="text-center text-slate-400">Photos</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="profile.jpg" className="w-20 h-20 rounded-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
      </div>
    </div>
  );
}
