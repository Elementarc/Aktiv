import Link from 'next/link';
import React from 'react';
import styles from "../styles/Footer.module.scss"

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <h1>AKTIV</h1>
            
            <div className={styles.legal_container}>
                <Link href={"/impressum"}>Impressum</Link>
                <Link href={"/datenschutz"}>Datenschutz</Link>
                <Link href={"/kontakt"}>Kontakt</Link>
            </div>

            <h5>{"© 2021 - 2028 Aktive.com - Alle rechte vorbehalten."}</h5>
        </div>
    );
}
