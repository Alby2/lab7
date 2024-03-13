import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  const showOrCloseMenu = (e) => {
    // e.preventDefault();
    // alert("close")
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="z-20 bg-primary/70  backdrop-blur-md bg-[#13172749] fixed  px-5 md:px-8 w-screen max-h-28 overflow-hidden text-white text-lg ">
        <div className="flex justify-between py-7 px-0 items-center ">
          <div className="col-span-5  font-extrabold text-lg lg:text-xl flex items-center">
            <div className="mr-3 md:hidden" onClick={showOrCloseMenu}>
              <MdMenu size={35} />
            </div>
            {/* <div className="flex items-center">
              <img src="/short_logo_primary.svg" className="  h-6" />
              <span className='font-medium text-3xl  text-primary' >LAB7</span>
            </div> */}
            <div className="flex items-center">
              <img src="/vertical_logo_secondary.svg" className="  h-9 w-12" />
              <span className='font-medium text-3xl  text-secondary' >LAB7</span>
            </div>

          </div>
          <div className="col-span-7  md:space-x-4 lg:space-x-7  hidden md:block ">
            <Link to={"/accueil"}>
              <span className={(pathname.includes("accueil") || pathname === "/") ? "border-b-2 py-2 border-yellow-500 hover:border-white hover:transition-transform cursor-pointer" : "border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>Accueil</span>

            </Link>
            <Link to={"/apropos"}>
              <span className={pathname.includes("apropos") ? "border-b-2 py-2 border-yellow-500 hover:border-white hover:transition-transform cursor-pointer" : "border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>A propos</span>
            </Link>
            <Link to={"/blogs"}>
              <span className={(pathname.includes("blog")) ? "border-b-2 py-2 border-yellow-500 hover:border-white hover:transition-transform cursor-pointer" : "border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>Blogs</span>
            </Link>
            <Link to={"/forums"}>
              <span className={(pathname.includes("forum")) ? "border-b-2 py-2 border-yellow-500 hover:border-white hover:transition-transform cursor-pointer" : "border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>Forums</span>
            </Link>
            <Link to={"/contact"}>
              <span className={(pathname.includes("contact")) ? "border-b-2 py-2 border-yellow-500 hover:border-white hover:transition-transform cursor-pointer" : "border-b-2 py-2  border-transparent  hover:border-white cursor-pointer"}>Contact</span>
            </Link>

            {/* <span className="border-b-2 py-2  border-transparent  hover:border-white cursor-pointer">Inscription</span> */}
            <span className="bg-gradient-to-tr from-primary to-secondary shadow-2xl shadow-slate-950 text-black px-5 py-2 rounded-3xl cursor-pointer">Connexion</span>
          </div>
          {/* <div className="col-span-7 space-x-7 lg:hidden">
            <span className="bg-gradient-to-tr bg-primary/60 text-white hover:from-primary hover:to-secondary shadow-2xl shadow-slate-950  px-5 py-2 rounded-md cursor-pointer">Connexion</span>

          </div> */}
        </div>
      </nav>
      {isOpen && <MobileMenu click={showOrCloseMenu} />}

    </>
  )
}

export default Navbar