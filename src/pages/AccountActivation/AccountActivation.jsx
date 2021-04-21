import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomButton from "../../components/CustomButton/CustomButton";
import ReCAPTCHA from "react-google-recaptcha";
import "./AccountActivation.css";
import { api } from "../../server";

const useStyles = makeStyles((theme) => ({
    progress: {
        color: "#000000",
        marginTop: "35vh",
    },
}));

function AccountActivation({ history, match }) {
    const classes = useStyles();
    const [activated, setActivated] = useState(false);
    const [isReqData, setIsReqData] = useState(false);
    const [timer, setTimer] = useState("");
    const [counter, setCounter] = useState(1000);
    const recaptchaRef = useRef();
    const grecaptchaObject = window.grecaptcha;
    const startCounter = () => {
        setTimer(
            setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000)
        );
    };

    const handleActivation = async () => {
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
        const verifyEmailData = {
            tok: match.params.id,
            reCaptchaToken: token,
        };
        try {
            setIsReqData(true);
            await api.user.verifyEmail(verifyEmailData);
            setIsReqData(false);
            setActivated(true);
        } catch (e) {
            setIsReqData(false);
        }
    };

    useEffect(() => {
        const initialize = () => {
            recaptchaRef.current.reset();
        };
        // initialize();
    }, []);

    useEffect(() => {
        if (activated) startCounter();
    }, [activated]);

    useEffect(() => {
        const checkCounter = () => {
            if (counter === 0) {
                clearInterval(timer);
                history.push("/login");
            }
        };
        checkCounter();
    }, [counter, timer]);

    return isReqData ? (
        <div className='accountActivation'>
            <CircularProgress className={classes.progress} size='45px' />
        </div>
    ) : (
        <div className='accountActivation'>
            {activated ? null : <h2 style={{ marginTop: "10vh" }}>Click blow to Activate your account</h2>}
            {activated ? null : (
                <CustomButton style={{ width: "90%", marginTop: "1vh", backgroundColor: "#ffffff20", color: "green" }} onClick={handleActivation}>
                    ACTIVATE
                </CustomButton>
            )}
            <h1 style={activated ? { color: "#17b978", marginTop: "10vh" } : { color: "#d72323", marginTop: "10vh" }}>
                {activated ? "Your account has been Activated" : null}
            </h1>
            <br />
            {activated ? <h4>Redirecting to login page in {counter}</h4> : null}
            <ReCAPTCHA
                sitekey='6LfDTawaAAAAALjcHHw3DhIpSWaXork6_SngNf7n'
                size='invisible'
                ref={recaptchaRef}
                grecaptcha={grecaptchaObject}
                onErrored={() => recaptchaRef.current.reset()}
                onExpired={() => recaptchaRef.current.reset()}
            />
        </div>
    );
}

export default withRouter(AccountActivation);
