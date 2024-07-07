import Proptypes from "prop-types";
import { Header } from "./Header";


export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main style={{minHeight: "80vh"}}>{children}</main>
            <h2>Footer</h2>
        </>
    )
};



Layout.Proptypes = {
    children: Proptypes.isRequired,
};