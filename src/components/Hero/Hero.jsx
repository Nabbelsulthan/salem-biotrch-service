import { motion } from "framer-motion";

import heroImage from "../../assets/hero.png";

import "./Hero.css";


const Hero = () => {

    return (

        <section
            id="home"
            className="hero"
        >

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="hero-media">

                <motion.img
                    src={heroImage}
                    alt="Shrimp aquaculture pond"
                    className="hero-image"

                    initial={{
                        scale: 1.06,
                    }}

                    animate={{
                        scale: 1,
                    }}

                    transition={{
                        duration: 2.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

            </div>


            {/* =========================================
                CINEMATIC OVERLAY
            ========================================= */}

            <div className="hero-overlay" />


            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="hero-container">

                <motion.div
                    className="hero-content"

                    initial={{
                        opacity: 0,
                        y: 35,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    {/* =================================
                        EYEBROW
                    ================================= */}

                    <motion.div
                        className="hero-eyebrow"

                        initial={{
                            opacity: 0,
                            x: -20,
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                        }}

                        transition={{
                            duration: 0.7,
                            delay: 0.45,
                        }}
                    >

                        <span className="hero-eyebrow-line" />

                        <span>
                            AQUACULTURE FOR A BETTER TOMORROW
                        </span>

                    </motion.div>


                    {/* =================================
                        HEADING
                    ================================= */}

                    <motion.h1

                        initial={{
                            opacity: 0,
                            y: 35,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 0.9,
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <span className="heading-white">
                            Healthy Ponds.
                        </span>

                        <br />

                        <span className="heading-gradient">
                            Brighter Futures.
                        </span>

                    </motion.h1>


                    {/* =================================
                        DESCRIPTION
                    ================================= */}

                    <motion.p
                        className="hero-description"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 0.75,
                            delay: 0.85,
                        }}
                    >

                        Advanced aquaculture solutions and services

                        <br className="desktop-break" />

                        for sustainable shrimp farming.

                    </motion.p>


                    {/* =================================
                        ACTIONS
                    ================================= */}

                    <motion.div
                        className="hero-actions"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 0.7,
                            delay: 1,
                        }}
                    >

                        <a
                            href="#products"
                            className="hero-primary-button"
                        >
                            Explore Products
                        </a>


                        <a
                            href="#contact"
                            className="hero-secondary-button"
                        >
                            Get in Touch
                        </a>

                    </motion.div>

                </motion.div>

            </div>

        </section>

    );

};


export default Hero;