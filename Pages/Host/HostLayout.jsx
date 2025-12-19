import {Outlet} from "react-router-dom"
import Header from "../../components/Header"
import { Link,NavLink } from "react-router-dom"

export default function Layout() {
    const activeStyle = { fontWeight: "bold", textDecoration: "underline",color: "#161616" }
    return (
        <>
            <nav>
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host" end>Dashboard</NavLink>
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host/income">Income</NavLink>
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink>
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host/vans">Vans</NavLink>     
            </nav>
            <Outlet/>
        </>
    )
}