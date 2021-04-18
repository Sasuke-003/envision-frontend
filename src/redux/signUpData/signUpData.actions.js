import { SignUpDataActionTypes } from "./signUpData.types";

export const setSignUpData = (data) => ({
    type: SignUpDataActionTypes.SET_SIGN_UP_DATA,
    payload: data,
});
