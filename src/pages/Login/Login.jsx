import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    progress: {
        color: "#f8b6cc",
    },
}));

function Login({ history }) {
    const classes = useStyles();
    const [isComputing, setIsComputing] = useState(false);
    const [usn, setUsn] = useState("");
    const [pass, setPass] = useState("");
    const [usnErrorMsg, setUsnErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const handleLogin = () => {
        const loginData = {
            usn: usn,
            pass: pass,
        };
        setIsComputing(true);
    };
    return (
        <div className='login'>
            <div className='login__logo'></div>
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField
                    value={usn}
                    onChange={(e) => setUsn(e.target.value)}
                    id='outlined-error-helper-text'
                    label='USN'
                    error={usnErrorMsg === "" ? false : true}
                    helperText={usnErrorMsg}
                    variant='outlined'
                />

                <TextField
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    id='outlined-error-helper-text'
                    type='password'
                    label='PASSWORD'
                    error={passErrorMsg === "" ? false : true}
                    helperText={passErrorMsg}
                    variant='outlined'
                />
            </form>
            <div className='login__btn' onClick={handleLogin}>
                {isComputing ? null : "LOGIN  "}
                {/* &nbsp; */}
                {isComputing ? (
                    <CircularProgress className={classes.progress} size='30px' />
                ) : (
                    <ExitToAppIcon fontSize='large' style={{ color: "#f8b6cc" }} />
                )}
            </div>
            <div className='login__link'>
                <div
                    className='login__signUpBtn'
                    onClick={() => {
                        history.push("/signup");
                    }}>
                    SIGN UP
                </div>
                <Link className='login__forgotLink'>Forgot Password?</Link>
            </div>
        </div>
    );
}

export default withRouter(Login);
