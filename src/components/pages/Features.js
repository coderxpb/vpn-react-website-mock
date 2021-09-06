import React from 'react';
import FeatureCard from '../FeatureCard';
import devices from '../../images/features/devices.svg';
import configure from '../../images/features/configure.svg';
import money from '../../images/features/money.svg';
import protect from '../../images/features/protect.svg';
import finger from '../../images/features/finger.svg';
import servers from '../../images/features/servers.svg';

const Features = () => {
	return (
		<div className="features">
			<FeatureCard img={servers} features={['Multiple high speed servers', '150+ servers in 50+ countries*', 'Speed upto 1Gbps Up and Down', 'Encrypted servers']} />
			<FeatureCard img={devices} features={['Multi device support', 'Upto 3 devices per user', 'Sync settings across all']} />
			<FeatureCard img={money} features={['Affordable plans', 'Starting at $0.99', 'Discounts for students',]} />
			<FeatureCard img={finger} features={['Secure your biometrics', 'Protect yourself from id theft', 'Advanced security features', 'Running out of words']} />
			<FeatureCard img={configure} features={['Wow look at these switches', 'So cool but what', 'Do they actually do',]} />
			<FeatureCard img={protect} features={['Seems like its raining again', 'Good thing I have my umbrella', 'Protecting me from rain like', 'How HideMe will protect my data']} />

		</div>
	);
}

export default Features;