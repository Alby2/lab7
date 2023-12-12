import Navbar from "../layouts/Navbar"

const Bannier = () => {
    return (
        <div className="bg-home bg-fixed min-w-screen min-h-screen bg-cover pb-10">
                <Navbar />
                <div className="flex flex-col h-[75vh] pt-52 text-white   justify-center items-center">

                    <div className="border-b-2 border-primary-2">
                        <span className="2xl:text-[10rem] md:text-[6rem] text-[4rem]  font-semibold w-fit">Bienvenue au</span>
                        <div className=" 2xl:text-[10rem] text-[6rem] font-extrabold  text-center text-primary-2  "> Lab7</div>
                    </div>
                    <div className="text-xl max-lg:text-lg pt-5 font-medium w-fit text-center">Au carrefour des esprits créatifs, naissent les solutions de demain</div>
                </div>

                <div className=" items-center justify-center flex">
                    <span className="text-xl text-secondary py-2 px-5 mt-28  border-2 rounded-3xl cursor-pointer hover:bg-gradient-to-tr hover:from-primary hover:border-none hover:shadow-2xl hover:to-secondary hover:text-xl hover:text-black hover:transition-colors hover:duration-500 ">Rejoingnez l'aventure</span>
                </div>
               
            </div>
    )
}

export default Bannier