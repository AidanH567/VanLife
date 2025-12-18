import { Outlet } from "react-router-dom" 
import Header from "./Header"
import Footer from "./Footer"  

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}