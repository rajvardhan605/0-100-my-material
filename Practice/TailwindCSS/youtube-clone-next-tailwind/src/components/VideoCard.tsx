export default function VideoCard(props: any){
  return(
    <div className="p-3 cursor-pointer">
      <img className="rounded-lg" src={props.thumbimage}></img>
      <div className="grid grid-cols-12 mt-3">
        <div className="col-span-1">
          <img className="rounded-full" src={props.channellogo}></img>
        </div>
        <div className="col-span-11 pl-2">
          <div className="text-xl">{props.title}</div>
          <div className="text-base text-gray-400">{props.author}</div>
          <div className="text-base text-gray-400">{props.views} . {props.timestamp}</div>
        </div>
      </div>
    </div>
  );
}