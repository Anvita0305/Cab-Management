import { Link } from 'react-router-dom';
// import "./Drivers.css"

export default function DriverCard({item}) {
  return (
    <div>
        <Link to={`/driver/${item.id}`} className="data-card">
            <h3>{item.reg}</h3>
            <h4>{item.model}</h4>
            <p>{item.color}</p>
            <span className="link-text">
            View Cab
            </span>
        </Link>
    </div>
  )
}