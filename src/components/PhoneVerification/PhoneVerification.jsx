import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./PhoneVerification.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            marginTop: theme.spacing(1),
            width: "60%",
            maxWidth: "500px",
            color: "black",
            marginRight: theme.spacing(2),
        },
        "& .MuiFormLabel-root": {
            color: "black",
            // fontFamily: "'Poppins', sans-serif",
        },
        "& .MuiButton-root": {
            marginTop: theme.spacing(1),
            width: "40%",
            backgroundColor: "#14213d",
            color: "#fca311",
            fontFamily: "'Poppins', sans-serif",
        },
        "& .MuiButton-contained.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            boxShadow: "none",
        },
        display: "flex",
        justifyContent: "space-between",
    },
    otp: {
        "& .MuiTextField-root": {
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(2),
            width: "60%",
            maxWidth: "500px",
            color: "black",
        },
        "& .MuiFormLabel-root": {
            color: "black",
            // fontFamily: "'Poppins', sans-serif",
        },

        "& .MuiButton-root": {
            marginTop: theme.spacing(2),
            width: "40%",
            backgroundColor: "#14213d",
            color: "#fca311",
            fontFamily: "'Poppins', sans-serif",
        },
        "& .MuiButton-contained.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            boxShadow: "none",
        },
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2),
    },
    verified: {
        "& .MuiTextField-root": {
            marginTop: theme.spacing(2),
            width: "60%",
            maxWidth: "500px",
            color: "black",
            marginRight: theme.spacing(2),
        },
        "& .MuiFormLabel-root": {
            color: "black",
            // fontFamily: "'Poppins', sans-serif",
        },
        "& .MuiButton-root": {
            marginTop: theme.spacing(2),
            width: "40%",
            backgroundColor: "#14213d",
            color: "#fca311",
            fontFamily: "'Poppins', sans-serif",
        },
        "& .MuiButton-contained.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            boxShadow: "none",
        },
        marginBottom: theme.spacing(2),
    },
}));

function PhoneVerification({ phoneNumber = "9731299294" }) {
    const classes = useStyles();

    const [phone, setPhone] = useState(phoneNumber);
    const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
    const [otpErrorMsg, setOtpErrorMsg] = useState("");
    const [otp, setOtp] = useState("");
    const [otpDisabled, setOtpDisabled] = useState(true);
    const [sendOtpBtnDisabled, setSendOtpBtnDisabled] = useState(false);
    const [verifyBtnDisabled, setVerifyBtnDisabled] = useState(true);
    const [counter, setCounter] = useState(60);
    const [timer, setTimer] = useState("");
    const [verified, setVerified] = useState(phoneNumber === "" ? false : true);
    const startCounter = () => {
        setTimer(
            setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000)
        );
    };

    const handleVerifyClick = () => {};

    const handleSendOtpClick = () => {
        setCounter(60);
        startCounter();
        setSendOtpBtnDisabled(true);
        setOtpDisabled(false);
        setVerifyBtnDisabled(false);
    };

    useEffect(() => {
        const checkCounter = () => {
            if (counter === 0) {
                clearInterval(timer);
                setSendOtpBtnDisabled(false);
            }
        };
        checkCounter();
    }, [counter, sendOtpBtnDisabled, timer]);

    return !verified ? (
        <div className='phoneVerification'>
            <h3 className='phoneVerification__mainText'>CONTACT INFO</h3>
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField
                    value={phone}
                    size='small'
                    type='number'
                    onChange={(e) => {
                        if (e.target.value.toString().length <= 10) setPhone(e.target.value);
                    }}
                    id='outlined-error-helper-text'
                    label='Phone Number'
                    error={phoneErrorMsg === "" ? false : true}
                    helperText={phoneErrorMsg}
                    variant='outlined'
                />
                <Button variant='contained' color='primary' disabled={sendOtpBtnDisabled} onClick={() => handleSendOtpClick()}>
                    {sendOtpBtnDisabled ? "RESEND (" + counter + ")" : "SEND OTP"}
                </Button>
            </form>
            <form className={classes.otp} noValidate autoComplete='off'>
                <TextField
                    value={otp}
                    size='small'
                    onChange={(e) => {
                        if (e.target.value.length <= 4) setOtp(e.target.value);
                    }}
                    id='outlined-error-helper-text'
                    label='Otp'
                    error={otpErrorMsg === "" ? false : true}
                    helperText={otpErrorMsg}
                    variant='outlined'
                    disabled={otpDisabled}
                />
                <Button variant='contained' color='primary' disabled={verifyBtnDisabled} onClick={() => handleVerifyClick}>
                    VERIFY
                </Button>
            </form>
        </div>
    ) : (
        <div className='phoneVerification'>
            {" "}
            <h3 className='phoneVerification__mainText'>CONTACT INFO</h3>
            <form className={classes.otp} noValidate autoComplete='off'>
                <TextField value={phoneNumber} size='small' label='Phone Number' variant='outlined' disabled />
                <Button variant='contained' color='primary' disabled='true' startIcon={<DoneAllRoundedIcon />}>
                    VERIFIED
                </Button>
            </form>
        </div>
    );
}

export default PhoneVerification;
