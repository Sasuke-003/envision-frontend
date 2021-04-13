import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { validateEmail, throwSuccessMsg } from "../../Util";

const useStyles = makeStyles((theme) => ({
    root: {
        background: " rgba(225, 246, 240, 0.8)  !important",
    },
}));

export default function InvitePopup({ open, handleClose }) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleEmailChange = (event) => {
        const emailId = event.target.value;

        if (!validateEmail(emailId)) {
            if (emailId === "") {
                setEmailErrorMsg("");
            } else setEmailErrorMsg("Invalid email address!");
        } else {
            if (emailErrorMsg !== "") setEmailErrorMsg("");
        }
        setEmail(emailId);
    };

    const handleInvite = () => {
        handleClose();
        setOpenSnackbar(true);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle className={classes.root} id='form-dialog-title'>
                    Invite Team Members
                </DialogTitle>
                <DialogContent className={classes.root}>
                    <DialogContentText>Invitation link will be sent to the below email if and only if this email is registered</DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Email Address'
                        type='email'
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        error={emailErrorMsg === "" ? false : true}
                        helperText={emailErrorMsg}
                    />
                </DialogContent>
                <DialogActions className={classes.root}>
                    <Button onClick={handleClose} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={handleInvite} color='primary'>
                        Invite
                    </Button>
                </DialogActions>
            </Dialog>
            {throwSuccessMsg(openSnackbar, () => setOpenSnackbar(false), "Email Sent")}
        </div>
    );
}
