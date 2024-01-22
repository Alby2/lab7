import Bannier from "../components/Blog/Bannier"
import Articles from "../components/Blog/Articles"
import Footer from "../components/layouts/Footer"
import Navbar from "../components/layouts/Navbar"

const Blogs = () => {
    return (
        <>
            <div className="bg-home bg-fixed min-w-screen min-h-screen bg-cover pb-10 ">
                <Navbar />
                <div className="grid grid-cols-12 pt-20 items-center">
                    <div className="lg:col-span-7 col-span-12  ">
                        <Bannier description={`Découvrez les dernières actualités et tutoriels technologiques pour inspirer vos projets.`} title={'Blog Lab7'} />
                    </div>
                    <div className="lg:col-span-5  col-span-12 ">
                        <img src="/blog/blog (3).svg" className="w-11/12 bg-center bg-cover" alt="" />
                    </div>

                </div>
            </div>
            <Articles />
            <Footer />
        </>
    )
}

export default Blogs