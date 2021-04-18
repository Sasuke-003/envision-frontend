// import React, { useState, useEffect } from "react";
// import TabPanel from "../../components/TabPanel/TabPanel";
// import "./Home.css";

// import SwipeableViews from "react-swipeable-views";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import { connect } from "react-redux";
// import { setCurrentUserStatus } from "../../redux/userStatus/userStatus.actions";

// import axios from "axios";

// function a11yProps(index) {
//     return {
//         id: `full-width-tab-${index}`,
//         "aria-controls": `full-width-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: "rgba(0,0,0,0)",
//         color: "black",
//         backdropFilter: "none",
//         scrollBehavior: "smooth",
//     },
//     tabHead: {
//         background: "rgba(0,0,0,0) !important",
//     },
//     dep: {
//         fontSize: "1rem",
//     },
//     swipe: {
//         transition: "transform 1s cubic-bezier(0.43, 0.07, 0.82, 1.01) 0s !important",
//     },
// }));

// function Home({ userTabStatus, setCurrentUserStatus }) {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [departments, setDepartments] = useState(["CSE", "ME", "ISE", "E&C", "EEE", "AE", "MRE"]);
//     const handleChange = (event, newValue) => {
//         setCurrentUserStatus(["tabStatus", newValue]);
//     };

//     const handleChangeIndex = (index) => {
//         setCurrentUserStatus(["tabStatus", index]);
//     };

//     useEffect(() => {
//         setCurrentUserStatus(["tabStatus", 0]);

//         // const getData = async () => {
//         //     try {
//         //         let res = await axios.get("https://sit-envision.herokuapp.com/event/department-list");
//         //         console.log("hello");
//         //         console.log(res);
//         //     } catch (error) {
//         //         console.log("bye");
//         //         console.log(error);
//         //     }
//         // };
//         // getData();
//     }, []);

//     return (
//         <div className={classes.root}>
//             <AppBar position='static' className={classes.tabHead}>
//                 <Tabs
//                     value={userTabStatus}
//                     onChange={handleChange}
//                     indicatorColor='primary'
//                     textColor='primary'
//                     variant='scrollable'
//                     aria-label='full width tabs example'>
//                     {departments.map((department, index) => (
//                         <Tab className={classes.dep} label={department} key={department} {...a11yProps(index)} />
//                     ))}
//                 </Tabs>
//             </AppBar>
//             <SwipeableViews index={userTabStatus} onChangeIndex={handleChangeIndex} disableLazyLoading>
//                 {departments.map((department, index) => (
//                     <TabPanel
//                         key={userTabStatus + "tab" + index}
//                         value={userTabStatus}
//                         index={index}
//                         dir={theme.direction}
//                         activeIndex={userTabStatus}
//                         department={department}></TabPanel>
//                 ))}
//             </SwipeableViews>
//         </div>
//     );
// }

// const mapSateToProps = (state) => ({
//     userTabStatus: state.userStatus.currentUserStatus.tabStatus,
// });

// const mapDispatchToProps = (dispatch) => ({
//     setCurrentUserStatus: (status) => dispatch(setCurrentUserStatus(status)),
// });

// export default connect(mapSateToProps, mapDispatchToProps)(Home);
import React, { useState, useEffect } from "react";
import TabPanel from "../../components/TabPanel/TabPanel";
import "./Home.css";

import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setCurrentUserStatus } from "../../redux/userStatus/userStatus.actions";

import axios from "axios";

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const styles = (theme) => ({
    root: {
        backgroundColor: "rgba(0,0,0,0)",
        color: "black",
        backdropFilter: "none",
        scrollBehavior: "smooth",
    },
    tabHead: {
        background: "rgba(0,0,0,0) !important",
    },
    dep: {
        fontSize: "1rem",
    },
    swipe: {
        transition: "transform 1s cubic-bezier(0.43, 0.07, 0.82, 1.01) 0s !important",
    },
});

class Home extends React.Component {
    state = {
        departments: ["CSE", "ME", "ISE", "E&C", "EEE", "AE", "MRE"],
        value: this.props.userTabStatus,
    };

    componentWillUnmount() {
        this.props.setCurrentUserStatus(["tabStatus", this.state.value]);
    }

    handleChange = (event, newValue) => {
        // setCurrentUserStatus(["tabStatus", newValue]);
        this.setState({ value: newValue });
    };

    handleChangeIndex = (index) => {
        // setCurrentUserStatus(["tabStatus", index]);
        this.setState({ value: index });
    };
    render() {
        const { departments, value } = this.state;
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position='static' className={classes.tabHead}>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='scrollable'
                        aria-label='full width tabs example'>
                        {departments.map((department, index) => (
                            <Tab className={classes.dep} label={department} key={department} {...a11yProps(index)} />
                        ))}
                    </Tabs>
                </AppBar>
                <SwipeableViews index={value} onChangeIndex={this.handleChangeIndex} disableLazyLoading>
                    {departments.map((department, index) => (
                        <TabPanel
                            key={value + "tab" + index}
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
}

const mapSateToProps = (state) => ({
    userTabStatus: state.userStatus.currentUserStatus.tabStatus,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUserStatus: (status) => dispatch(setCurrentUserStatus(status)),
});

export default withStyles(styles, { withTheme: true })(connect(mapSateToProps, mapDispatchToProps)(Home));
