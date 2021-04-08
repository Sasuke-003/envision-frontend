import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import "./Home.css";

function Home() {
    const [events, setEvents] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    return (
        <div className='home'>
            {events.map((index) => (
                <EventCard key={index} />
            ))}
        </div>
    );
}

export default Home;
