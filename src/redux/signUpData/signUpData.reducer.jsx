import { SignUpDataActionTypes } from "./signUpData.types";

const INITIAL_STATE = {
    email: "",
    pass: "",
    name: "",
    gender: "",
    usn: "",
    contact: "9731299294",
    reCaptchaToken: "",
};

const signUpDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SignUpDataActionTypes.SET_SIGN_UP_DATA:
            return {
                ...state,
                [action.payload[0]]: action.payload[1],
            };

        default:
            return state;
    }
};

export default signUpDataReducer;
