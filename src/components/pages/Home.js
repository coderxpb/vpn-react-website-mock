import React from 'react';
import {Link} from 'react-router-dom';
import MainCard from '../MainCard';
import './Home.scss';
import mtvImg from '../../images/mtv.svg';
import wfaImg from '../../images/wfa.svg';
import anaImg from '../../images/ana.svg';
const Home = () =>{
	return(
		<div className="home">
			<MainCard direction='' heading="The most trusted VPN." alt="Most secure vpn" img={mtvImg} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
			<MainCard direction='--reverse' heading="Never worry about your data again." alt="Stress free life" img={wfaImg} para="Sem fringilla ut morbi tincidunt augue interdum velit euismod. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. " />
			<MainCard direction='' heading="A new adventure awaits!" alt="Go on a new adventure" img={anaImg} para="At tellus at urna condimentum. Eget dolor morbi non arcu risus. Sed adipiscing diam donec adipiscing. Luctus venenatis lectus magna fringilla. Aliquet sagittis id consectetur purus. " />
		</div>
	);
}

export default Home;