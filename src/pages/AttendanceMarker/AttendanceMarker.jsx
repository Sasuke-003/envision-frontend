import React, { Component } from "react";
import QrScanner from "../../components/QrScanner/QrSCanner";
import "./AttendanceMarker.css";

class AttendanceMarker extends Component {
    state = {
        cameraOpen: true,
    };

    handleOffCamera = () => {
        this.setState({
            cameraOpen: false,
        });
    };

    componentWillUnmount = async () => {
        this.handleOffCamera();
    };

    render() {
        const { cameraOpen } = this.state;

        return <div>{cameraOpen ? <QrScanner /> : null}</div>;
    }
}
export default AttendanceMarker;
