import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={styles['home-navigation']}>

            <NavLink to='/'> timeline </NavLink>
            <NavLink to='/about'> About </NavLink>
            <NavLink to='friends'> Friends </NavLink>

        </nav>

    )
}
