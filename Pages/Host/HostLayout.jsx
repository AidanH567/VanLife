import {Outlet} from "react-router-dom"
import Header from "../../components/Header"
import { Link } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <nav>
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>     
            </nav>
            <Outlet/>
        </>
    )
}