// import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import "./SignUp.css";
// import { makeStyles } from "@material-ui/core/styles";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import { validateEmail } from "../../Util";
// import CustomButton from "../../components/CustomButton/CustomButton";
// import MenuItem from "@material-ui/core/MenuItem";
// import Recaptcha from "react-invisible-recaptcha";
// import { getPopup } from "../../Util";
// import { api } from "../../server";
// import axios from "axios";

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
//     const [fullName, setFullName] = useState("asdasd");
//     const [email, setEmail] = useState("asdasd@sdsd.ghg");
//     const [usn, setUsn] = useState("AAAAAAAAAA");
//     const [gender, setGender] = useState("M");
//     const [pass, setPass] = useState("12345678");
//     const [rPass, setRPass] = useState("12345678");
//     const [tcAccepted, setTcAccepted] = useState(true);
//     const [fullNameErrorMsg, setFullNameErrorMsg] = useState("");
//     const [emailErrorMsg, setEmailErrorMsg] = useState("");
//     const [usnErrorMsg, setUsnErrorMsg] = useState("");
//     const [passErrorMsg, setPassErrorMsg] = useState("");
//     const [rPassErrorMsg, setRPassErrorMsg] = useState("");
//     const [token, settoken] = useState("");
//     let recaptchaRef;
//     // const recaptchaRef = React.createRef();

//     const handleSignUp = () => {
//         if (fullName === "") {
//             getPopup("error", "Full Name cannot be empty!");
//             return;
//         }
//         if (fullName.length < 4 || fullName.length > 40) {
//             getPopup("error", "Full Name must be between 4 and 40 characters");
//             return;
//         }
//         if (email === "") {
//             getPopup("error", "Email Id cannot be empty!");
//             return;
//         }

//         if (emailErrorMsg !== "") {
//             getPopup("error", "Enter valid email id!");
//             return;
//         }
//         if (email.length < 12 || email.length > 50) {
//             getPopup("error", "Email must be between 11 and 50 characters");
//             return;
//         }
//         if (usn === "") {
//             getPopup("error", "USN cannot be empty!");
//             return;
//         }
//         if (pass === "") {
//             getPopup("error", "Password cannot be empty!");
//             return;
//         }
//         if (passErrorMsg !== "") {
//             getPopup("error", "Password field must contain 8-16 characters");
//             return;
//         }
//         if (rPass !== pass) {
//             getPopup("error", "Passwords do not match!");
//             return;
//         }
//         // recaptchaRef.current.render();
//         recaptchaRef?.render();
//         recaptchaRef?.execute();
//     };

//     const afterVerification = async (token) => {
//         // try {
//         //     const res = await api.user.signUp(signUpData);
//         //     getPopup("success", "success");
//         //     return;
//         // } catch (e) {
//         //     console.log(e);
//         // }
//         recaptchaRef?.render();
//         recaptchaRef?.reset();
//         settoken(token);
//     };

//     const sendData = () => {
//         const signUpData = {
//             email: email,
//             pass: pass,
//             name: fullName,
//             gender: gender,
//             usn: usn,
//             contact: "9731299294",
//             reCaptchaToken: token,
//         };
//         console.log(signUpData);

//         settoken("");
//     };

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
//         const value = event.target.value;
//         if (value.length <= 10) setUsn(value);
//     };
//     const handleGenderChange = (event) => {
//         setGender(event.target.value);
//     };
//     const handlePassChange = (event) => {
//         const value = event.target.value;
//         if (value.length < 16) setPass(value);
//         if (value.length < 8 && value.length !== 0) {
//             setPassErrorMsg("Password must include at least 8 characters!");
//         } else {
//             setPassErrorMsg("");
//         }
//         if (rPass !== value && value.length !== 0 && rPass.length !== 0) {
//             setRPassErrorMsg("Password does not match!");
//         } else {
//             setRPassErrorMsg("");
//         }
//     };
//     const handleRPassChange = (event) => {
//         const value = event.target.value;
//         if (value.length < 16) setRPass(value);
//         if (pass !== value && value.length !== 0) {
//             setRPassErrorMsg("Password does not match!");
//         } else {
//             setRPassErrorMsg("");
//         }
//     };
//     const handleTcAcceptedChange = (event) => {
//         setTcAccepted(event.target.checked);
//     };

//     return (
//         <div className='signup'>
//             <h1 className='signUp__topText'>SIGN UP</h1>

//             {/* <hr className='signUp__divider' /> */}
//             <form className={classes.root} noValidate autoComplete='off'>
//                 <h3 className='signUp__mainText'>BASIC INFO</h3>
//                 <TextField
//                     value={fullName}
//                     onChange={handleNameChange}
//                     id='outlined-error-helper-text'
//                     label='Full Name'
//                     error={fullNameErrorMsg === "" ? false : true}
//                     helperText={fullNameErrorMsg}
//                     variant='outlined'
//                     size='small'
//                     inputProps={{ style: { textTransform: "uppercase" } }}
//                 />
//                 <TextField
//                     value={email}
//                     onChange={handleEmailChange}
//                     id='outlined-error-helper-text'
//                     label='Email'
//                     error={emailErrorMsg === "" ? false : true}
//                     helperText={emailErrorMsg}
//                     variant='outlined'
//                     size='small'
//                 />
//                 <TextField
//                     id='outlined-select-currency'
//                     select
//                     label='GENDER'
//                     size='small'
//                     value={gender}
//                     onChange={handleGenderChange}
//                     style={{ textAlign: "left" }}
//                     variant='outlined'>
//                     {[
//                         { key: 0, label: "MALE", value: "M" },
//                         { key: 1, label: "FEMALE", value: "F" },
//                     ].map((option) => (
//                         <MenuItem key={option.key} value={option.value}>
//                             {option.label}
//                         </MenuItem>
//                     ))}
//                 </TextField>
//             </form>
//             {/* <form className={classes.root} noValidate autoComplete='off'>
//                 <h3 className='signUp__mainText'>CONTACT INFO</h3>
//                 <TextField
//                     value={phone}
//                     onChange={handlePhoneChange}
//                     id='outlined-error-helper-text'
//                     label='Phone Number'
//                     error={phoneErrorMsg === "" ? false : true}
//                     helperText={phoneErrorMsg}
//                     variant='outlined'
//                     size='small'
//                 />
//             </form> */}
//             <form className={classes.root} noValidate autoComplete='off'>
//                 <h3 className='signUp__mainText'>OTHER INFO</h3>
//                 <TextField
//                     value={usn}
//                     onChange={handleUsnChange}
//                     id='outlined-error-helper-text'
//                     label='Usn'
//                     error={usnErrorMsg === "" ? false : true}
//                     helperText={usnErrorMsg}
//                     variant='outlined'
//                     size='small'
//                     inputProps={{ style: { textTransform: "uppercase" } }}
//                 />
//                 <TextField
//                     value={pass}
//                     onChange={handlePassChange}
//                     id='outlined-error-helper-text'
//                     type='password'
//                     label='Password'
//                     error={passErrorMsg === "" ? false : true}
//                     helperText={passErrorMsg}
//                     variant='outlined'
//                     size='small'
//                 />
//                 <TextField
//                     value={rPass}
//                     onChange={handleRPassChange}
//                     id='outlined-error-helper-text'
//                     label='Re-Enter Password'
//                     error={rPassErrorMsg === "" ? false : true}
//                     helperText={rPassErrorMsg}
//                     variant='outlined'
//                     size='small'
//                 />
//             </form>
//             <div className='signUp__content'>
//                 <h3 className='signUp__mainText'>TERMS AND CONDITIONS</h3>
//                 <div className='signUp__terms'>
//                     <ol style={{ padding: "0", marginLeft: "5%" }}>
//                         <li>Must be present at the venue before 15 mins.</li>
//                         <li>Certificates will not be issued for those who did not participate.</li>
//                         <li>For more info contact Event Coordinator.</li>
//                     </ol>
//                 </div>

//                 <FormControlLabel
//                     control={
//                         <Checkbox
//                             checked={tcAccepted}
//                             onChange={handleTcAcceptedChange}
//                             color='primary'
//                             inputProps={{ "aria-label": "secondary checkbox" }}
//                         />
//                     }
//                     label="I've read and agreed to all the terms and conditions."
//                 />
//             </div>
//             <Recaptcha
//                 render='explicit'
//                 ref={(el) => {
//                     recaptchaRef = el;
//                 }}
//                 sitekey='6LfDTawaAAAAALjcHHw3DhIpSWaXork6_SngNf7n'
//                 onResolved={afterVerification}
//                 onError={() => alert("error")}
//                 onExpired={() => alert("expired")}
//             />
//             <CustomButton
//                 size='large'
//                 style={{ width: "90%", marginTop: "2vh", maxWidth: "500px", fontSize: "1.2rem" }}
//                 onClick={handleSignUp}
//                 disabled={!tcAccepted}>
//                 SIGNUP
//             </CustomButton>
//             {token !== "" ? sendData() : null}
//         </div>
//     );
// }

// export default SignUp;

import React, { useState, useRef, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./SignUp.css";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { validateEmail } from "../../Util";
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuItem from "@material-ui/core/MenuItem";
import ReCAPTCHA from "react-google-recaptcha";
import { getPopup } from "../../Util";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";
import { api } from "../../server";
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
    progress: {
        color: "#f8b6cc",
    },
}));

function SignUp({ history }) {
    const classes = useStyles();
    const [fullName, setFullName] = useState("HAFEEZ");
    const [email, setEmail] = useState("muhammadhafeez896@gmail.com");
    const [usn, setUsn] = useState("4SN17CS052");
    const [gender, setGender] = useState("M");
    const [pass, setPass] = useState("12345678");
    const [rPass, setRPass] = useState("12345678");
    const [tcAccepted, setTcAccepted] = useState(true);
    const [fullNameErrorMsg, setFullNameErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [usnErrorMsg, setUsnErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const [rPassErrorMsg, setRPassErrorMsg] = useState("");
    const [isComputing, setIsComputing] = useState(false);
    const recaptchaRef = useRef();
    const grecaptchaObject = window.grecaptcha;

    useEffect(() => {
        const initialize = () => {
            recaptchaRef.current.reset();
        };
        initialize();
    }, []);

    const handleSignUp = async () => {
        setIsComputing(true);
        if (fullName === "") {
            getPopup("error", "Full Name cannot be empty!");
            return;
        }
        if (fullName.length < 4 || fullName.length > 40) {
            getPopup("error", "Full Name must be between 4 and 40 characters");
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
        if (email.length < 12 || email.length > 50) {
            getPopup("error", "Email must be between 11 and 50 characters");
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

        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
        const signUpData = {
            email: email,
            pass: pass,
            name: fullName,
            gender: gender,
            usn: usn,
            contact: "9731299294",
            reCaptchaToken: token,
        };
        try {
            await api.user.signUp(signUpData);
            history.push("/login");
            getPopup("success", "Activation link has been sent to your email");
        } catch (error) {
            setIsComputing(false);
        }
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
        if (value.length < 16) setPass(value);
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
        if (value.length < 16) setRPass(value);
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
                    inputProps={{ style: { textTransform: "uppercase" } }}
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
                        { key: 0, label: "MALE", value: "M" },
                        { key: 1, label: "FEMALE", value: "F" },
                    ].map((option) => (
                        <MenuItem key={option.key} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

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

            <ReCAPTCHA
                sitekey='6LfDTawaAAAAALjcHHw3DhIpSWaXork6_SngNf7n'
                size='invisible'
                ref={recaptchaRef}
                grecaptcha={grecaptchaObject}
                onErrored={() => recaptchaRef.current.reset()}
                onExpired={() => recaptchaRef.current.reset()}
                onloadCallback={() => alert("Recaptcha")}
            />

            <CustomButton
                size='large'
                style={{ width: "90%", marginTop: "2vh", maxWidth: "500px", fontSize: "1.2rem" }}
                onClick={handleSignUp}
                disabled={!tcAccepted}>
                {isComputing ? <CircularProgress className={classes.progress} size='30px' /> : "SIGN UP"}
            </CustomButton>
        </div>
    );
}

export default withRouter(SignUp);
