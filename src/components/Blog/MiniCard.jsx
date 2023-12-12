const MiniCard = ({title,category,author})=>{
    return (
        <div className="mx-0  flex items-center cursor-pointer  p-3">
            <div className="w-14 h-14 bg-gray-50 mr-3"></div>
            <div>
                <div className="text-primary text-[10px] font-semibold line-clamp-1">{category}</div>
                <div className=" text-md font-semibold line-clamp-1 ">{title}</div>
                <div className="text-gray-400 text-sm font-semibold line-clamp-1">{author}</div>
            </div>
        </div>
    )
}
export default MiniCard