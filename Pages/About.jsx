import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <>
           
            <main className="about-main">
                <img src="../assets/aboutPhoto.png" alt="" />
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <section>
                    <h1>Your destination is waiting. <br />
                        Your van is ready.</h1>
                    <Link to="/vans" className="about-main-link">Explore our vans</Link>
                </section>
            </main>
            
        </>
    )
}

