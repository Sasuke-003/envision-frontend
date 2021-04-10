import React from "react";
import "./MyEventCard.css";
import Title from "../Title/Title";
import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);
theme.typography.h2 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
        fontSize: "1.1rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.6rem",
    },
    marginBottom: "2%",
};

function MyEventCard({
    startDate = "Today at 3pm (202-ME BLOCK)",
    venue = "202 (ME BLOCK)",
    isRegistered = false,
    isCanceled = false,
    isRegistrationClosed = false,
}) {
    return (
        <div className='myEventCard'>
            <div className='myEventCard__content'>
                <img
                    className='myEventCard__logo'
                    src='https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                    alt='error'
                />
                <div className='myEventCard__text'>
                    <Title />
                    {/* <h5 className='eventCard__eventType'>Venue : {venue}</h5> */}
                    <h6 className='myEventCard__myEventStart'>{startDate}</h6>
                    <h6 className='myEventCard__myEventVenue'>Venue : {venue}</h6>
                </div>
            </div>
        </div>
    );
}

export default MyEventCard;
