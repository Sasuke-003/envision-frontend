import React, { useState, useRef, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { setCurrentUserStatus } from "../../redux/userStatus/userStatus.actions";
import CustomButton from "../../components/CustomButton/CustomButton";
import { api } from "../../server";
import ReCAPTCHA from "react-google-recaptcha";

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
        },
    },
    progress: {
        color: "#f8b6cc",
    },
}));

function Login({ history, setCurrentUserStatus }) {
    const classes = useStyles();
    const [isComputing, setIsComputing] = useState(false);
    const [email, setEmail] = useState("mdhafeez@gmail.com");
    const [pass, setPass] = useState("12345678");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const recaptchaRef = useRef();
    const grecaptchaObject = window.grecaptcha;

    useEffect(() => {
        const initialize = () => {
            recaptchaRef.current.reset();
        };
        initialize();
    }, []);

    const handleLogin = async () => {
        setIsComputing(true);
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
        const LoginData = {
            email: email,
            pass: pass,
            reCaptchaToken: token,
        };
        try {
            await api.user.signIn(LoginData);
            setCurrentUserStatus(["isLoggedIn", true]);
        } catch (e) {
            setIsComputing(false);
        }
    };

    return (
        <div className='login'>
            <div className='login__logo'></div>
            <form className={classes.root} autoComplete='off' id='demo-form' action='?' method='POST'>
                <TextField
                    value={email}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    label='EMAIL'
                    error={emailErrorMsg === "" ? false : true}
                    helperText={emailErrorMsg}
                    variant='outlined'
                    fullWidth
                />

                <TextField
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type='password'
                    label='PASSWORD'
                    error={passErrorMsg === "" ? false : true}
                    helperText={passErrorMsg}
                    variant='outlined'
                />
                <ReCAPTCHA
                    sitekey='6LfDTawaAAAAALjcHHw3DhIpSWaXork6_SngNf7n'
                    size='invisible'
                    ref={recaptchaRef}
                    grecaptcha={grecaptchaObject}
                    onErrored={() => recaptchaRef.current.reset()}
                    onExpired={() => recaptchaRef.current.reset()}
                />
            </form>
            <CustomButton
                onClick={handleLogin}
                size='large'
                endIcon={isComputing ? null : <ExitToAppIcon />}
                style={{ fontSize: "1.2rem", width: "80%", maxWidth: "500px", marginTop: "1vh" }}>
                {isComputing ? null : "LOGIN  "}
                {isComputing ? <CircularProgress className={classes.progress} size='30px' /> : null}
            </CustomButton>
            <div className='login__link'>
                <div
                    className='login__signUpBtn'
                    onClick={() => {
                        history.push("/signup");
                    }}>
                    SIGN UP
                </div>
                <Link className='login__forgotLink' to='/'>
                    Forgot Password?
                </Link>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUserStatus: (user) => dispatch(setCurrentUserStatus(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
