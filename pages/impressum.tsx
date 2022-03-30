import React from 'react';
import Footer from '../components/footer';
import styles from "../styles/Impressum.module.scss"

export default function Impressum() {

    return (
        <div className={styles.impressum}>

            <main>
                <h1>Impressum</h1>

                <div className={styles.grid}>
                    <div className={styles.grid_item}>
                        <p className={styles.grid_item_title}>Sitz des Unternehmens:</p>
                        <p>Bieitgheim str. 19</p>
                    </div>

                    <div className={styles.grid_item}>
                        <p className={styles.grid_item_title}>Telefon:</p>
                        <p>+49 123456 27123</p>
                    </div>

                    <div className={styles.grid_item}>
                        <p className={styles.grid_item_title}>Email:</p>
                        <p>info@ak-tiv.com</p>
                    </div>

                    <div className={styles.grid_item}>
                        <p className={styles.grid_item_title}>Registergericht:</p>
                        <p>Stuttgart 82172</p>
                    </div>

                    <div className={styles.grid_item}>
                        <p className={styles.grid_item_title}>USt-ID-Nr.:</p>
                        <p>DE 211 045 709</p>
                    </div>

                    <div className={styles.grid_item}>
                        <p className={styles.grid_item_title}>CEO:</p>
                        <p>Emre Refik Ak, Ijla Ak</p>
                    </div>

                    <div className={styles.grid_item}>
                        <p className={styles.grid_item_title}>Bewerber Email:</p>
                        <p>bewerbung@ak-tiv.com</p>
                    </div>
                </div>

                <div className={styles.background_container}>
                    <img src='/png/big_bubble.png' alt='background bubble' className={styles.background_1}></img>
                    <img src='/png/big_bubble.png' alt='background bubble' className={styles.background_2}></img>
                </div>
            </main>

            <Footer />
        </div>

        
    );

}
