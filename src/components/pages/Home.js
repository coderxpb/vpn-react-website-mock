import React from 'react';
import {Link} from 'react-router-dom';
import MainCard from '../MainCard';
import './Home.scss';
import homeImg from '../../images/home.svg';
import wfaImg from '../../images/wfa.svg';

const Home = () =>{
	return(
		<div className="home">
			<MainCard direction='' heading="The internet's most secure VPN." alt="hello3" img={homeImg} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
			<MainCard direction='--reverse' heading="Never worry about your data again." alt="hello3" img={wfaImg} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
		</div>
	);
}

export default Home;