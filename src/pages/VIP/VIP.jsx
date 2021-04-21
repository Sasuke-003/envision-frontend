import React, { useState, useEffect } from "react";
import "./VIP.css";
import StripeCheckout from "react-stripe-checkout";
import { api } from "../../server";
import { getPopup } from "../../Util";

function VIP() {
    const [isVIP, setIsVIP] = useState(false);

    const handleToken = async (token) => {
        console.log(token);
        try {
            await api.user.checkOut(token);
            getPopup("success", "Payment Successful");
            setIsVIP(true);
        } catch (e) {}
    };

    useEffect(() => {
        const getData = async (data) => {
            try {
            } catch (e) {}
        };
    });

    return isVIP ? (
        <div className='vip'>
            <h1 className='vip__mainText'>WELCOME</h1>
            <br /> <br />
            <h3 className='vip__mainText'>
                You are a VIP for us
                <br />
                You can register for any 5 events
            </h3>
        </div>
    ) : (
        <div className='vip'>
            <h1 className='vip__mainText'>OOPS !</h1>
            <h2 className='vip__mainText'>You do not have a VIP membership.</h2>
            {/* <br /> */}
            <h3 className='vip__mainText'>You cannot register for any events.</h3>
            <div className='eventDetail__content'>
                {" "}
                <p className='eventDetail__rules'>
                    <strong>Note :</strong>
                    <br /> Must be present at the venue before 15 mins.
                    <br /> Certificates will not be issued for those who did not participate.
                    <br /> For more info contact Event Coordinator.
                </p>
            </div>
            <StripeCheckout
                stripeKey='pk_test_51HZtARDZqVuGT7K51hHLQTK0LTlrlTP2AoCrzOZmzmsZoUeiEILSAXXozrkKfnT09x8899DW684IiEe48EddM0PO00MB9ROiE9'
                token={handleToken}
            />
        </div>
    );
}

export default VIP;
