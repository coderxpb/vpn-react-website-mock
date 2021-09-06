import React from 'react';
import FeatureCard from '../FeatureCard';
import img1 from '../../images/ana.svg';

const Features = () => {
	return (
		<div className="features">
			<FeatureCard img={img1} features={['Single user login', 'Servers in 5 location', '500GB bandwidth', 'Basic cybersecurity']} />
			<FeatureCard features={['Upto 4 users', 'Servers in 15 location', '4TB bandwidth', 'Premium cybersecurity']} img=""/>
			<FeatureCard features={['Upto 20 users', 'Servers in 50 location', '20TB bandwidth', 'Enterprise cybersecurity']} img=""/>
			<FeatureCard features={['Upto 20 users', 'Servers in 50 location', '20TB bandwidth', 'Enterprise cybersecurity']} img="" />
			<FeatureCard features={['Upto 20 users', 'Servers in 50 location', '20TB bandwidth', 'Enterprise cybersecurity']} img="" />
			<FeatureCard features={['Upto 20 users', 'Servers in 50 location', '20TB bandwidth', 'Enterprise cybersecurity']} img="" />
			<FeatureCard features={['Upto 20 users', 'Servers in 50 location', '20TB bandwidth', 'Enterprise cybersecurity']} img="" />
			<FeatureCard features={['Upto 20 users', 'Servers in 50 location', '20TB bandwidth', 'Enterprise cybersecurity']} img="" />

		</div>
	);
}

export default Features;