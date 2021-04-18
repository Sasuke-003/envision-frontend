import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import EventCardV2 from "../../components/EventCardV2/EventCardV2";

function TabPanel(props) {
    const { children, value, index, activeIndex, ...other } = props;
    const [events, setEvents] = useState([{}, {}, {}, {}, {}]);
    return (
        <div
            className='home'
            role='tabpanel'
            // hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>
            {activeIndex === index ? events.map((event, i) => <EventCardV2 key={i + "a" + activeIndex} />) : null}
            {/* {events.map((index) => (
                <EventCardV2 key={index + "a" + activeIndex} />
            ))} */}
        </div>
    );
}

export default TabPanel;
