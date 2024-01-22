import Etiquette from "./Etiquette"

const Bannier = ({ title, description }) => {
    const etiquettes = Array(8)
    return (
        <div className=" px-10 md:px-20 text-white ">
            <div className="md:text-[4rem] text-[3rem]    border-b-4 border-primary-2 font-semibold w-fit py-2 xl:py-10 pr-5 max-md:mt-10">
                {title}
            </div>
            <div className="2xl:text-3xl text-xl pt-10 max-lg:text-lg font-light w-fit">
                {description}
            </div>
            <div className="grid grid-cols-12  mt-10 items-center  rounded-l-full">
                <div className="col-span-4 z-[4] ">
                    <div className=" bg-primary border-2  border-secondary font-medium py-4 text-center text-md rounded-full cursor-pointer ">Recherche</div>
                </div>
                <div className="  col-span-8 py-1 bg-white -ml-4 rounded-r-md grid grid-cols-12 items-center ">

                    <div className=" ml-4 col-span-9">
                        <input type="text" placeholder="Entrez votre recherche" className=" w-full bg-transparent text-sm  text-gray-900 border-none outline-none" />

                    </div>

                    <div className="ml-1 col-span-1">
                        <div className="min-h-full my-2 bg-gray-500 w-[2px] py-[15px]">{" "}</div>
                    </div>
                    <div className="col-span-2">
                        <svg className=" text-slate-400 font-extrabold w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>

                    </div>

                </div>
            </div>

            <div className=" mt-4 px-5 items-center flex max-w-full flex-wrap space-y-1">
                <div className=" text-white/60">
                    Étiquettes:
                </div>

                <Etiquette text={"ESP8266"} key={1} />
                <Etiquette text={"Programmation"} key={2} />
                <Etiquette text={"User Interface"} key={3} />
                <Etiquette text={"EPS85"} key={4} />
            </div>

        </div>
    )
}


export default Bannier