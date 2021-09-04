import styled from "styled-components";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import 'boxicons';
import './Navbar.scss';

const Navbar = () =>{
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => setMenuOpen(!menuOpen);

	return (
		<div className="navbar">
			<div className="navbar-container">

				<Link to='/' className="navbar-logo">
					<box-icon type='solid' name='low-vision' color='#F43B86' size="40px"></box-icon>
					NoVision
				</Link>

				<div className='menu-icon' onClick={handleMenuClick}>
					{menuOpen ? <box-icon name='x' color='white' size='36px'/> : <box-icon name='menu' color='white' size='36px'/>}
				</div>

				<ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-menu-item">
						<Link to='/' className="nav-menu-link">
							Home
						</Link>
					</li>
					<li className="nav-menu-item">
						<Link to='/features' className="nav-menu-link">
							Features
						</Link>
					</li>
					<li className="nav-menu-item">
						<Link to='/pricing' className="nav-menu-link">
							Pricing
						</Link>
					</li>
				</ul>

			</div>
		</div>
	)
}

export default Navbar;