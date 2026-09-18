import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import logo from "../../assets/logos/sbs-logo.png";

import "./Footer.css";


const ease = [
    0.22,
    1,
    0.36,
    1,
];


const Footer = () => {

    const currentYear =
        new Date().getFullYear();


    return (

        <footer className="footer">

            <div className="footer-container">


                {/* =========================================
                    TOP
                ========================================= */}

                <motion.div
                    className="footer-top"
                    initial={{
                        opacity: 0,
                        y: 30,
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
                        duration: 0.8,
                        ease,
                    }}
                >

                    {/* BRAND */}

                    <div className="footer-brand">

                        <a
                            href="/"
                            className="footer-logo"
                        >

                            <img
                                src={logo}
                                alt="Salem Biotech Service"
                            />

                        </a>

                        <p>
                            Aquaculture solutions and
                            services for healthier shrimp
                            farming.
                        </p>

                    </div>



                    {/* NAVIGATION */}

                    <div className="footer-column">

                        <span className="footer-label">
                            NAVIGATION
                        </span>

                        <a href="/#home">
                            Home
                        </a>

                            <a href="/#certificates">
                            Certificates
                        </a>

                        <a href="/#products">
                            Products
                        </a>

                        <a href="/#contact">
                            Contact
                        </a>

                    </div>



                    {/* CONTACT */}

                    <div className="footer-column footer-contact">

                        <span className="footer-label">
                            CONTACT
                        </span>


                        <a href="tel:+916380701082">

                            <Phone size={15} />

                            <span>
                                +91 6380701082
                            </span>

                        </a>


                        <a href="mailto:salembiotechservices@gmail.com">

                            <Mail size={15} />

                            <span>
                                salembiotechservices@gmail.com
                            </span>

                        </a>

                    </div>



                    {/* ADDRESS */}

                    <div className="footer-column footer-address">

                        <span className="footer-label">
                            LOCATION
                        </span>

                        <div>

                            <MapPin size={15} />

                            <p>
                                No.99, Amudhavalli Illam,
                                <br />
                                Varna Theertham Extension,
                                <br />
                                Murugan Kovil Street,
                                <br />
                                Harur Taluk, Dharmapuri Dist,
                                <br />
                                Tamilnadu 636903
                            </p>

                        </div>

                    </div>

                </motion.div>



                {/* =========================================
                    LARGE WORDMARK
                ========================================= */}
{/* 
                <motion.div
                    className="footer-wordmark"
                    initial={{
                        opacity: 0,
                        y: 40,
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
                        duration: 1,
                        ease,
                    }}
                >

                    SALEM BIOTECH

                </motion.div> */}



                {/* =========================================
                    BOTTOM
                ========================================= */}

                <div className="footer-bottom">

                    <span>
                        © {currentYear} Salem Biotech Service.
                        All rights reserved.
                    </span>


                    <a
                        href="#home"
                        className="footer-back-top"
                    >

                        BACK TO TOP

                        <ArrowUpRight
                            size={15}
                        />

                    </a>

                </div>

            </div>

        </footer>

    );

};


export default Footer;