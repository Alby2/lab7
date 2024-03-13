import { useEffect } from "react"
import Apropos from "../components/Home/Apropos"
import Articles from "../components/Home/Articles"
import Bannier from "../components/Home/Bannier"
import Footer from "../components/layouts/Footer"
import { useDispatch } from "react-redux"
import { fetchPosts } from "../store/reducers/posts/postSlice"

const Home = () => {
    const __ = useDispatch()
    useEffect(()=>{
        console.log('Get all Posts')
        __(fetchPosts())
        return ()=>{

        }

    },[])
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