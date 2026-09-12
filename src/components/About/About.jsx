import { motion } from "framer-motion";

import aboutImage from "../../assets/about.png";

import "./About.css";


const About = () => {

    return (

        <section
            id="about"
            className="about"
        >

            <div className="about-container">


                {/* =========================================
                    INTRO
                ========================================= */}

                <motion.div
                    className="about-intro"

                    initial={{
                        opacity: 0,
                        y: 35,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: false,
                        amount: 0.25,
                    }}

                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <motion.div
                        className="about-kicker"

                        initial={{
                            opacity: 0,
                            x: -25,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: false,
                            amount: 0.4,
                        }}

                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <span>
                            01
                        </span>

                        <span className="about-kicker-line" />

                        <span>
                            ABOUT US
                        </span>

                    </motion.div>


                    <motion.h2

                        initial={{
                            opacity: 0,
                            y: 45,
                            filter: "blur(8px)",
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}

                        viewport={{
                            once: false,
                            amount: 0.3,
                        }}

                        transition={{
                            duration: 1,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        We understand
                        <br />

                        <span>
                            aquaculture.
                        </span>

                    </motion.h2>


                    <motion.div
                        className="about-intro-bottom"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: false,
                            amount: 0.35,
                        }}

                        transition={{
                            duration: 0.75,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <p>

                            Salem Biotech Service focuses on
                            aquaculture technology and services
                            for sustainable shrimp farming.

                        </p>


                        <span className="about-intro-mark">
                            SBS
                        </span>

                    </motion.div>

                </motion.div>



                {/* =========================================
                    IMAGE
                ========================================= */}

                <motion.div
                    className="about-image"

                    initial={{
                        opacity: 0,
                        y: 35,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: false,
                        amount: 0.15,
                    }}

                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <motion.img
                        src={aboutImage}
                        alt="Shrimp aquaculture"

                        initial={{
                            opacity: 0,
                            scale: 1.06,
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}

                        viewport={{
                            once: false,
                            amount: 0.15,
                        }}

                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />


                    <motion.div
                        className="about-image-label"

                        initial={{
                            opacity: 0,
                            y: 12,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: false,
                            amount: 0.2,
                        }}

                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <span>
                            SALEM BIOTECH SERVICE
                        </span>

                        <span>
                            AQUACULTURE TECHNOLOGY
                        </span>

                    </motion.div>

                </motion.div>



                {/* =========================================
                    APPROACH
                ========================================= */}

                <div className="about-approach">


                    <motion.div
                        className="about-approach-heading"

                        initial={{
                            opacity: 0,
                            y: 25,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: false,
                            amount: 0.35,
                        }}

                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <span>
                            OUR APPROACH
                        </span>

                        <h3>
                            Practical solutions for
                            <br />
                            better aquaculture.
                        </h3>

                    </motion.div>



                    <div className="about-approach-items">


                        {/* SHRIMP HEALTH */}

                        <motion.div
                            className="about-approach-item"

                            initial={{
                                opacity: 0,
                                y: 25,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: false,
                                amount: 0.4,
                            }}

                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <span className="about-item-number">
                                01
                            </span>

                            <div>

                                <h4>
                                    Shrimp Health
                                </h4>

                                <p>
                                    Supporting healthier shrimp
                                    throughout the farming cycle.
                                </p>

                            </div>

                        </motion.div>



                        {/* WATER QUALITY */}

                        <motion.div
                            className="about-approach-item"

                            initial={{
                                opacity: 0,
                                y: 25,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: false,
                                amount: 0.4,
                            }}

                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <span className="about-item-number">
                                02
                            </span>

                            <div>

                                <h4>
                                    Water Quality
                                </h4>

                                <p>
                                    Solutions focused on healthier
                                    pond water conditions.
                                </p>

                            </div>

                        </motion.div>



                        {/* POND PERFORMANCE */}

                        <motion.div
                            className="about-approach-item"

                            initial={{
                                opacity: 0,
                                y: 25,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: false,
                                amount: 0.4,
                            }}

                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <span className="about-item-number">
                                03
                            </span>

                            <div>

                                <h4>
                                    Pond Performance
                                </h4>

                                <p>
                                    Practical solutions supporting
                                    sustainable aquaculture.
                                </p>

                            </div>

                        </motion.div>


                    </div>

                </div>



                {/* =========================================
                    CLOSING STATEMENT
                ========================================= */}

                <motion.div
                    className="about-closing"

                    initial={{
                        opacity: 0,
                        y: 15,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: false,
                        amount: 0.5,
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <span>
                        STRATEGIES FOR
                    </span>

                    <strong>
                        SUSTAINABLE SHRIMP AQUACULTURE
                    </strong>

                </motion.div>


            </div>

        </section>

    );

};


export default About;