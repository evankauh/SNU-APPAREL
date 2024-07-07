import { useEffect, useRef, useState } from "react";
import { menulists } from "../../assets/linkData.js/data.js";
import { CustomNavLink, CustomLink, Badges } from "./CustomComponents.jsx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
    })

    return (
        <>
            <header className="header px-2 py-3 lg:py-0 bg-white-100 relative z-20">
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
                                    <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                                </li>
                            ))}
                        </div>

                        {/* CART / SEARCH / LOGIN ICONS */}
                        <div className="absolute right-0 flex items-center gap-8 icons">
                            <div className="hidden lg:block text-inherit relative z-20">
                                <CustomLink>Login</CustomLink>
                                <span>/</span>
                                <CustomLink>Sign Up</CustomLink>
                            </div>
                            <div className="icon flex items-center justify-center gap-6">
                                <FiSearch size={18} />
                                <div className="relative z-20">
                                    <IoMdHeart size={22}/>
                                    <div className="absolute -top-2 -right-1.5">
                                        <Badges color="bg-primary-green">0</Badges>
                                    </div>
                                </div>
                                <div className="relative z-20">
                                    <MdOutlineShoppingBag size={22} />
                                    <div className="absolute -top-2 -right-1.5">
                                        <Badges color="bg-primary-green">0</Badges>
                                    </div>
                                </div>
                                <button onClick={toggleNav} className="lg:hidden w-10 h-10 flex justify-center items-center focus:outline-none">
                                    {mobileNav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                                </button>
                            </div>
                        </div>
                    </div>

                    
                </nav>
                {/* Responsive menu for screen sizes smaller than 768px */}
                <div ref={menuRef} className={`lg:hidden absolute top-0 right-0 custom-p-0 bg-black w-full px-0 py-0 menu-container ${mobileNav ? "block" : "hidden"}`}>
                    <div className="flex justify-end pr-4">
                        <button onClick={toggleNav} className="lg:hidden m-2 w-10 h-10 flex justify-center items-center focus:outline-none">
                            {<AiOutlineClose size={24}/>}
                        </button>
                    </div>
                    <ul className="flex flex-col items-start p-5">
                        {menulists.map((list) => (
                            <li key={list.id} className="uppercase list-none text-white text-[100] my-2">
                                <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3 p-5 text-inherit z-20">
                        <button className="w-20 h-8 border-solid border-2 border-black rounded-[20px]"><CustomLink>Login</CustomLink></button>
                        <button className="text-light-gray w-20 h-8 border-solid border-2 border-black bg-black rounded-[20px]"><CustomLink>Sign Up</CustomLink></button>
                    </div>
                </div>
            </header>
        </>
    );
}
