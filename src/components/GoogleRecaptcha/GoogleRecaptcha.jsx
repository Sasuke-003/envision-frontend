import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function GoogleRecaptcha({ recaptchaRef }) {
    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            render='explicit'
            sitekey='6LfDTawaAAAAALjcHHw3DhIpSWaXork6_SngNf7n'
            size='invisible'
            onloadCallback={() => alert("loaded")}
            // onChange={(t) => alert(t)}
        />
    );
}

export default GoogleRecaptcha;
