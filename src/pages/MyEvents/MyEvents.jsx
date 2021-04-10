import React, { useState } from "react";
import MyEventCard from "../../components/MyEventCard/MyEventCard";

function MyEvents() {
    const [events, setEvents] = useState([{}, {}, {}, {}, {}]);
    return (
        <div className='home'>
            {events.map((index) => (
                <MyEventCard key={index} />
            ))}
        </div>
    );
}

export default MyEvents;
