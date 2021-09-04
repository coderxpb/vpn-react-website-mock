import React from 'react';
import './PricingCard.scss';

const PricingCard = (props) => {
	return (

		<div className="pricing-card-container">
			<h2 className="pricing-card-tier">{props.tier}</h2>
			<h1 className="pricing-card-price">{props.price}</h1>
			<ul className="pricing-card-features">
				{props.features.map((feature)=><li key={feature}>{feature}</li>)}
			</ul>

		</div>
	)
}

export default PricingCard;