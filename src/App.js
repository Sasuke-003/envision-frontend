import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import MyEvents from "./pages/MyEvents/MyEvents";
import Certificate from "./pages/VIP/VIP";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import EventDetail from "./pages/EventDetail/EventDetail";
import AttendanceMarker from "./components/QrScanner/QrSCanner";
import { throwMsg, getToken } from "./Util";
import { openSnackbar } from "./redux/snackbar/snackbar.actions";

class App extends React.Component {
    render() {
        const { isLoggedIn } = this.props.userStatus;
        const { snackbarStatus, openSnackbar } = this.props;
        return (
            <div className='app'>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/login' render={() => (isLoggedIn ? <Redirect to='/' /> : <Login />)} />
                    <Route exact path='/signup' render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUp />)} />
                    <Route exact path='/myevents' render={() => (!isLoggedIn ? <Redirect to='/login' /> : <MyEvents />)} />
                    <Route exact path='/vip' render={() => (!isLoggedIn ? <Redirect to='/login' /> : <Certificate />)} />
                    <Route exact path='/profile' render={() => (!isLoggedIn ? <Redirect to='/login' /> : <Profile />)} />
                    <Route exact path='/attendanceMarker' render={() => (!isLoggedIn ? <Redirect to='/login' /> : <AttendanceMarker />)} />
                    <Route path='/event/:id' render={() => <EventDetail />} />
                </Switch>
                {console.log(getToken())}
                {throwMsg(snackbarStatus.open, () => openSnackbar({ open: false, status: "", msg: "" }), snackbarStatus.status, snackbarStatus.msg)}
                {isLoggedIn ? <Navbar /> : null}
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    userStatus: state.userStatus.currentUserStatus,
    userToken: state.userToken,
    snackbarStatus: state.snackbar,
});

const mapDispatchToProps = (dispatch) => ({
    openSnackbar: (status) => dispatch(openSnackbar(status)),
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
