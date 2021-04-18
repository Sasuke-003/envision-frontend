import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    const [isReqData, setIsReqData] = useState(true);
    const [timer, setTimer] = useState("");
    const [counter, setCounter] = useState(60);
    const startCounter = () => {
        setTimer(
            setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000)
        );
    };

    useEffect(() => {
        const getData = () => {
            try {
                // const res = api
                setIsReqData(false);
                setActivated(true);
            } catch (e) {}
        };
        getData();
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
            <h1 style={activated ? { color: "#17b978" } : { color: "#d72323" }}>
                {activated ? "Your account has been Activated" : isReqData ? "" : "Invalid account id. Please signup again"}
            </h1>
            <br />
            {activated ? <h4>Redirecting to login page in {counter}</h4> : null}
        </div>
    );
}

export default withRouter(AccountActivation);
