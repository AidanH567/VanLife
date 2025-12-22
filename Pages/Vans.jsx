import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter ?
    vans.filter( van => van.type===typeFilter)
    : vans

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = displayedVans.map(van => (

        <div key={van.id}>
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
            </Link>
        </div>

    ))

    return <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
            <Link to="?type=simple">Simple</Link>
            <Link to="?type=rugged">Rugged</Link>
            <Link to="?type=luxury">Luxury</Link>
            <Link to=".">Clear</Link>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
}
