import React from "react"
import { useParams } from "react-router-dom"
import { Link, Outlet, NavLink } from "react-router-dom"

export default function HostVanDetail() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  // ✅ Make sure this matches your route param name.
  // If your route is "/vans/:id" then keep { id }.
  // If your route is "/vans/:vanId" then change to { vanId } and use that below.
  const { id } = useParams()

  const [van, setVan] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    let isMounted = true

    async function loadVan() {
      setError(null)

      try {
        const res = await fetch(`/api/host/vans/${id}`)
        if (!res.ok) throw new Error(`Request failed (HTTP ${res.status})`)

        const data = await res.json()

        // ✅ Handles either { van: {...} } OR { vans: {...} }
        const vanData = data.van ?? data.vans

        if (!vanData) throw new Error("Van not found in API response")

        if (isMounted) setVan(vanData)
      } catch (err) {
        console.error(err)
        if (isMounted) setError(err.message)
      }
    }

    if (id) loadVan()

    return () => {
      isMounted = false
    }
  }, [id])

  if (error) {
    return (
      <div className="van-detail-container">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="van-detail-container">
        <Link to=".." relative="path">Back to Vans</Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      <nav className="host-van-detail-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>
                <NavLink
                    to="pricing"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>
                 <NavLink
                    to="Photos"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
                </nav>
        <Outlet context={{van}}/>
    </div>
  )
}
