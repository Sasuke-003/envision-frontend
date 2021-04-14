import React, { useState, useEffect } from "react";
import PhoneVerification from "../../components/PhoneVerification/PhoneVerification";
import "./Profile.css";
import QrGenerator from "../../components/QrGenerator/QrGenerator";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            width: "100%",
            maxWidth: "500px",
            color: "black",
        },
        "& .MuiFormLabel-root": {
            color: "black",
            // fontFamily: "'Poppins', sans-serif",
        },
        "& .MuiButton-root": {
            marginTop: theme.spacing(1),
            width: "100%",
            backgroundColor: "#14213d",
            color: "#fca311",
            fontFamily: "'Poppins', sans-serif",
            marginBottom: theme.spacing(2),
        },
        "& .MuiButton-contained.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
        },
    },
}));

function Profile() {
    const classes = useStyles();
    const [usn, setUsn] = useState("4SN17CS052");
    const [usnErrorMsg, setUsnErrorMsg] = useState("");
    const [gender, setGender] = useState("MALE");
    const [editing, setEditing] = useState(false);
    return (
        <div className='profile'>
            <QrGenerator />
            <div className='profile__nonEditable'>
                <h3>MOHAMMAD HAFEEZ S</h3>
                <h5>muhammadhafeez896@gmail.com</h5>
            </div>
            <hr className='profile__divider' />
            {/* <div className='profile__editable'>
                <h3 className='profile__mainText'>BASIC INFO</h3>
                <form className={classes.root} noValidate autoComplete='off'>
                    <TextField
                        value='MOHAMMAD HAFEEZ S'
                        size='small'
                        id='outlined-error-helper-text'
                        label='NAME'
                        variant='outlined'
                        disabled='true'
                    />
                    <TextField
                        value='muhammadhafeez896@gmail.com'
                        size='small'
                        id='outlined-error-helper-text'
                        label='EMAIl'
                        variant='outlined'
                        disabled='true'
                    />
                </form>
            </div> */}
            {/* <hr className='profile__divider' /> */}
            <PhoneVerification />
            <hr className='profile__divider' />
            <div className='profile__editable'>
                <h3 className='profile__mainText'>OTHER INFO</h3>
                <form className={classes.root} noValidate autoComplete='off'>
                    <TextField
                        value={usn}
                        size='small'
                        onChange={(e) => {
                            if (e.target.value.length <= 10) setUsn(e.target.value);
                        }}
                        id='outlined-error-helper-text'
                        label='USN'
                        error={usnErrorMsg === "" ? false : true}
                        helperText={usnErrorMsg}
                        variant='outlined'
                        disabled={!editing}
                    />
                    <TextField
                        id='outlined-select-currency'
                        select
                        label='GENDER'
                        size='small'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        variant='outlined'
                        disabled={!editing}>
                        {[
                            { key: 0, label: "MALE" },
                            { key: 1, label: "FEMALE" },
                            { key: 3, label: "OTHER" },
                        ].map((option) => (
                            <MenuItem key={option.key} value={option.label}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant='contained' color='primary' onClick={() => setEditing((prevState) => !prevState)}>
                        {editing ? <SaveIcon /> : <EditIcon />} &nbsp;&nbsp;&nbsp;&nbsp;
                        {editing ? "SAVE CHANGES" : "EDIT"}
                    </Button>
                </form>
            </div>
            <hr className='profile__divider' />
            <div className='eventDetail__content'>
                {" "}
                <p className='eventDetail__rules'>
                    <strong>Note :</strong>
                    <br /> Must be present at the venue before 15 mins.
                    <br /> Certificates will not be issued for those who did not participate.
                    <br /> For more info contact Event Coordinator.
                </p>
            </div>
        </div>
    );
}
export default Profile;
