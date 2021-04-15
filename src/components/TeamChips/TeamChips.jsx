import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import FaceIcon from "@material-ui/icons/Face";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "rgba(0,0,0,0) !important",
        backdropFilter: "none !important",
        boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 0)",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 0,
        width: "90%",
        margin: 0,
    },
    chip: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
    },
}));

export default function ChipsArray({ chipData, isRegistered }) {
    const classes = useStyles();

    const handleDelete = (chipToDelete) => () => {
        //    code to delete team mate request
    };

    return (
        <Paper component='ul' className={classes.root}>
            {chipData.map((data, index) => {
                let icon = <TagFacesIcon />;

                if (index === 0) {
                    icon = <FaceIcon />;
                }

                return (
                    <li key={data.key}>
                        <Chip
                            icon={icon}
                            label={data.label}
                            // onDelete={!isRegistered ? (index === 0 ? undefined : handleDelete(data)) : undefined}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
}
