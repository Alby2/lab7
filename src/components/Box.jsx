const Box = ({title="",soustitle='',content,footer})=>{
    return(
        <div className="p-10 my-5 bg-white rounded-lg shadow-xl">
            <div className=" text-xl text-primary font-black py-1 border-b-2 border-primary w-fit">{title}</div>
            <div className=" text-lg text-black font-bold">{soustitle}</div>
            <div className="mt-5"> 
                {content}
            </div>
            {footer}
            
        </div>
    )
}
export default Box;