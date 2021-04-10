import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";

function TabPanel(props) {
    const { children, value, index, activeIndex, ...other } = props;
    const [events, setEvents] = useState([{}, {}, {}, {}]);
    return (
        <div
            className='home'
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>
            {activeIndex === index ? events.map((index) => <EventCard key={index + "a" + activeIndex} />) : null}
        </div>
    );
}

export default TabPanel;
