import Apropos from "../components/Home/Apropos"
import Articles from "../components/Home/Articles"
import Bannier from "../components/Home/Bannier"
import Footer from "../components/layouts/Footer"
import Navbar from "../components/layouts/Navbar"

const Home = () => {
    return (
        <>
            <div className="bg-home bg-fixed min-w-screen min-h-screen bg-cover pb-10">
                <Navbar />
                <div className="grid grid-cols-7 items-center">
                    <div className="col-span-4 max-sm:col-span-7">
                        <Bannier />
                    </div>
                    <div className="col-span-3 max-sm:hidden">
                        <img src="/hosting2.svg" className="w-10/12" alt="" />
                    </div>
                    <div className="col-span-7 items-center justify-center flex">
                        <span className="text-xl text-secondary py-2 px-5 mt-28  border-2 rounded-3xl cursor-pointer hover:bg-gradient-to-tr hover:from-primary hover:border-none hover:shadow-2xl hover:to-secondary hover:text-xl hover:text-black hover:transition-colors hover:duration-500 ">Rejoingnez l'aventure</span>

                    </div>
                </div>
                <div className="flex justify-center mb-5">
                </div>
                {/* <Bannier /> */}

            </div>
            <Apropos />
            <Articles />
            <Footer />
        </>

    )
}

export default Home