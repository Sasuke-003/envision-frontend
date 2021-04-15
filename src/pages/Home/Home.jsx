import React, { useState, useEffect } from "react";
import TabPanel from "../../components/TabPanel/TabPanel";
import "./Home.css";

import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import axios from "axios";

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgba(0,0,0,0)",
        color: "black",
        backdropFilter: "none",
    },
    tabHead: {
        background: "rgba(0,0,0,0) !important",
    },
    dep: {
        fontSize: "1rem",
    },
}));

function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(-1);
    const [valu, setValu] = useState("");
    const [departments, setDepartments] = useState(["CSE", "ME", "ISE", "E&C", "EEE", "AE", "MRE"]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    useEffect(() => {
        setValue(0);

        // const getData = async () => {
        //     try {
        //         let res = await axios.get("https://sit-envision.herokuapp.com/event/department-list");
        //         console.log("hello");
        //         console.log(res);
        //     } catch (error) {
        //         console.log("bye");
        //         console.log(error);
        //     }
        // };
        // getData();
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.tabHead}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    variant='scrollable'
                    aria-label='full width tabs example'>
                    {departments.map((department, index) => (
                        <Tab className={classes.dep} label={department} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </AppBar>
            <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                {departments.map((department, index) => (
                    <TabPanel
                        key={"tab" + index}
                        value={value}
                        index={index}
                        dir={theme.direction}
                        activeIndex={value}
                        department={department}></TabPanel>
                ))}
            </SwipeableViews>
        </div>
    );
}

export default Home;
