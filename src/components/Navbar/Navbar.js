import { AppBar, Container, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./navbar.module.css"
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(.5),
        display: "flex",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginRight: theme.spacing(5),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
        "&.active": {
            color: "aqua"
        }
    },
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='static'>
                <Container maxWidth='xl'>
                    <Toolbar>
                        <nav className={classes.navlinks}>
                            <NavLink to="friends" className={classes.link}>
                                Friends
                            </NavLink>
                            <NavLink to="aboutme" className={classes.link}>
                                About Me
                            </NavLink>
                        </nav>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
