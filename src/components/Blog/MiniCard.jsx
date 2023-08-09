const MiniCard = ({title,category,author})=>{
    return (
        <div className="mx-0  flex items-center cursor-pointer hover:shadow-md p-3">
            <div className="w-14 h-14 bg-gray-50 mr-3"></div>
            <div className="">
                <div className="text-primary text-[10px] font-thin line-clamp-1">{category}</div>
                <div className=" text-md font-thin line-clamp-1 ">{title}</div>
                <div className="text-gray-400 text-sm font-thin line-clamp-1">{author}</div>
            </div>
        </div>
    )
}
export default MiniCard