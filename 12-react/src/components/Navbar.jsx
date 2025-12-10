import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navContainer">
            <div className="logo">
                <h2>TasteBite</h2>
            </div>
            <div className="navLinks">
                <Link to={'/'}>Home</Link>
                <Link to={'about'}>About</Link>
                <Link to={'product'}>Product</Link>
                <Link to={'courses'}>Courses</Link>
                <Link to={'contact'}>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar