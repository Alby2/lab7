
const Card = () => {
    return (
        <div className="h-fit pb-0 shadow-2xl rounded-xl z-10 my-10 bg-white">
            <div className="h-[500px] bg-article bg-center rounded-t-xl p-5">
                <div className="bg-primary w-24 text-center absolute rounded-md -mt-14 ">
                    <div className="px-1 py-1">
                        <div className="text-2xl text-white font-bold">24</div>
                        <div className="text-lg text-white font-bold">Juillet</div>
                        <div className="text-2xl text-white font-bold">2023</div>
                    </div>
                </div>
                <div className="flex mt-0 justify-end space-x-3 ">
                    <div className="cursor-pointer bg-primary/25 px-3 py-1 rounded-lg">{"J'aime"}</div>
                    <div className="cursor-pointer bg-primary/25 px-3 py-1 rounded-lg">{"Partager"}</div>
                </div>
            </div>


            <div className="  px-5  rounded-b-2xl py-5 shadow-inner ">
                <div className="my-2 text-lg font-extrabold mb-5">
                Guide de Configuration d' un ESP8266 en Mode Répéteur WiFi
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-sm mr-2">Publié par </div>

                        <div className="text-sm m font-light text-primary cursor-pointer">KPONSO Albericq</div>

                    </div>
                    <div className="">
                        <span className="text-md font-semibold text-primary cursor-pointer hover:border-b-2 hover:border-gray-900">Tutoriel | Reseau Informatique</span>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Card