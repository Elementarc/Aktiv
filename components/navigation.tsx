import React, {useEffect, useState, useContext} from 'react';
import styles from "../styles/Navigation.module.scss"
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from "../public/logos/logo.png"
import Image from 'next/image';
import {motion, useAnimation, AnimatePresence} from "framer-motion"
const nav_context: any = React.createContext(null)


export default function Navigation_handler() {
    const [is_mobile, set_is_mobile] = useState<any>(null)
    const [nav_state, set_nav_state] = useState(false)

    const nav = {
        nav_state,
        set_nav_state,
        is_mobile
    }
    useEffect(() => {
        function set_nav() {
            if(window.innerWidth >= 900) {
                set_is_mobile(false)
                
            } else {
                set_is_mobile(true)
            }
        }

        set_nav()
        window.addEventListener("resize", set_nav)

        return(() => {
            window.removeEventListener("resize", set_nav) 
        })
    }, [])

    useEffect(() => {
        document.body.style.overflow = "unset"
        set_nav_state(false)
    }, [is_mobile])

    return (
        <nav_context.Provider value={nav}>
            {is_mobile === false &&
                <Navigation_desktop/>
            }
            {is_mobile === true &&
                <Navigation_mobile/>
            }
        </nav_context.Provider>
    );
}


function Navigation_desktop() {

    return (
        <nav_context.Provider value>

            <div className={styles.navigation_desktop_container}>
                <ul>
                    <Nav_item label="Home" link=""/>
                    <Nav_item label="Über uns" link="about"/>
                    <Nav_item label="Kontakt" link="kontakt"/>
                </ul>

            </div>

        </nav_context.Provider>
    );
}

function Navigation_mobile() {
    const nav: any = useContext(nav_context)
    const nav_animation = useAnimation()

    function toggle_nav_state() {
        nav.set_nav_state(!nav.nav_state)
    }
    useEffect(() => {

        if(nav.nav_state === true) {
            nav_animation.start({
                height: "100vh",
                transition: {duration: .2, type: "tween"},
                overflow: "scroll",
                overflowX: "hidden",
            })
            document.body.style.overflow = "hidden"
        } else {
            nav_animation.start({
                height: "",
                transition: {duration: .2, type: "tween"},
                overflow: "hidden",
            })
            document.body.style.overflow = "unset"
        }

    }, [nav.nav_state, nav_animation])

    return (
        <>

            <motion.div animate={nav_animation} className={styles.navigation_mobile_container}>

                <div className={styles.nav_button_container}>

                    <AnimatePresence exitBeforeEnter>

                        { nav.nav_state === false &&
                            <motion.div initial={{scale: .7}} animate={{scale: 1, transition: {duration: 0.1}}} exit={{scale: .7, transition: {duration: 0.1, type: "tween"}}} key={"open_nav"} onClick={toggle_nav_state} className={styles.nav_button}>
                                <Image src={"/icons/nav.svg"} alt='Icon of nav_button' layout='fill'></Image>
                            </motion.div>  
                        }

                        { nav.nav_state === true &&
                            <motion.div initial={{scale: .7}} animate={{scale: 1, transition: {duration: 0.1}}} exit={{scale: .7, transition: {duration: 0.1, type: "tween"}}} key={"close_nav"} onClick={toggle_nav_state} className={styles.nav_button}>
                                <Image src={"/icons/close.svg"} alt='Icon of nav_button' layout='fill'></Image>
                            </motion.div>  
                        }
                        
                    </AnimatePresence>
                    <div className={styles.nav_logo}>
                        <h1>AKTIV</h1>    
                    </div> 

                </div>

                         
                <ul>
                    <Nav_item label="Home" link=""/>
                    <Nav_item label="Über uns" link="about"/>
                    <Nav_item label="Kontakt" link="kontakt"/>
                </ul>

            </motion.div>

        </>
    );
}

function Nav_item({label, link}: any) {
    const nav: any = useContext(nav_context)
    const router = useRouter()
    
    useEffect(() => {

        const nav_item = document.getElementsByClassName(`nav_item`) as HTMLCollection
        const nav_items = Array.from(nav_item) as any

        
        for(let i = 0; i < nav_items.length; i++) {
            
            if(nav_items[i].id === router.pathname) {
                nav_items[i].style.color = "white"
            } else {
                nav_items[i].style.color = "rgba(255, 255, 255, .6)"
            }
        }

    }, [router.pathname])



    function go_to() {
        router.push(`/${link}`)

        if(nav.is_mobile) {
            nav.set_nav_state(false)
        }
    }
    return(
        <li onClick={() => {go_to()}} key={`/${link}`} >
            <p className={"nav_item"} id={`/${link}`}>{label}</p>
        </li>
    )
}

