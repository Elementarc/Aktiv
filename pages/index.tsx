import Link from 'next/link'
import Navigation from '../components/navigation'
import styles from "../styles/Index.module.scss"
import Image from 'next/image'
import Footer from '../components/footer'
import Logo_3d from "../public/png/3d_logo.jpg"
import { useEffect } from 'react'

export default function Home() {

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
        <div className={styles.home_page}>
                
            <main className={styles.home_container}>

                <div className={styles.intro_container}>
                    <h1>Aktiv werden mit uns!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam. Mollis neque eu eleifend felis iaculis proin aliquam. Pharetra suspendisse eget sed sagittis urna interdum. Aenean ut urna sed ante mattis in.</p>
                    <button>Kontaktieren</button>

                    <div className={styles.icons}>
                        <div className={styles.icon_item}>
                            <Image src={"/icons/call.svg"} layout="fill"/>
                        </div>

                        <h4>+49 12312 3123</h4>
                    </div>

                    <div className={styles.icons}>
                        <div className={styles.icon_item}>
                            <Image src={"/icons/email.svg"} layout="fill"/>
                        </div>

                        <h4>Example@gmail.com</h4>
                    </div>

                    <div className={styles.icons}>
                        <div className={styles.icon_item}>
                            <Image src={"/icons/place.svg"} layout="fill"/>
                        </div>

                        <h4>Bietigheim-Bissingen</h4>
                    </div>


                    <div className={styles.svg_intro}>

                    </div>

                    <div className={styles.background_container}>
                        <Image id="preview_img" src={Logo_3d} layout="fill"></Image>
                        <div className={styles.blur}></div>
                    </div>
                </div>

                <div className={styles.offer_header}>
                    <h2>Jetzt neu!</h2>

                    <div className={styles.h1_with_deco}>
                        <div className={styles.left_deco}></div>
                        <h1>UNSERE ANGEBOTE</h1>
                        <div className={styles.right_deco}></div>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam. Mollis neque eu eleifend felis iaculis proin aliquam. Pharetra suspendisse eget sed sagittis urna interdum. Aenean ut urna sed ante mattis in.</p>
                </div>

                <div className={styles.offer_container}>
                    
                    <Offer label="Verpacken" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam." image="packs.svg"/>
                    <Offer label="Liefern" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam." image="liefern.svg"/>
                    <Offer label="Bestellen" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam." image="deliver.svg"/>
                    <Offer label="Abonnement" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam." image="subscribe.svg"/>

                </div>

                <div className={styles.us_container}>
                    <h2>Unsere Geschichte</h2>
                    <h1>Lernen sie uns kennen!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam. Mollis neque eu eleifend felis iaculis proin aliquam. Pharetra suspendisse eget sed sagittis urna interdum. Aenean ut urna sed ante mattis in.</p>
                    <button>Über uns</button>

                    <div className={styles.us_container_bubble}>
                        <Image src={"/png/background_bubble_3.png"} alt='Background decoration' layout="fixed" width={250} height={1250}></Image>
                    </div>

                    <div className={styles.us_container_meeting}>
                        <Image src={"/png/meet_us.svg"} alt='Background decoration' layout="fill"></Image>
                    </div>
                </div>

                <div className={styles.partner_container}>
                    <h2>Partnerschaften</h2>
                    <h1>Unsere Partner!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam. Mollis neque eu eleifend felis iaculis proin aliquam. Pharetra suspendisse eget sed sagittis urna interdum. Aenean ut urna sed ante mattis in.</p>
                    <button>Partner</button>

                    <div className={styles.partner_container_bubble}>
                        <Image src={"/png/background_bubble_3.png"} alt='Background decoration' layout="fixed" width={250} height={1250}></Image>
                    </div>

                    <div className={styles.partner_container_meeting}>
                        <Image src={"/png/meeting.svg"} alt='Background decoration' layout="fill"></Image>
                    </div>
                </div>


                <div className={styles.strength_container}>
                    <span />
                    <h1>Stärken</h1>
                    
                    <div className={styles.strength_item_container}>
                        <Strength label="Stil" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ipsum ipsum purus etiam id." icon="event.svg"/>
                        <Strength label="Pünktlich" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ipsum ipsum purus etiam id." icon="event.svg"/>
                        <Strength label="Kunden" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ipsum ipsum purus etiam id." icon="event.svg"/>
                    </div>

                </div>

                <div className={styles.termin_container}>
                    <h1>Termin Vereinbaren</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida suspendisse purus, nisl faucibus diam. Mollis neque eu eleifend felis iaculis proin aliquam. Pharetra suspendisse eget sed sagittis urna interdum. Aenean ut urna sed ante mattis in.</p>
                    <button>Termin</button>

                    <div className={styles.bottom_bubble}>
                        <Image className={styles.bottom_image} src={"/png/bottom_bubble_3.png"} alt='Background decoration' layout="fill"></Image>
                    </div>

                </div>
            </main>

            <Footer/>
        </div>
    )
}


function Offer ({label, text, image}: any) {
    
    return (
        <div className={styles.offer}>
            <h1>{label}</h1>
            <p>{text}</p>

            <div style={{marginTop: "1rem"}}>
                <Link href={"/kontakt"}>Termin vereinbaren</Link>
                
                <div className={styles.img_container}>
                    <Image src={`/png/${image}`} alt='Icon that represents this label' layout="fill"></Image>
                </div>
                
            </div>
            
        </div>
    )
}

function Strength ({label, text, icon}: any) {
    
    return (
        <div className={styles.strength}>

            <div className={styles.img_background}>
                <Image src={`/icons/${icon}`} alt='Icon that represents this label' layout="fill" />
            </div>
            
            <h1>{label}</h1>
            <p>{text}</p>
        </div>
    )
}