import { Link } from 'react-router-dom';
import "./Cabs.css"

export default function CabCard({item}) {
  return (
    <div>
        <Link to={`/cabs/${item.id}`} className="data-card">
            <h5>{item.cabRegistrationNumber}</h5>
            <h5>{item.carModel}</h5>
            <p>{item.carColour}</p>
            <span className="link-text">
            View Drivers
            </span>
        </Link>
    </div>
  )
}