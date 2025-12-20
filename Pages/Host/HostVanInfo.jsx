import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { van } = useOutletContext()

    console.log(van.description)

    if (!van) return <h2>Loading...</h2>

    return <h1>{van.description}</h1>
}