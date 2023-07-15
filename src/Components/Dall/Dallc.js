import { Link } from 'react-router-dom';
// import "./Drivers.css"

export default function DriverCard({item}) {
  return (
    <div>
        <Link to={`/driver/${item.id}`} className="data-card">
            <h5>{item.cab_registration_number}</h5>
            <br></br>
            <h5>{item.cab_model}</h5>
            <p>{item.cab_colour}</p>
            <span className="link-text">
            View Cab
            </span>
        </Link>
    </div>
  )
}