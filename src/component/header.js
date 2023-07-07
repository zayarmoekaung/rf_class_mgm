
import styles from '../styles/header.module.css'
import Image from 'next/image'
import react from 'react';
import localFont from 'next/font/local'
const aileron = localFont({ src: '../fonts/Anurati-Regular.otf' })
export default function header() {

    return (
        <>
            <header className={styles.header}>

                <h1 className={`${styles.logo} ${aileron.className}`}>
                    RunFree WebDevelopment
                </h1>
                <ul className={`${aileron.className}`}>
                    <li>Top</li>
                    <li>Lectures</li>
                    <li>Attendence</li>
                    <li>Assignment</li>
                </ul>
            </header>
        </>
    );
}