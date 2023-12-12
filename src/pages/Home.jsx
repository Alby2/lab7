import Apropos from "../components/Home/Apropos"
import Articles from "../components/Home/Articles"
import Bannier from "../components/Home/Bannier"
import Footer from "../components/layouts/Footer"

const Home = () => {
    return (
        <>
           
            <Bannier/>
            <Apropos />
            <Articles />
            <Footer />
        </>

    )
}

export default Home