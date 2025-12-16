import { useEffect, useState } from "react"

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.map(van => (
    <div key={van.id}>
      <img src={van.imageUrl} alt={van.name} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
    </div>
  ))

  return <>{vanElements}</>
}
