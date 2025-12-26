import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => {
        return (
            <div key={van.id}>
                        <Link to={`${van.id}`}>
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
        )
    })

    return (
        <>
            {vanElements}
        </>
    )
}
