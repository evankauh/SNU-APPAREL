import { useEffect, useRef, useState } from "react";
import { menulists } from "../../assets/linkData/menuLinks.js";
import { CustomNavLink, CustomMobileNavLink, CustomLink, Badges } from "./CustomComponents.jsx";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ModelCart } from "../cart/ModelCart.jsx";

export const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const toggleNav = () => {
        setMobileNav(!mobileNav);
    }

    const closeWithOutsideClick  = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)){
            setMobileNav(false);
        }
    }

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    }

    useEffect(() => {
        document.addEventListener("mousedown", closeWithOutsideClick);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", closeWithOutsideClick);
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            <header className="header px-2 py-3 lg:py-0 bg-white relative z-20">
                <nav className="p-4 flex justify-between items-center relative">
                    {/* LOGO */}
                    <div className="relative flex items-center w-full justify-center">
                        <div className="h-7 py-0 absolute left-0">
                            UCSD Sigma Nu
                        </div>
                        
                        {/* MENULINKS */}
                        <div className="hidden lg:flex items-center justify-center gap-8">
                            {menulists.map((list) => (
                                <li key={list.id} className="uppercase list-none text-white">
                                    <CustomNavLink href={list.path} className="">{list.link}</CustomNavLink>
                                </li>
                            ))}
                        </div>

                        {/* CART / SEARCH / LOGIN ICONS */}
                        <div className="absolute right-0 flex items-center gap-8 icons">
                            <div className="hidden lg:block text-inherit relative z-20">
                                <CustomLink className="" href="">Login </CustomLink>
                                <span>/</span>
                                <CustomLink className="" href="">Sign Up</CustomLink>
                            </div>
                            <div className="icon flex items-center justify-center gap-6">
                                <FiSearch size={18} />
                                <ModelCart/>
                                <button onClick={toggleNav} className="lg:hidden w-10 h-10 flex justify-center items-center focus:outline-none">
                                    {mobileNav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                                </button>
                            </div>
                        </div>
                    </div>

                    
                </nav>

                
                {/* Responsive menu for screen sizes smaller than 768px */}
                <div ref={menuRef} className={`lg:hidden absolute top-0 right-0 bg-black px-0 py-0 menu-container ${mobileNav ? "open" : "close"}`}>
                    <div className="flex justify-end pr-4">
                        <button onClick={toggleNav} className="lg:hidden m-2 w-10 h-10 flex justify-center items-center focus:outline-none">
                            {<AiOutlineClose size={24}/>}
                        </button>
                    </div>
                    <ul className="flex flex-col items-start p-5">
                        {menulists.map((list) => (
                            <li key={list.id} className="uppercase list-none text-[100] my-2">
                                <CustomMobileNavLink href={list.path} className="">{list.link}</CustomMobileNavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3 p-5 text-inherit z-20">
                        <button className="w-20 h-8 text-white border-solid border border-white rounded-[20px]"><CustomLink className="" href="">Login</CustomLink></button>
                        <button className="text-white w-20 h-8 border-solid border border-black bg-black rounded-[20px]"><CustomLink className="" href="">Sign Up</CustomLink></button>
                    </div>
                </div>
            </header>
        </>
    );
}
