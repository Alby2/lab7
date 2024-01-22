
const Card = ({ image,title,description,textafterimage=false }) => {
    return (
        <div className="2xl:mx-14  py-10 mx-4">
            <div className="grid grid-cols-12 items-center ">
                
                <div className={`col-span-12 hidden md:block md:col-span-3  ${textafterimage? "order-1": "order-2"}`}>
                    <img src={image} alt="" className=" " />
                </div>
                <div className={`col-span-12 md:col-span-9 bg-white h-fit shadow-2xl p-10 md:py-14  lg:py-24 lg:px-20 rounded-xl ${textafterimage?'order-2' : "order-1"}`}>
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