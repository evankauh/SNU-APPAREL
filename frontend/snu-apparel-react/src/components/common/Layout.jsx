import Proptypes from "prop-types";
import { Header } from "./Header";


export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main style={{minHeight: "80vh"}}>{children}</main>
        </>
    )
};



Layout.Proptypes = {
    children: Proptypes.isRequired,
};