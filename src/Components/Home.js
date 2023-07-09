import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import { Link } from 'react-router-dom'
import "./home.css"

function Home() {
  return (
    <div>
      <Navbar/>
      <br></br>
        <br></br>
      <div className="main-container">
        <div className="cards">
          <div className="card card-1">
            <h2 className="card__title">Drivers Page</h2>
            <p className="card__apply">
              <Link className="card__link" to="/drivers">Drivers</Link>
            </p>
          </div>
          <div className="card card-2">
            <h2 className="card__title">Cabs Page</h2>
            <p className="card__apply">
              <Link className="card__link" to="/cabs">Cabs</Link>
            </p>
          </div>
          <div className="card card-3">
            <h2 className="card__title">What is Afourathon ?</h2>
            <p className="card__apply">
              <Link className="card__link" to="/about">About </Link>
            </p>
          </div>
          <div className="card card-4">
            <h2 className="card__title">24 hrs Service available.</h2>
            <p className="card__apply">
              <Link className="card__link" to="/contact">Contact here </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home