// "ui grid container" for hog list parent container
//  children className -> "ui eight wide column"

import React from "react";
import HogDetail from "../assets/HogDetail";

export default function DisplayHogs({ hogsArray }) {
    return (
        <div className="ui grid container">
            {hogsArray.map(hog => {
                return (
                <div key={hog.name} className="ui eight wide column">
                    <HogDetail name={hog.name} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedalAchieved={hog["highest medal achieved"]} imageUrl={hog.image} />
                </div>)
            })}
        </div>
    )
}