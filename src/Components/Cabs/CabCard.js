import { Link } from 'react-router-dom';
import "./Cabs.css"

export default function CabCard({item}) {
  return (
    <div>
        <Link to={`/cab/${item.id}`} className="data-card">
            <h3>{item.cabreg}</h3>
            <h4>{item.model}</h4>
            <p>{item.color}</p>
            <span className="link-text">
            View Driver
            </span>
        </Link>
    </div>
  )
}