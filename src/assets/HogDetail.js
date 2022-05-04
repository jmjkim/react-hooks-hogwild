import React, { useState } from "react";

export default function HogDetail({ name, specialty, weight, greased, highestMedalAchieved, imageUrl }) {
    const [toggled, setToggled] = useState(false);
    const detail = <ul>
                     <li>Specialty: {specialty}</li>
                     <li>Weight: {weight}</li>
                     <li>Greased: {`${greased}`}</li>
                     <li>Highest Medal Achieved: {highestMedalAchieved}</li>
                   </ul>

    return (
        <React.Fragment>
            <p>{name}</p>
            {toggled ? <React.Fragment>{detail}</React.Fragment> : null}
            <img id={name} src={imageUrl} onClick={() => setToggled(!toggled)} style={{cursor: "pointer"}} width="400px" height="300px" alt={name} />
        </React.Fragment>
    );
}