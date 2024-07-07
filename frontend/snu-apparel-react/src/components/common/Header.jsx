import { menulists } from "../../assets/linkData.js/data.js"
import { CustomLink, Badges } from "./CustomComponents.jsx"
import { AiOutlineShopping } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";



export const Header = () => {
    return (
        <>
            <header className="header px-12 py-3 lg:py-0 bg-white-100 relative z-20">
                <nav className="p-4 flex justify-between items-center relative">
                    <div className="relative flex items-center w-full justify-center">
                        {/* LOGO */}
                        <div className="h-7 py-0 absolute left-0">UCSD Sigma Nu</div>
                        
                        {/* MENULINKS */}
                        <div className="hidden lg:flex items-center justify-between gap-8">
                            {menulists.map((list) => (
                                <li key={list.id} className="uppercase list-none">
                                    <a href={list.path}>{list.link}</a>
                                </li>
                            ))}
                        </div>

                        {/* CART / SEARCH / LOGIN ICONS */}
                        <div className="absolute right-0 flex items-center gap-8 icons">
                            <div className="hidden lg:block text-inherit relative z-20">
                                <CustomLink>Login</CustomLink>
                                <span>/</span>
                                <CustomLink>Register</CustomLink>
                            </div>
                            <div className="icon flex items-center justify-center gap-6">
                                <FiSearch size={18}/>

                                <div className="relative z-20">
                                    <AiOutlineShopping size={23}/>

                                    <div className="absolute -top-2 -right-1.5">
                                        <Badges color="bg-primary-green">0</Badges>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}