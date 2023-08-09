
const Card = ({ image,title,description,textafterimage=false }) => {
    return (
        <div className="mx-14 border-b-2 border-primary py-10">
            <div className="grid grid-cols-12 items-center ">
                <div className={textafterimage ?"col-span-3":"col-span-3 order-2"}>
                    <img src={image} alt="" className="w-3/4 " />
                </div>
                <div className={textafterimage ? "col-span-9 bg-white h-fit shadow-2xl py-10 px-20 rounded-xl":"col-span-9 bg-white h-fit shadow-2xl py-10 px-20 rounded-xl order-1"}>
                    <div className="flex justify-end">
                        <div className="text-xl font-semibold mb-10 py-1 border-b-2 border-primary w-fit">{title}</div>
                    </div>
                    <p className="text-md font-thin">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card