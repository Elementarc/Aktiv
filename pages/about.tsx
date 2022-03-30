import React , {useEffect} from "react"

import Link from 'next/link'
import Footer from '../components/footer'
import styles from "../styles/About.module.scss"
import Image from "next/image"
import Card from "../public/png/card.jpg"

export default function About() {

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
        <div className={styles.about_page}>
            
            <main>

                <div className={styles.preview}>
                    <Image priority={true} id="preview_img" className={styles.preview_img} alt="Image for preview of this page" src={"/png/about.jpg"} layout='fill'></Image>
                    <div className={styles.blur}></div>

                    <div className={styles.preview_content}>
                        <h1>Wir sind für sie da!
                            <div></div>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod in interdum et imperdiet. Consequat.</p>
                    </div>
                    <div className={styles.small_image}>

                        <Image src={Card} layout="fill"></Image>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2>Unsere Geschichte</h2>
                    <h1>AKTIV SEIT 2017</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam. Mollis neque eu eleifend felis iaculis proin aliquam. Pharetra suspendisse eget sed sagittis urna interdum. Aenean ut urna sed ante mattis in.</p>
                    <p>Lorem ipsum dolor sit amet. cibus diam. Mollis neque eu eleifend felis iaculis proin aliquam. Pharetra suspendisse eget sed sagittis urna interdum. Aenean ut urna sed ante mattis in.</p>
                    
                    <Link href="/">Zur Hompage</Link>

                    <div className={styles.bubble}>
                        <Image src={"/png/background_bubble.png"} alt='Background decoration' layout='fill'></Image>
                    </div>
                </div>
            </main>


            <Footer />
        </div>
    )
}
