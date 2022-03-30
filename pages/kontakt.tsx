import React , {useEffect} from "react"
import { motion } from "framer-motion"
import Footer from '../components/footer'
import styles from "../styles/Kontakt.module.scss"
import Image from "next/image"

export default function Kontakt() {

    useEffect(() => {
        const element = document.getElementById("preview_img") as HTMLDivElement
        
        function parallax() {
            if(element) {
                //element.style.transform = `translateY(${window.scrollY / 2}px)`
                element.style.objectPosition = `50% calc(50% + ${window.scrollY / 2}px)`
            }
        }

        window.addEventListener("scroll", parallax)
        return(() => {
            window.removeEventListener("scroll", parallax)
        })
    }, [])

    return (
        <div className={styles.kontakt_page}>
            
            <main>

                <motion.div className={styles.preview}>
                    <Image priority={true} id="preview_img" alt="An image that represent the contact page" className={styles.preview_img} src={"/png/contact.jpg"} layout='fill'></Image>
                    <div className={styles.blur}></div>

                    

                    <div className={styles.small_image}>

                        <a href="tel:01743213912" className={styles.grid_item}>
                            
                            <div className={styles.content_container}>

                                <div className={styles.icon_container}>
                                    <Image src={"/icons/email_blue.svg"} layout="fill" className={styles.icon}></Image>
                                </div>
                                <p>Rufen Sie uns an!</p>
                                
                            </div>
                        </a> 

                        <a href="mailto:info@ak-tiv.com" className={styles.grid_item}>
                            
                            <div className={styles.content_container}>

                                <div className={styles.icon_container}>
                                    <Image src={"/icons/email_blue.svg"} layout="fill" className={styles.icon}></Image>
                                </div>
                                <p>Schreiben sie uns eine Email!</p>
                                
                            </div>
                        </a>

                    </div>
                </motion.div>

                <div className={styles.content}>

                    <div className={styles.bubble}>
                        <Image src={"/png/background_bubble.png"} layout='fill'></Image>
                    </div>
                </div>
            </main>


            <Footer />
        </div>
    )
}