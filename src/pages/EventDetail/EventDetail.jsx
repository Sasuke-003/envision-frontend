import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./EventDetail.css";
import ChipsArray from "../../components/TeamChips/TeamChips";
import InvitePopup from "../../components/InvitePopup/InvitePopup";
import CustomButton from "../../components/CustomButton/CustomButton";
import SentimentDissatisfiedRoundedIcon from "@material-ui/icons/SentimentDissatisfiedRounded";

const useStyles = makeStyles((theme) => ({
    progress: {
        color: "#000000",
        marginTop: "35vh",
    },
    btnProgress: {
        color: "#fca311",
    },
    addBtn: {
        position: "absolute",
        top: "2px",
        right: "0",
    },
}));

function EventDetail({ match }) {
    const classes = useStyles();

    useEffect(() => {
        const getData = () => {
            const id = match.params.id;
            console.log(id);
        };
        getData();
    }, []);

    const [eventData, setEventData] = useState({
        type: "Solo Event",
        start: "Tomorrow at 2pm",
        venue: "202 (ME BLOCK)",
        isOnline: false,
        coordinator: "Mr.ABCDE FGHIJK",
        coordinatorNumber: "9766546443",
        isRegistered: false,
        isRegistrationOpen: false,
        isEventCanceled: false,
    });

    const [isComputing, setIsComputing] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [open, setOpen] = useState(false);

    const handleRegister = () => {
        // code for register request
    };

    return isComputing ? (
        <div className='eventDetail'>
            {" "}
            <CircularProgress className={classes.progress} size='45px' />
        </div>
    ) : (
        <div className='eventDetail'>
            <img className='eventDetail__image' src='/img/coderscrusade.png' alt='error' />
            <hr className='eventDetail__divider' />
            <div className='eventDetail__content'>
                {" "}
                <Title isTopHeading />
                <h4 className='eventDetail__text'>{eventData.type}</h4>
                <h4 className='eventDetail__text'>{eventData.isOnline ? "Online Event" : "Offline Event"}</h4>
                <h4 className='eventDetail__text imp'> Starts {eventData.start}</h4>
                {!eventData.isOnline ? <h4 className='eventDetail__text imp'>Venue : {eventData.venue}</h4> : null}
            </div>
            <hr className='eventDetail__divider' />
            <div className='eventDetail__myTeam'>
                {" "}
                <h3 className='eventDetail__mainText'>MY TEAM</h3>
                <ChipsArray
                    chipData={[
                        { key: 0, label: "4SN17CS052" },
                        { key: 1, label: "4SN17CS053" },
                        { key: 2, label: "4SN17CS054" },
                        { key: 3, label: "4SN17CS055" },
                    ]}
                    isRegistered={eventData.isRegistered}
                />
                {!eventData.isRegistered ? <AddCircleOutlineIcon className={classes.addBtn} fontSize='large' onClick={() => setOpen(true)} /> : null}
            </div>

            <hr className='eventDetail__divider' />
            <div className='eventDetail__content'>
                <h3 className='eventDetail__mainText'>EVENT COORDINATOR</h3>
                <h4 className='eventDetail__text'>
                    {eventData.coordinator} ({eventData.coordinatorNumber})
                </h4>
            </div>
            <hr className='eventDetail__divider' />
            <div className='eventDetail__content'>
                {" "}
                <p className='eventDetail__rules'>
                    <strong>Note :</strong> Must be present at the venue before 15 mins.
                    <br /> Certificates will not be issued for those who did not participate.
                    <br /> For more info contact Event Coordinator.
                </p>
            </div>
            {/* <div
                className={`eventDetail__registerButton ${eventData.isRegistered ? "eventDetail__registeredButton" : ""}  ${
                    btnDisabled ? "eventDetail__disabledButton" : ""
                } `}
                onClick={!btnDisabled ? (!eventData.isRegistered ? handleRegister : undefined) : undefined}>
                {!isRegistering && eventData.isRegistered ? <DoneAllRoundedIcon fontSize='large' style={{ color: "#000000" }} /> : null}

                {!isRegistering ? (
                    eventData.isRegistered ? (
                        <h2 className='eventDetail__buttonText'>REGISTERED</h2>
                    ) : (
                        <h2>REGISTER</h2>
                    )
                ) : (
                    <CircularProgress className={classes.btnProgress} size='35px' />
                )}
            </div> */}
            <CustomButton
                style={{ width: "90%" }}
                size='large'
                onClick={!btnDisabled ? (!eventData.isRegistered ? handleRegister : undefined) : undefined}
                startIcon={
                    !isRegistering && eventData.isRegistered ? (
                        <DoneAllRoundedIcon />
                    ) : !eventData.isRegistrationOpen ? (
                        <SentimentDissatisfiedRoundedIcon />
                    ) : null
                }
                textColor={eventData.isRegistered ? "#17b978" : eventData.isRegistrationOpen ? "#fca311" : "#d72323"}
                color={eventData.isRegistered || !eventData.isRegistrationOpen ? "#ffffff10" : "#14213d"}>
                {!isRegistering ? (
                    eventData.isRegistered ? (
                        "REGISTERED"
                    ) : eventData.isRegistrationOpen ? (
                        "REGISTER"
                    ) : (
                        "REGISTRATION CLOSED"
                    )
                ) : (
                    <CircularProgress className={classes.btnProgress} size='35px' />
                )}
            </CustomButton>

            <InvitePopup open={open} handleClose={() => setOpen(false)} />
        </div>
    );
}

export default withRouter(EventDetail);
