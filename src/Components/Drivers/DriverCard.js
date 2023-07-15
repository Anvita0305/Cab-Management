import { Link } from 'react-router-dom';
import "./Drivers.css"

export default function DriverCard({item}) {
  return (
    <div>
        <Link to={`/drivers/${item.id}`} className="data-card">
            <h3>{item.name}</h3>
            <h4>{item.contact_number}</h4>
            <p>{item.email}</p>
            <span className="link-text">
            View Cabs
            </span>
        </Link>
    </div>
  )
}