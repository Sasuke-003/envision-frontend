import Snackbars from "./components/snackbars/Snackbars";
import { store } from "./redux/store";
import { openSnackbar } from "./redux/snackbar/snackbar.actions";

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
}

export const throwMsg = (open, handleClose, status, msg) => <Snackbars open={open} handleClose={handleClose} status={status} message={msg} />;

export const getPopup = (status, msg) => store.dispatch(openSnackbar({ open: true, status: status, msg: msg }));
