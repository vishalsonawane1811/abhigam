import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { Navigate, Link } from 'react-router-dom'


// import Home from './Home'
import styles from '../styles/login.module.css'

export const Login = () => {
    return (
        <div className={styles['login-container']}>
            <header style={styles}>
                <h3>
                    User Login
                </h3>
            </header>
            <TextField
                required
                label="Username"
                variant="filled"
                style={{

                    width: "80%",
                    margin: "10px 0px 0px 50px"
                }}
            />
            <TextField
                required
                type="password"
                label="password"
                variant="filled"
                style={{
                    width: "80%",
                    margin: "10px 0px 0px 50px"
                }}
            />
            <section>
                <Button
                    size="large"
                    style={{
                        padding: "5px",
                        marginTop: "10px",
                        width: "40%",
                        marginLeft: "30%"
                    }}
                    variant="contained" color="secondary"> Login </Button>
                <Link to="/signup">Sign Up</Link>
            </section>
        </div>
    )
}
