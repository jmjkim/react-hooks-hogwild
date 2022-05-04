import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ handleFilterBy }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div className="FilterBy">
				<select onChange={handleFilterBy}>
					<option>All</option>
					<option>Greased</option>
					<option>Not Greased</option>
					<option></option>
					<option>Sort By</option>
					<option>Name</option>
					<option>Weight</option>
				</select>
			</div>
		</div>
	);
};

export default Nav;
