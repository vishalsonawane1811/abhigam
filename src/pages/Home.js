import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import styles from '../styles/home.module.css'

function Home() {
    return (
        <div className={styles['home-container']}>
            <section className={styles["profile"]}>
                <img src="" alt="profile-image"></img>
                <header>
                    <h1>
                        Vishal Sonawane
                    </h1>
                </header>
            </section>
            <Navbar />
        </div>
    )
}

export default Home