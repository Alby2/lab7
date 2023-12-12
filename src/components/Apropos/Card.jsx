
const Card = ({ image,title,description,textafterimage=false }) => {
    return (
        <div className="2xl:mx-14  py-10 mx-4">
            <div className="grid grid-cols-12 items-center ">
                
                <div className={textafterimage ?" col-span-12 hidden md:block md:col-span-3 ":"col-span-12 hidden md:block md:col-span-3  order-2"}>
                    <img src={image} alt="" className=" " />
                </div>
                <div className={textafterimage ? "col-span-12 md:col-span-7 bg-white h-fit shadow-2xl py-24 px-20 rounded-xl":"lg:col-span-7 col-span-12 lg:col-start-3 bg-white h-fit shadow-2xl py-24 px-20 rounded-xl order-1"}>
                    <div className={textafterimage ? "flex justify-start":"flex justify-end"}>
                        <div className="text-xl font-semibold mb-10 py-1 border-b-2 border-primary w-fit uppercase">{title}</div>
                    </div>
                    <p className="text-md font-medium">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card