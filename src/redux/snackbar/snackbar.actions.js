import { SnackbarActionTypes } from "./snackbar.types";

export const openSnackbar = (token) => ({
    type: SnackbarActionTypes.OPEN_SNACKBAR,
    payload: token,
});
