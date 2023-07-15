import { Link } from 'react-router-dom';
// import "./Drivers.css"

export default function Callc({item}) {
  return (
    <div>
        <Link to={`/cab/${item.id}`} className="data-card">
            <h5>{item.name}</h5>
            <h5>{item.contact_number}</h5>
            <p>{item.email}</p>
            <span className="link-text">
            View Driver
            </span>
        </Link>
    </div>
  )
}