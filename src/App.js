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

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/login' render={() => (this.props.currentUser ? <Redirect to='/' /> : <Login />)} />
                    <Route exact path='/signup' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignUp />)} />
                    <Route exact path='/myevents' render={() => (!this.props.currentUser ? <Redirect to='/login' /> : <MyEvents />)} />
                    <Route exact path='/vip' render={() => (!this.props.currentUser ? <Redirect to='/login' /> : <Certificate />)} />
                    <Route exact path='/profile' render={() => (!this.props.currentUser ? <Redirect to='/login' /> : <Profile />)} />
                </Switch>
                {this.props.currentUser ? <Navbar /> : null}
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    currentUser: state.envisionUser.currentUser,
});

export default connect(mapSateToProps)(App);
