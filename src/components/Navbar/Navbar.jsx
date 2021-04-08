import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import { withRouter } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import RedeemIcon from "@material-ui/icons/Redeem";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "./Navbar.css";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: "0px",
        background: "rgba(255, 255, 255, 0.32)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 -1px 10px rgba(0, 0, 0, 0.25)",
    },
});

function Navbar({ history }) {
    const classes = useStyles();
    const [value, setValue] = React.useState("/");

    useEffect(() => {
        const getLink = async () => {
            setValue(history.location.pathname);
        };
        getLink();
    }, [history.location.pathname, value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label='Home' value='/' icon={<HomeIcon style={{ color: "black" }} />} onClick={() => history.push("/")} />
            <BottomNavigationAction
                label='MyEvents'
                value='/myevents'
                icon={<EventAvailableIcon style={{ color: "black" }} />}
                onClick={() => history.push("/myevents")}
            />
            <BottomNavigationAction
                label='Certificates'
                value='/certificates'
                icon={<RedeemIcon style={{ color: "black" }} />}
                onClick={() => history.push("/certificate")}
            />
            <BottomNavigationAction
                label='Profile'
                value='/profile'
                icon={<AccountBoxIcon style={{ color: "black" }} />}
                onClick={() => history.push("/profile")}
            />
            {console.log(history.location)}
        </BottomNavigation>
    );
}

export default withRouter(Navbar);
