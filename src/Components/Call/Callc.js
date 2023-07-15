import { Link } from 'react-router-dom';
// import "./Drivers.css"

export default function Callc({item}) {
  return (
    <div>
        <Link to={`/cab/${item.id}`} className="data-card">
            <h3>{item.name}</h3>
            <h4>{item.contact_number}</h4>
            <p>{item.email}</p>
            <span className="link-text">
            View Driver
            </span>
        </Link>
    </div>
  )
}