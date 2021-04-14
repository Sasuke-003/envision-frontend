import React, { Component } from "react";
import QrReader from "react-qr-reader";

class QrScanner extends Component {
    state = {
        result: "No result",
        cameraOpen: true,
    };

    handleScan = (data) => {
        if (data) {
            this.setState({
                result: data,
            });
        }
    };
    handleError = (err) => {
        console.error(err);
    };
    componentWillUnmount() {
        this.setState({
            cameraOpen: false,
        });
    }

    render() {
        const { result, cameraOpen } = this.state;

        return cameraOpen ? (
            <div>
                <QrReader delay={300} onError={this.handleError} onScan={this.handleScan} style={{ width: "100%" }} facingMode='environment' />
                <p>{result}</p>
            </div>
        ) : null;
    }
}
export default QrScanner;
