import React from "react";
import "./EventCard.css";
import Title from "../Title/Title";
import { withRouter } from "react-router";
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

function EventCard({
    id = "abcd",
    startDate = "Today at 3pm (202-ME BLOCK)",
    venue = "202 (ME BLOCK)",
    isRegistered = false,
    isCanceled = false,
    isRegistrationClosed = false,
    history,
}) {
    return (
        <div className='eventCard' onClick={() => history.push("/event/" + id)}>
            <div className='eventCard__content'>
                <img
                    className='eventCard__logo'
                    src='https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                    alt='error'
                />
                <div className='eventCard__text'>
                    <Title />
                    {/* <h5 className='eventCard__eventType'>Venue : {venue}</h5> */}
                    <h6 className='eventCard__eventStart'>{startDate}</h6>
                    {isCanceled ? (
                        <button className='eventCard__button eventCard__canceled'>
                            {/* <SentimentDissatisfiedRoundedIcon /> */}
                            EVENT CANCELED
                        </button>
                    ) : isRegistered ? (
                        <button className='eventCard__button eventCard__registered'>
                            {/* <DoneAllRoundedIcon /> */}
                            REGISTERED
                        </button>
                    ) : isRegistrationClosed ? (
                        <button className='eventCard__button eventCard__registrationEnded'>
                            {/* <CancelRoundedIcon /> */}
                            REGISTRATION ENDED
                        </button>
                    ) : (
                        <button className='eventCard__button'>REGISTER NOW!</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default withRouter(EventCard);
