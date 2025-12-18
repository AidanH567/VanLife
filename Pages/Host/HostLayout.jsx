import {Outlet} from "react-router-dom"
import Header from "../../components/Header"

export default function Layout() {
    return (
        <>
            <h1>Layout Component</h1>
            <Outlet/>
        </>
    )
}