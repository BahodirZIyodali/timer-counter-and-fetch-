import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
     <div className="container ">
        <ul className='list-group d-flex flex-row'>
          <li className='list-group-item'>
            <Link to='/'>Home</Link> </li>
          <li className='list-group-item'>
            <Link to='/counter'>Counter</Link></li>
          <li className='list-group-item'>
            <Link to='/post'>Post</Link></li>
          <li className='list-group-item'>
            <Link to='/counter2'>Counter 2</Link></li>
        </ul>
     </div>
  )
}

export default Navbar