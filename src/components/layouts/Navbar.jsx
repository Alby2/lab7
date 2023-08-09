import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const {pathname} = useLocation()
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  
  return (
    <nav className="z-50 backdrop-blur-md bg-[#13172749] fixed px-36 max-md:px-8 w-screen max-h-28 overflow-hidden text-secondary text-lg ">
        <div className="flex justify-between py-7 px-0 ">
            <div className="col-span-5  font-extrabold text-xl">
                <span>LOGO LAB7</span>
            </div>
            <div className="col-span-7 space-x-7 max-lg:hidden ">
              <Link to={"/accueil"}>
              <span className={(pathname.includes("accueil") || pathname=="/") ? "border-b-2 py-2 border-orange-500 hover:border-white hover:transition-transform cursor-pointer":"border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>Accueil</span>

              </Link>
              <Link to={"/apropos"}>
                <span className={pathname.includes("apropos")? "border-b-2 py-2 border-orange-500 hover:border-white hover:transition-transform cursor-pointer":"border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>A propos</span>
              </Link>
              <Link to={"/blogs"}>
                <span className={(pathname.includes("blog")) ? "border-b-2 py-2 border-orange-500 hover:border-white hover:transition-transform cursor-pointer":"border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>Blogs</span>
              </Link>
                <span className="border-b-2 py-2  border-transparent  hover:border-white cursor-pointer">Forums</span>
                <span className="border-b-2 py-2  border-transparent  hover:border-white cursor-pointer">Contact</span>
                <span className="border-b-2 py-2  border-transparent  hover:border-white cursor-pointer">Inscription</span>
                <span className="bg-gradient-to-tr from-primary to-secondary shadow-2xl shadow-slate-950 text-black px-5 py-2 rounded-3xl">Connexion</span>
            </div>
            <div className="col-span-7 space-x-7 lg:hidden">
              Menu
            </div>
        </div>
    </nav>
  )
}

export default Navbar