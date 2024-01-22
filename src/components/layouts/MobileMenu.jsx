import { motion } from 'framer-motion'
import React from 'react'
import { TfiDashboard, TfiHome } from 'react-icons/tfi'
import { MdClose, MdHome, MdOutlineContactPage, MdOutlineContactPhone } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { FaDashcube, FaHandsBound, FaList, FaMessage, FaPhone } from 'react-icons/fa6'
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GrBlog } from "react-icons/gr";
import { RxHome } from "react-icons/rx";


import { CiGrid42, CiHome } from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'

const MobileMenu = ({ click }) => {
    const closeClick = (e) => {
        e.stopPropagation()
        click();
    }
    const { pathname } = useLocation();

    return (

        <motion.div
            initial={{ opacity: 0.2, translateX: "-200vw" }}
            animate={{ opacity: 1, translateX: "0" }}
            transition={{
                duration: 0.5
            }}
            className="fixed w-full h-full bg-black/60 z-20" >
            <div className="w-10/12 bg-gray-100 min-h-full max-h-full overflow-y-auto">
                <div className="flex justify-between items-center shadow-lg   bg-white px-5 py-5">
                    <div className="flex items-center">
                        <img src="/short_logo_primary.svg" className="  h-6" />
                        <span className='font-medium text-3xl  text-primary' >LAB7</span>
                    </div>


                    <div className="p-1 rounded-xl bg-secondary" onClick={closeClick}>
                        <MdClose size={25} color='#2c545c' />
                    </div>
                </div>
                <ul className='px-2 mt-5'>
                    <Link to={"/"} >
                        <li className={`m-5 py-3 flex items-center rounded-md  ${(pathname.includes("accueil") || pathname === "/") ? "bg-white shadow-lg" : ""}`} >
                            <div className={`rounded-lg px-[3px] ml-1 py-4 mr-2  ${(pathname.includes("accueil") || pathname === "/") ? "bg-yellow-300 " : ""}`}></div>
                            <RxHome size={25} color='#2c545c' />
                            <span className="text-xl font-ligth ml-4 text-primary">Accueil</span>
                        </li>
                    </Link>
                    <Link to={"/apropos"}>
                        <li className={`m-5 py-3 flex items-center rounded-md  ${pathname.includes("apropos") ? "bg-white shadow-lg" : ""}`} >
                            <div className={`rounded-lg px-[3px] ml-1 py-4 mr-2  ${pathname.includes("apropos") ? "bg-yellow-300 " : ""}`}></div>
                            <HiOutlineUserGroup size={25} color='#2c545c' />
                            <span className="text-xl font-ligth ml-4 text-primary">A Propos</span>
                        </li>
                    </Link>
                    <Link to={"/blogs"}>
                        <li className={`m-5 py-3 flex items-center rounded-md  ${pathname.includes("blog") ? "bg-white shadow-lg" : ""}`} >
                            <div className={`rounded-lg px-[3px] ml-1 py-4 mr-2  ${pathname.includes("blog") ? "bg-yellow-300 " : ""}`}></div>
                            <GrBlog size={25} color='#2c545c' />
                            <span className="text-xl font-ligth ml-4 text-primary">Blogs</span>
                        </li>
                    </Link>
                    <Link to={"/forums"}>
                        <li className={`m-5 py-3 flex items-center rounded-md  ${pathname.includes("forum") ? "bg-white shadow-lg" : ""}`} >
                            <div className={`rounded-lg px-[3px] ml-1 py-4 mr-2  ${pathname.includes("forum") ? "bg-yellow-300 " : ""}`}></div>
                            <CiGrid42 size={25} color='#2c545c' />
                            <span className="text-xl font-ligth ml-4 text-primary">Forum</span>
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className={`m-5 py-3 flex items-center rounded-md  ${pathname.includes("contact") ? "bg-white shadow-lg" : ""}`} >
                            <div className={`rounded-lg px-[3px] ml-1 py-4 mr-2  ${pathname.includes("contact") ? "bg-yellow-300 " : ""}`}></div>
                            <MdOutlineContactPhone size={25} color='#2c545c' />
                            <span className="text-xl font-ligth ml-4 text-primary">Contact</span>
                        </li>
                    </Link>
                    <Link to={"/"}>

                        <li className='my-5 mx-5 py-3 flex items-center rounded-md bg-gray-100'>
                            <span className="bg-gradient-to-tr text-xl from-primary to-secondary shadow-xl shadow-gray-400 text-black px-20 py-5 rounded-full cursor-pointer">Connexion</span>
                        </li>
                    </Link>

                </ul>
            </div>

        </motion.div>
    )
}

export default MobileMenu