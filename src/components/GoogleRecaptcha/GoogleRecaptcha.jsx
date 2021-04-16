import React from "react";
import Recaptcha from "react-invisible-recaptcha";

function GoogleRecaptcha({ ...otherProps }) {
    return <Recaptcha {...otherProps} />;
}

export default GoogleRecaptcha;
