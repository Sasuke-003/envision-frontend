import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./SignUp.css";
import { makeStyles } from "@material-ui/core/styles";
import CustomStepper from "../../components/CustomStepper/CustomStepper";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { validateEmail } from "../../Util";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "80%",
            maxWidth: "500px",
            color: "black",
        },
        "& .MuiFormLabel-root": {
            color: "black",
            // fontFamily: "'Poppins', sans-serif",
        },
    },
}));

function SignUp() {
    const classes = useStyles();
    const [step, setStep] = useState(0);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [usn, setUsn] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const [rPass, setRPass] = useState("");
    const [fullNameErrorMsg, setFullNameErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [usnErrorMsg, setUsnErrorMsg] = useState("");
    const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const [rPassErrorMsg, setRPassErrorMsg] = useState("");
    const handleNameChange = (event) => {
        setFullName(event.target.value);
    };
    const handleEmailChange = (event) => {
        const emailId = event.target.value;

        if (!validateEmail(emailId)) {
            if (emailId === "") {
                setEmailErrorMsg("");
            } else setEmailErrorMsg("Invalid email address!");
        } else {
            if (emailErrorMsg !== "") setEmailErrorMsg("");
        }
        setEmail(emailId);
    };
    const handleUsnChange = (event) => {
        setUsn(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handlePassChange = (event) => {
        setPass(event.target.value);
    };
    const handleRPassChange = (event) => {
        setRPass(event.target.value);
    };
    return (
        <div className='signup'>
            <CustomStepper step={step} />
            {step === 0 ? (
                <form className={classes.root} noValidate autoComplete='off'>
                    <TextField
                        value={fullName}
                        onChange={handleNameChange}
                        id='outlined-error-helper-text'
                        label='Full Name'
                        error={fullNameErrorMsg === "" ? false : true}
                        helperText={fullNameErrorMsg}
                        variant='outlined'
                    />
                    <TextField
                        value={email}
                        onChange={handleEmailChange}
                        id='outlined-error-helper-text'
                        label='Email'
                        error={emailErrorMsg === "" ? false : true}
                        helperText={emailErrorMsg}
                        variant='outlined'
                    />
                    <TextField
                        value={usn}
                        onChange={handleUsnChange}
                        id='outlined-error-helper-text'
                        label='Usn'
                        error={usnErrorMsg === "" ? false : true}
                        helperText={usnErrorMsg}
                        variant='outlined'
                    />
                </form>
            ) : step === 1 ? (
                <form className={classes.root} noValidate autoComplete='off'>
                    <TextField
                        value={phone}
                        onChange={handlePhoneChange}
                        id='outlined-error-helper-text'
                        label='Phone Number'
                        error={phoneErrorMsg === "" ? false : true}
                        helperText={phoneErrorMsg}
                        variant='outlined'
                    />
                    <TextField
                        value={pass}
                        onChange={handlePassChange}
                        id='outlined-error-helper-text'
                        type='password'
                        label='Password'
                        error={passErrorMsg === "" ? false : true}
                        helperText={passErrorMsg}
                        variant='outlined'
                    />
                    <TextField
                        value={rPass}
                        onChange={handleRPassChange}
                        id='outlined-error-helper-text'
                        type='password'
                        label='Re-Enter Password'
                        error={rPassErrorMsg === "" ? false : true}
                        helperText={rPassErrorMsg}
                        variant='outlined'
                    />
                </form>
            ) : step === 2 ? (
                <h3>Terms and Conditions</h3>
            ) : null}

            {step === 2 ? (
                <div className='signup__btn signup__finalBtn' onClick={() => setStep((prevStep) => (prevStep !== 2 ? prevStep + 1 : prevStep))}>
                    SIGN UP
                </div>
            ) : (
                <div className='signup__btn' onClick={() => setStep((prevStep) => (prevStep !== 2 ? prevStep + 1 : prevStep))}>
                    PROCEED &nbsp;
                    <NavigateNextIcon fontSize='large' style={{ color: "#f8b6cc" }} />
                </div>
            )}
            {step === 0 ? null : (
                <div className='signup__link'>
                    <div className='signup__backBtn' onClick={() => setStep((prevStep) => (prevStep !== 0 ? prevStep - 1 : prevStep))}>
                        BACK
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUp;
