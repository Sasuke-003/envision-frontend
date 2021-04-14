import React from "react";
import QRCode from "react-qr-code";

function QrGenerator({ code = "Envision 2021" }) {
    return <QRCode value={code} bgColor='#ffffff00' includeMargin />;
}

export default QrGenerator;
