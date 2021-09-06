import React from 'react';
import './FeatureCard.scss';

const FeatureCard = (props) => {
	return (

		<div className="feature-card-container">
			<img className="feature-card-image" alt={props.alt} src={props.img}/>
			<ul className="feature-card-features">
				{props.features.map((feature) => <li key={feature}>{feature}</li>)}
			</ul>

		</div>
	)
}

export default FeatureCard;