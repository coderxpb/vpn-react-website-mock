import React, {useState} from "react";
import {Link} from "react-router-dom";
import 'boxicons';
import './Navbar.scss';

const Navbar = () =>{
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => setMenuOpen(!menuOpen);
	const closeMobileMenu = () => setMenuOpen(false);

	return (
		<div className="navbar">
			<div className="navbar-container">

				<Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
					<box-icon type='solid' name='low-vision' color='#F43B86' size="40px"></box-icon>
					HideMe
				</Link>

				<div className='menu-icon' onClick={handleMenuClick}>
					{menuOpen ? <box-icon name='x' color='white' size='36px'/> : <box-icon name='menu' color='white' size='36px'/>}
				</div>

				<ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-menu-item">
						<Link to='/' className="nav-menu-link" onClick={closeMobileMenu} >
							Home
						</Link>
					</li>
					<li className="nav-menu-item">
						<Link to='/pricing' className="nav-menu-link" onClick={closeMobileMenu} >
							Pricing
						</Link>
					</li>
					<li className="nav-menu-item">
						<Link to='/features' className="nav-menu-link" onClick={closeMobileMenu} >
							Features
						</Link>
					</li>
				</ul>

			</div>
		</div>
	)
}

export default Navbar;