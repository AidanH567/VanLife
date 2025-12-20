import { Outlet } from "react-router-dom" 
import Header from "./Header"
import Footer from "./Footer"  

export default function Layout({ children }) {
    return (
        <div className="app-layout">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}