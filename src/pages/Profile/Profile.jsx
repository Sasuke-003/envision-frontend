// import React from "react";
// import BarcodeScannerComponent from "react-webcam-barcode-scanner";

// function Profile() {
//     const [data, setData] = React.useState("Not Found");

//     return (
//         <>
//             <BarcodeScannerComponent
//                 width={500}
//                 height={500}
//                 onUpdate={(err, result) => {
//                     if (result) setData(result.text);
//                     else setData("Not Found");
//                 }}
//             />
//             <p>{data}</p>
//         </>
//     );
// }

import React, { Component } from "react";
import QrReader from "react-qr-reader";

class Profile extends Component {
    state = {
        result: "No result",
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
    render() {
        return (
            <div>
                <QrReader delay={300} onError={this.handleError} onScan={this.handleScan} style={{ width: "100%" }} facingMode='environment' />
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default Profile;
