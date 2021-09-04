import React, { useState } from "react";
import { Link } from "react-router-dom";
import './MainCard.scss';

const MainCard = (props) =>{
	return(
		<div className="main-card">
			<h1 className="main-card-heading">
				{props.heading}
			</h1>
			<div className= "main-card-media">
					<img src={props.img} alt={props.alt}/>
					<p>{props.para}</p>
			</div>
		</div>
	)
}

export default MainCard;