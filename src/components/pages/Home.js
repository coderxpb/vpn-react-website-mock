import React from 'react';
import {Link} from 'react-router-dom';
import MainCard from '../MainCard';
import './Home.scss';
import homeImg from '../../images/home.svg';

const Home = () =>{
	return(
		<div className="home">
			<MainCard para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " heading="The most secure VPN." alt="hello3" img={homeImg}/>
		</div>
	);
}

export default Home;