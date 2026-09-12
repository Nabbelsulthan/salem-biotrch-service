import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import "./Contact.css";


const ease = [
    0.22,
    1,
    0.36,
    1,
];


const handleSubmit = (event) => {

    event.preventDefault();

    const formData =
        new FormData(event.currentTarget);

    const name =
        formData.get("name")?.trim();

    const phone =
        formData.get("phone")?.trim();

    const email =
        formData.get("email")?.trim();

    const product =
        formData.get("product")?.trim();

    const message =
        formData.get("message")?.trim();


    const whatsappMessage = `
Hello Salem Biotech Service,

I would like to make an enquiry.

Name: ${name || "Not provided"}

Phone: ${phone || "Not provided"}

Email: ${email || "Not provided"}

Product / Requirement: ${product || "Not specified"}

Message:
${message || "No message provided"}
    `.trim();


    const whatsappUrl =
        `https://wa.me/916380701082?text=${encodeURIComponent(
            whatsappMessage
        )}`;


    window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
    );

};

const Contact = () => {

    return (

        <section
            id="contact"
            className="contact-section"
        >

            <div className="contact-container">


                {/* =========================================
                    LEFT CONTENT
                ========================================= */}

                <div className="contact-content">


                    <motion.div
                        className="contact-kicker"
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            ease,
                        }}
                    >

                        <span>04</span>

                        <i />

                        <span>GET IN TOUCH</span>

                    </motion.div>


                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 55,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: false,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.95,
                            ease,
                        }}
                    >

                        Let's build
                        <br />

                        <span>
                            better ponds.
                        </span>

                    </motion.h2>


                    <motion.p
                        className="contact-description"
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease,
                        }}
                    >

                        Have a question about our products
                        or aquaculture solutions? Get in touch
                        with Salem Biotech Service.

                    </motion.p>



                    {/* CONTACT DETAILS */}

                    <div className="contact-details">


                        <motion.a
                            href="tel:+916380701082"
                            className="contact-detail"
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
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease,
                            }}
                        >

                            <div className="contact-detail-icon">

                                <Phone size={19} />

                            </div>

                            <div>

                                <span>
                                    CUSTOMER CARE
                                </span>

                                <strong>
                                    +91 63 80 70 10 82
                                </strong>

                            </div>

                        </motion.a>



                        <motion.a
                            href="mailto:salembiotechservices@gmail.com"
                            className="contact-detail"
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
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.18,
                                ease,
                            }}
                        >

                            <div className="contact-detail-icon">

                                <Mail size={19} />

                            </div>

                            <div>

                                <span>
                                    EMAIL
                                </span>

                                <strong>
                                    salembiotechservices@gmail.com
                                </strong>

                            </div>

                        </motion.a>



                        <motion.div
                            className="contact-detail"
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
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.26,
                                ease,
                            }}
                        >

                            <div className="contact-detail-icon">

                                <MapPin size={19} />

                            </div>

                            <div>

                                <span>
                                    OUR ADDRESS
                                </span>

                                <strong>
                                    No.99, Amudhavalli Illam,
                                    <br />
                                    Varna Theertham Extension,
                                    <br />
                                    Murugan Kovil Street,
                                    <br />
                                    Harur Taluk, Dharmapuri Dist,
                                    <br />
                                    Tamilnadu 636903
                                </strong>

                            </div>

                        </motion.div>


                    </div>

                </div>



                {/* =========================================
                    ENQUIRY FORM
                ========================================= */}

                <motion.div
                    className="contact-form-wrapper"
                    initial={{
                        opacity: 0,
                        y: 50,
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
                        duration: 0.9,
                        ease,
                    }}
                >

                    <div className="contact-form-header">

                        <span>
                            SEND AN ENQUIRY
                        </span>

                        <h3>
                            Tell us what
                            <br />
                            you need.
                        </h3>

                    </div>


                    <form

                        className="contact-form"
                        onSubmit={handleSubmit}


                    >

                        <div className="contact-form-row">

                            <div className="contact-field">

                                <label>
                                    YOUR NAME
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                />

                            </div>


                            <div className="contact-field">

                                <label>
                                    PHONE NUMBER
                                </label>

                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                />

                            </div>

                        </div>



                        <div className="contact-field">

                            <label>
                                EMAIL ADDRESS
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                            />

                        </div>



                        <div className="contact-field">

                            <label>
                                PRODUCT / REQUIREMENT
                            </label>

                            <select defaultValue="">

                                <option
                                    value=""
                                    disabled
                                >
                                    Select a product
                                </option>

                                <option value="grow-meg">
                                    Grow Meg
                                </option>

                                <option value="grow-c">
                                    Grow C
                                </option>

                                <option value="oxy-fresh">
                                    Oxy Fresh
                                </option>

                                <option value="softmax">
                                    SoftMAX
                                </option>

                                <option value="biocide">
                                    Biocide
                                </option>

                                <option value="ammocure">
                                    AmmoCure
                                </option>

                                <option value="zooclear">
                                    ZOO Clear
                                </option>

                                <option value="prolife">
                                    PROLife
                                </option>

                                <option value="hercules-tc">
                                    Hercules TC
                                </option>

                                <option value="zoogill">
                                    ZOO Gill
                                </option>

                                <option value="heptogut">
                                    Hepto Gut
                                </option>

                            </select>

                        </div>



                        <div className="contact-field">

                            <label>
                                MESSAGE
                            </label>

                            <textarea
                                rows="4"
                                placeholder="Tell us about your requirement..."
                            />

                        </div>



                        <button
                            type="submit"
                            className="contact-submit"
                        >

                            <span>
                                SEND ENQUIRY
                            </span>

                            <ArrowUpRight
                                size={19}
                            />

                        </button>

                    </form>

                </motion.div>

            </div>

        </section>

    );

};


export default Contact;