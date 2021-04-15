import React, { useState } from "react";
import MyEventCard from "../../components/MyEventCard/MyEventCard";
import MyEventCardV2 from "../../components/MyEventCardV2/MyEventCardV2";
import "./myEvents.css";

function MyEvents() {
    const [events, setEvents] = useState([{}, {}, {}, {}, {}]);
    return (
        <div className='myEvents'>
            <h1 className='myEvents__mainText'>My Events</h1>
            {events.map((index) => (
                <MyEventCardV2 key={index} />
            ))}
        </div>
    );
}

export default MyEvents;
