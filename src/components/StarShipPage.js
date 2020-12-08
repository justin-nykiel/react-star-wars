
import {Link} from 'react-router-dom'

function StarShipPage({location}) {
  return (
    <div>
        <h3>{location.state.name}</h3>
        <h3>{location.state.model}</h3>
        <Link to='/'>Return</Link>
    </div>
  )
}

export default StarShipPage;