import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "4vh",
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: "90%",
        border: 0,
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.4)",
    },
    media: {
        height: "100px",
    },
    content: {
        paddingBottom: 0,
    },
    expand: {
        display: "flex",
        margin: "0 px 0 5px",
        justifyContent: "space-between",
        // paddingTop: "0",
        // paddingBottom: "0",
        paddingRight: "12px",
        paddingLeft: "12px",
    },
    main: { fontFamily: "'Poppins', sans-serif", marginBottom: "0" },
    sub: { fontFamily: "'Open Sans', sans-serif" },
    btn: { color: "#14213d", fontFamily: "'Poppins', sans-serif" },
    btnReg: { color: "#17b978", fontFamily: "'Poppins', sans-serif" },
    btnClo: { color: "#d72323", fontFamily: "'Poppins', sans-serif", background: "rgba(255, 255, 255, 0.1)" },
    btnCan: { color: "#ffffff", fontFamily: "'Poppins', sans-serif", background: "#d72323", padding: "0 5px 0 5px" },
}));

function EventCardV2({
    id = "abcd",
    startDate = "Today at 3pm (202-ME BLOCK)",
    venue = "202 (ME BLOCK)",
    isRegistered = true,
    isCanceled = false,
    isRegistrationClosed = true,
    name = "Paper Presentation",
    history,
}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => history.push("/event/" + id)}>
            <CardMedia className={classes.media} image='/img/coderscrusade.png' title='Contemplative Reptile' />
            <CardContent className={classes.content}>
                <Typography gutterBottom variant='h5' component='h2' className={classes.main}>
                    {name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p' className={classes.sub}>
                    {startDate}
                </Typography>
            </CardContent>

            <CardActions className={classes.expand}>
                <Button
                    disableRipple
                    size='small'
                    color='primary'
                    startIcon={isRegistered ? <DoneAllRoundedIcon /> : null}
                    className={isCanceled ? classes.btnCan : isRegistered ? classes.btnReg : isRegistrationClosed ? classes.btnClo : classes.btn}>
                    {isCanceled ? "Event Canceled" : isRegistered ? "Registered" : isRegistrationClosed ? "Registration Ended" : "Register now!"}
                </Button>
                <Typography variant='body2' color='textSecondary' component='p' className={classes.sub}>
                    55 Registered
                </Typography>
            </CardActions>
        </Card>
    );
}
export default withRouter(EventCardV2);
