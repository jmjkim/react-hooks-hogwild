import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import DisplayHogs from "./DisplayHogs";

export default function App() {
	const [filterBy, setFilterBy] = useState("All");

	const handleFilterBy = (selectedOption) => {
		setFilterBy(selectedOption.target.value);
	}

	const newHogArray = () => {
		const sortByName = () => hogs.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : null);
		const sortByWeight = () => hogs.sort((a, b) => a.weight - b.weight);

		return hogs.filter(hog => {
			if (filterBy === "All") return hog;
			if (filterBy === "Name") return sortByName();

			else if (filterBy === "Greased") return hog.greased === true;
			else if (filterBy === "Weight") return sortByWeight();

			else return hog.greased === false;
		})
	}

	return (
		<div className="App">
			<Nav handleFilterBy={handleFilterBy} />
			<DisplayHogs hogsArray={newHogArray()} />
		</div>
	);
}