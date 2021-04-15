import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function CustomButton({ children, disabled, style, color = "#14213d", textColor = "#fca311", ...otherProps }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            // backgroundColor: "#14213d",
            color: textColor,
            fontFamily: "'Poppins', sans-serif",
        },
        disabled: {
            fontFamily: "'Poppins', sans-serif",
            color: "rgba(0, 0, 0, 0.26)",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            boxShadow: "none",
        },
    }));

    const classes = useStyles();

    const theme1 = createMuiTheme({
        palette: {
            primary: {
                main: color,
            },
        },
    });

    return (
        <ThemeProvider theme={theme1}>
            <Button
                style={style}
                className={disabled ? classes.disabled : classes.root}
                disabled={disabled}
                variant='contained'
                color={!disabled ? "primary" : ""}
                {...otherProps}>
                {children}
            </Button>
        </ThemeProvider>
    );
}

export default CustomButton;
