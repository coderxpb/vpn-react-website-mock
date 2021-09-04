import React from 'react';
import PricingCard from '../PricingCard';

const Pricing = () => {
	return (
		<div className="pricing">
			<PricingCard features={['Single user login', 'Servers in 5 location', '500GB bandwidth', 'Basic cybersecurity']} tier="Individual" price="$0.99/m" />
			<PricingCard features={['Upto 4 users','Servers in 15 location', '4TB bandwidth', 'Premium cybersecurity']} tier="Premium" price="$3.99/m" />
			<PricingCard features={['Upto 20 users', 'Servers in 50 location', '20TB bandwidth', 'Enterprise cybersecurity']} tier="Enterprise" price="$10/m" />

		</div>
	);
}

export default Pricing;