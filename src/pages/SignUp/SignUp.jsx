// import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import "./SignUp.css";
// import { makeStyles } from "@material-ui/core/styles";
// import CustomStepper from "../../components/CustomStepper/CustomStepper";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import { validateEmail } from "../../Util";
// import CustomButton from "../../components/CustomButton/CustomButton";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& .MuiTextField-root": {
//             margin: theme.spacing(1.5),
//             width: "90%",
//             maxWidth: "500px",
//             color: "black",
//         },
//         "& .MuiFormLabel-root": {
//             color: "black",
//             // fontFamily: "'Poppins', sans-serif",
//         },
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "100%",
//     },
// }));

// function SignUp() {
//     const classes = useStyles();
//     const [step, setStep] = useState(0);
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [usn, setUsn] = useState("");
//     const [phone, setPhone] = useState("");
//     const [pass, setPass] = useState("");
//     const [rPass, setRPass] = useState("");
//     const [fullNameErrorMsg, setFullNameErrorMsg] = useState("");
//     const [emailErrorMsg, setEmailErrorMsg] = useState("");
//     const [usnErrorMsg, setUsnErrorMsg] = useState("");
//     const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
//     const [passErrorMsg, setPassErrorMsg] = useState("");
//     const [rPassErrorMsg, setRPassErrorMsg] = useState("");
//     const handleNameChange = (event) => {
//         setFullName(event.target.value);
//     };
//     const handleEmailChange = (event) => {
//         const emailId = event.target.value;

//         if (!validateEmail(emailId)) {
//             if (emailId === "") {
//                 setEmailErrorMsg("");
//             } else setEmailErrorMsg("Invalid email address!");
//         } else {
//             if (emailErrorMsg !== "") setEmailErrorMsg("");
//         }
//         setEmail(emailId);
//     };
//     const handleUsnChange = (event) => {
//         setUsn(event.target.value);
//     };
//     const handlePhoneChange = (event) => {
//         setPhone(event.target.value);
//     };
//     const handlePassChange = (event) => {
//         setPass(event.target.value);
//     };
//     const handleRPassChange = (event) => {
//         setRPass(event.target.value);
//     };
//     return (
//         <div className='signup'>
//             <CustomStepper step={step} />
//             <hr className='profile__divider' />
//             {step === 0 ? (
//                 <form className={classes.root} noValidate autoComplete='off'>
//                     <h3 className='signUp__mainText'>OTHER INFO</h3>
//                     <TextField
//                         value={fullName}
//                         onChange={handleNameChange}
//                         id='outlined-error-helper-text'
//                         label='Full Name'
//                         error={fullNameErrorMsg === "" ? false : true}
//                         helperText={fullNameErrorMsg}
//                         variant='outlined'
//                     />
//                     <TextField
//                         value={email}
//                         onChange={handleEmailChange}
//                         id='outlined-error-helper-text'
//                         label='Email'
//                         error={emailErrorMsg === "" ? false : true}
//                         helperText={emailErrorMsg}
//                         variant='outlined'
//                     />
//                     <TextField
//                         value={usn}
//                         onChange={handleUsnChange}
//                         id='outlined-error-helper-text'
//                         label='Usn'
//                         error={usnErrorMsg === "" ? false : true}
//                         helperText={usnErrorMsg}
//                         variant='outlined'
//                     />
//                 </form>
//             ) : step === 1 ? (
//                 <form className={classes.root} noValidate autoComplete='off'>
//                     <TextField
//                         value={phone}
//                         onChange={handlePhoneChange}
//                         id='outlined-error-helper-text'
//                         label='Phone Number'
//                         error={phoneErrorMsg === "" ? false : true}
//                         helperText={phoneErrorMsg}
//                         variant='outlined'
//                     />
//                     <TextField
//                         value={pass}
//                         onChange={handlePassChange}
//                         id='outlined-error-helper-text'
//                         type='password'
//                         label='Password'
//                         error={passErrorMsg === "" ? false : true}
//                         helperText={passErrorMsg}
//                         variant='outlined'
//                     />
//                     <TextField
//                         value={rPass}
//                         onChange={handleRPassChange}
//                         id='outlined-error-helper-text'
//                         type='password'
//                         label='Re-Enter Password'
//                         error={rPassErrorMsg === "" ? false : true}
//                         helperText={rPassErrorMsg}
//                         variant='outlined'
//                     />
//                 </form>
//             ) : step === 2 ? (
//                 <h3>Terms and Conditions</h3>
//             ) : null}

//             {step === 2 ? (
//                 <CustomButton
//                     size='large'
//                     style={{ width: "90%", marginTop: "2vh", maxWidth: "500px" }}
//                     onClick={() => setStep((prevStep) => (prevStep !== 2 ? prevStep + 1 : prevStep))}>
//                     SIGN UP
//                 </CustomButton>
//             ) : (
//                 <CustomButton
//                     size='large'
//                     style={{ width: "90%", marginTop: "2vh", maxWidth: "500px" }}
//                     onClick={() => setStep((prevStep) => (prevStep !== 2 ? prevStep + 1 : prevStep))}
//                     endIcon={<NavigateNextIcon fontSize='large' style={{ color: "#fca311" }} />}>
//                     PROCEED
//                 </CustomButton>
//             )}
//             {step === 0 ? null : (
//                 <div className='signup__link'>
//                     <div className='signup__backBtn' onClick={() => setStep((prevStep) => (prevStep !== 0 ? prevStep - 1 : prevStep))}>
//                         BACK
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default SignUp;

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./SignUp.css";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { validateEmail } from "../../Util";
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuItem from "@material-ui/core/MenuItem";
import Recaptcha from "react-invisible-recaptcha";
import { getPopup } from "../../Util";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1.5),
            width: "90%",
            maxWidth: "500px",
            color: "black",
        },
        "& .MuiFormLabel-root": {
            color: "black",
            // fontFamily: "'Poppins', sans-serif",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
}));

function SignUp() {
    const classes = useStyles();
    const [fullName, setFullName] = useState("Hafeez");
    const [email, setEmail] = useState("muhammadhafeez@gmail.com");
    const [usn, setUsn] = useState("asdas");
    const [gender, setGender] = useState("MALE");
    const [pass, setPass] = useState("12345678");
    const [rPass, setRPass] = useState("12345678");
    const [tcAccepted, setTcAccepted] = useState(true);
    const [fullNameErrorMsg, setFullNameErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [usnErrorMsg, setUsnErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const [rPassErrorMsg, setRPassErrorMsg] = useState("");

    const recaptchaRef = React.createRef();

    const handleSignUp = () => {
        if (fullName === "") {
            getPopup("error", "Full Name cannot be empty!");
            return;
        }
        if (email === "") {
            getPopup("error", "Email Id cannot be empty!");
            return;
        }
        if (emailErrorMsg !== "") {
            getPopup("error", "Enter valid email id!");
            return;
        }
        if (usn === "") {
            getPopup("error", "USN cannot be empty!");
            return;
        }
        if (pass === "") {
            getPopup("error", "Password cannot be empty!");
            return;
        }
        if (passErrorMsg !== "") {
            getPopup("error", "Password field must contain 8-16 characters");
            return;
        }
        if (rPass !== pass) {
            getPopup("error", "Passwords do not match!");
            return;
        }
        recaptchaRef.current.render();
        recaptchaRef.current.execute();
    };

    const afterVerification = async (token) => {
        const data = {
            secret: "6LfDTawaAAAAAP7kCPYLRD6UHnuf9hbFDTiXeOVI",
        };

        try {
            const res = await axios.post("https://www.google.com/recaptcha/api/siteverify", data);
            console.log(res);
            getPopup("success", "success");
        } catch (err) {
            getPopup("error", "failed");
        }

        console.log(token);
    };

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
        const value = event.target.value;
        if (value.length <= 10) setUsn(value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handlePassChange = (event) => {
        const value = event.target.value;
        if (value.length <= 16) setPass(value);
        if (value.length < 8 && value.length !== 0) {
            setPassErrorMsg("Password must include at least 8 characters!");
        } else {
            setPassErrorMsg("");
        }
        if (rPass !== value && value.length !== 0 && rPass.length !== 0) {
            setRPassErrorMsg("Password does not match!");
        } else {
            setRPassErrorMsg("");
        }
    };
    const handleRPassChange = (event) => {
        const value = event.target.value;
        if (value.length <= 16) setRPass(value);
        if (pass !== value && value.length !== 0) {
            setRPassErrorMsg("Password does not match!");
        } else {
            setRPassErrorMsg("");
        }
    };
    const handleTcAcceptedChange = (event) => {
        setTcAccepted(event.target.checked);
    };

    return (
        <div className='signup'>
            <h1 className='signUp__topText'>SIGN UP</h1>

            {/* <hr className='signUp__divider' /> */}
            <form className={classes.root} noValidate autoComplete='off'>
                <h3 className='signUp__mainText'>BASIC INFO</h3>
                <TextField
                    value={fullName}
                    onChange={handleNameChange}
                    id='outlined-error-helper-text'
                    label='Full Name'
                    error={fullNameErrorMsg === "" ? false : true}
                    helperText={fullNameErrorMsg}
                    variant='outlined'
                    size='small'
                />
                <TextField
                    value={email}
                    onChange={handleEmailChange}
                    id='outlined-error-helper-text'
                    label='Email'
                    error={emailErrorMsg === "" ? false : true}
                    helperText={emailErrorMsg}
                    variant='outlined'
                    size='small'
                />
                <TextField
                    id='outlined-select-currency'
                    select
                    label='GENDER'
                    size='small'
                    value={gender}
                    onChange={handleGenderChange}
                    style={{ textAlign: "left" }}
                    variant='outlined'>
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
            </form>
            {/* <form className={classes.root} noValidate autoComplete='off'>
                <h3 className='signUp__mainText'>CONTACT INFO</h3>
                <TextField
                    value={phone}
                    onChange={handlePhoneChange}
                    id='outlined-error-helper-text'
                    label='Phone Number'
                    error={phoneErrorMsg === "" ? false : true}
                    helperText={phoneErrorMsg}
                    variant='outlined'
                    size='small'
                />
            </form> */}
            <form className={classes.root} noValidate autoComplete='off'>
                <h3 className='signUp__mainText'>OTHER INFO</h3>
                <TextField
                    value={usn}
                    onChange={handleUsnChange}
                    id='outlined-error-helper-text'
                    label='Usn'
                    error={usnErrorMsg === "" ? false : true}
                    helperText={usnErrorMsg}
                    variant='outlined'
                    size='small'
                    inputProps={{ style: { textTransform: "uppercase" } }}
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
                    size='small'
                />
                <TextField
                    value={rPass}
                    onChange={handleRPassChange}
                    id='outlined-error-helper-text'
                    label='Re-Enter Password'
                    error={rPassErrorMsg === "" ? false : true}
                    helperText={rPassErrorMsg}
                    variant='outlined'
                    size='small'
                />
            </form>
            <div className='signUp__content'>
                <h3 className='signUp__mainText'>TERMS AND CONDITIONS</h3>
                <div className='signUp__terms'>
                    <ol style={{ padding: "0", marginLeft: "5%" }}>
                        <li>Must be present at the venue before 15 mins.</li>
                        <li>Certificates will not be issued for those who did not participate.</li>
                        <li>For more info contact Event Coordinator.</li>
                    </ol>
                </div>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={tcAccepted}
                            onChange={handleTcAcceptedChange}
                            color='primary'
                            inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                    }
                    label="I've read and agreed to all the terms and conditions."
                />
            </div>
            <Recaptcha
                render='explicit'
                ref={recaptchaRef}
                sitekey='6LfDTawaAAAAALjcHHw3DhIpSWaXork6_SngNf7n'
                onResolved={afterVerification}
                onError={() => recaptchaRef.current.reset()}
                onExpired={() => recaptchaRef.current.reset()}
            />
            <CustomButton
                size='large'
                style={{ width: "90%", marginTop: "2vh", maxWidth: "500px", fontSize: "1.2rem" }}
                onClick={handleSignUp}
                disabled={!tcAccepted}>
                SIGNUP
            </CustomButton>
        </div>
    );
}

export default SignUp;
