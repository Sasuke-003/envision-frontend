import React, { useState } from "react";
import Title from "../Title/Title";
import "./Header.css";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import InputIcon from "@material-ui/icons/Input";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
    list: {
        width: 130,
    },
    root: {
        color: "black",
    },
});

function Header({ history, currentUser }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div className='header'>
            <div className='header__right'>{/* EVENT LOGO */}</div>
            <div className='header__left' onClick={() => setOpen(true)}>
                <hr className='header__menu header__menuTopLine' />
                <hr className='header__menu header__menuBottomLine' />
            </div>
            <Drawer anchor='right' open={open} onClose={() => setOpen(false)} className={classes.root}>
                <div className={classes.list} role='presentation'>
                    <List>
                        <Divider />
                        {currentUser ? (
                            <ListItem
                                button
                                key={3}
                                onClick={() => {
                                    history.push("/login");
                                    setOpen(false);
                                }}>
                                <ListItemIcon>
                                    <PowerSettingsNewRoundedIcon style={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText primary={"LogOut"} style={{ color: "white" }} />
                            </ListItem>
                        ) : (
                            <div>
                                <ListItem
                                    button
                                    key={0}
                                    onClick={() => {
                                        history.push("/");
                                        setOpen(false);
                                    }}>
                                    <ListItemIcon>
                                        <HomeIcon style={{ color: "white" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Home"} style={{ color: "white" }} />
                                </ListItem>
                                <Divider />
                                <ListItem
                                    button
                                    key={1}
                                    onClick={() => {
                                        history.push("/login");
                                        setOpen(false);
                                    }}>
                                    <ListItemIcon>
                                        <InputIcon style={{ color: "white" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Login"} style={{ color: "white" }} />
                                </ListItem>
                                <Divider />
                                <ListItem
                                    button
                                    key={2}
                                    onClick={() => {
                                        history.push("/signup");
                                        setOpen(false);
                                    }}>
                                    <ListItemIcon>
                                        <PersonAddIcon style={{ color: "white" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"SignUp"} style={{ color: "white" }} />
                                </ListItem>
                            </div>
                        )}
                        <Divider />
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

const mapSateToProps = (state) => ({
    currentUser: state.envisionUser.currentUser,
});

export default withRouter(connect(mapSateToProps)(Header));
