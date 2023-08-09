import Bannier from "../components/Blog/Bannier"
import Articles from "../components/Blog/Articles"
import Footer from "../components/layouts/Footer"
import Navbar from "../components/layouts/Navbar"

const Blogs = () => {
    return (
        <>
            <div className="bg-home bg-fixed min-w-screen min-h-screen bg-cover pb-10">
                <Navbar />
                <div className="grid grid-cols-9 pt-20 ">
                    <div className="col-span-4 max-md:col-span-9  ">
                        <Bannier description={`Découvrez les dernières actualités et tutoriels technologiques pour inspirer vos projets.`} title={'Blog Lab7'} />
                    </div>
                    <div className="col-span-5 max-md:col-span-9">
                        <img src="/blog/blog (3).svg" className="w-full bg-center bg-cover" alt="" />
                    </div>

                </div>
                {/* <Bannier /> */}

            </div>
            <div className="mx-24 grid g">

                <Articles />


            </div>
            <Footer />
        </>
    )
}

export default Blogs