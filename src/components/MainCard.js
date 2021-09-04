import React, { useState } from "react";
import { Link } from "react-router-dom";
import './MainCard.scss';

const MainCard = (props) =>{
	return(
		<div className={"main-card"+props.direction}>
				<div className= {"main-card-media"+props.direction}>
						<img src={props.img} alt={props.alt}/>
						<div className="main-card-text">
							<h1 className="main-card-heading">
								{props.heading}
							</h1>
							<p>{props.para}</p>
						</div>
						
				</div>
			</div>
	)
}

export default MainCard;