const Bannier = ({ title, description }) => {
    return (
        <div className=" px-10 md:px-20 text-white ">
            <span className="text-[4rem] font-bold w-fit border-b-4 border-primary-2  py-2">{title}</span>
            <div className="text-xl pt-10 max-lg:text-lg  font-normal w-fit">
                {description}
            </div>
            <div className="flex mt-10 items-center">
                <div className="bg-primary border-2 border-secondary px-8 py-5 font-black text-lg rounded-full cursor-pointer -mr-10 z-10">Recherche</div>
                <div className="flex bg-white w-fit rounded-3xl">
                    <input type="text" placeholder="Entrez votre recherche" className="bg-transparent text-sm pl-10 text-gray-900 border-none outline-none" />
                    <div className="w-[2px] min-h-full my-4 mx-3  bg-gray-400"></div>
                    <div className="w-10 py-5 pointer-events-auto">
                        <svg className=" text-slate-400 font-extrabold w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className=" mt-4 px-5 items-center flex max-w-full flex-wrap space-y-1">
                <div className=" text-white/60">
                    Étiquettes:
                </div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 ">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 ">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 ">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 ">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 ">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 ">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 ">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70">ESP8266</div>
                <div className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70">ESP8266</div>
                 </div>

        </div>
    )
}

export default Bannier