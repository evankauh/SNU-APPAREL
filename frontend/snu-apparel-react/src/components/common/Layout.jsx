import Proptypes from "prop-types";
import { Header } from "./Header";
import { Footer } from "./Footer";


export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main style={{minHeight: "80vh"}}>{children}</main>
            <Footer/>
        </>
    )
};



Layout.Proptypes = {
    children: Proptypes.isRequired,
};