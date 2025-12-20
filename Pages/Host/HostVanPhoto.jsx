import { useOutletContext } from "react-router-dom"

export default function HostVanPhoto() {

    const { van } = useOutletContext()
    return <img src={van.imageUrl} alt={van.name} />
}