import { SnackbarActionTypes } from "./snackbar.types";

const INITIAL_STATE = false;

const snackbarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SnackbarActionTypes.OPEN_SNACKBAR:
            return action.payload;

        default:
            return state;
    }
};

export default snackbarReducer;
