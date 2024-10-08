

export function  VideoCard(props : any){
    return <div className = "p-1.5">
        <img src = {props.thumbnailImage} className="rounded-xl cursor-pointer" />
        <div className = "grid grid-cols-12 pt-2">
            <div className = "col-span-1">
                <img className ={"rounded-full w-12 h-12 cursor-pointer"} src = {props.channelImage}></img>
            </div>
            <div className="col-span-11 pl-2">
                <div className="cursor-pointer"> {props.title} </div>
                <div className="col-span-11 text-gray-400 text-base cursor-pointer"> {props.author} </div>
                <div className="col-span-11 text-gray-400 text-base"> {props.views} | {props.timestamp} </div>
            </div>
        </div>
    </div>
}