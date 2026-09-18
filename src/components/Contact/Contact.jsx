



import { useState } from "react";
import { motion } from "framer-motion";

import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import "./Contact.css";


/* =========================================================
   ANIMATION
========================================================= */

const ease = [
    0.22,
    1,
    0.36,
    1,
];


const Contact = () => {

    /* =====================================================
       FORM STATE
    ===================================================== */

    const [formData, setFormData] = useState({
        name: "",
        product: "",
        message: "",
    });


    const [errors, setErrors] = useState({});


    /* =====================================================
       HANDLE INPUT
    ===================================================== */

    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;


        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));


        /* Remove error while typing */

        if (errors[name]) {

            setErrors((previous) => ({
                ...previous,
                [name]: "",
            }));

        }

    };


    /* =====================================================
       VALIDATION
    ===================================================== */

    const validateForm = () => {

        const newErrors = {};


        /* -----------------------------------------------
           NAME
        ------------------------------------------------ */

        const name =
            formData.name.trim();


        if (!name) {

            newErrors.name =
                "Please enter your name.";

        } else if (name.length < 2) {

            newErrors.name =
                "Name must contain at least 2 characters.";

        } else if (name.length > 50) {

            newErrors.name =
                "Name must not exceed 50 characters.";

        }


        /* -----------------------------------------------
           PRODUCT
        ------------------------------------------------ */

        if (!formData.product) {

            newErrors.product =
                "Please select a product or requirement.";

        }


        /* -----------------------------------------------
           MESSAGE
        ------------------------------------------------ */

        const message =
            formData.message.trim();


        if (!message) {

            newErrors.message =
                "Please tell us about your requirement.";

        } else if (message.length < 10) {

            newErrors.message =
                "Please provide a little more detail.";

        } else if (message.length > 1000) {

            newErrors.message =
                "Message must not exceed 1000 characters.";

        }


        setErrors(newErrors);


        return (
            Object.keys(newErrors).length === 0
        );

    };


    /* =====================================================
       HANDLE SUBMIT
    ===================================================== */

    const handleSubmit = (event) => {

        event.preventDefault();


        /* -----------------------------------------------
           VALIDATE
        ------------------------------------------------ */

        const isValid =
            validateForm();


        if (!isValid) {

            return;

        }


        /* -----------------------------------------------
           CLEAN VALUES
        ------------------------------------------------ */

        const name =
            formData.name.trim();

        const message =
            formData.message.trim();


        /* -----------------------------------------------
           WHATSAPP MESSAGE
        ------------------------------------------------ */

        const whatsappMessage = `
Hello Salem Biotech Service,

I would like to make an enquiry regarding your shrimp and aquaculture products.

Name: ${name}

Product / Requirement: ${formData.product}

Message:
${message}

Thank you.
        `.trim();


        /* -----------------------------------------------
           WHATSAPP URL
        ------------------------------------------------ */

        const whatsappUrl =
            `https://wa.me/916380701082?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        /* -----------------------------------------------
           OPEN WHATSAPP
        ------------------------------------------------ */

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );


        /* -----------------------------------------------
           RESET FORM
        ------------------------------------------------ */

        setFormData({
            name: "",
            product: "",
            message: "",
        });

        setErrors({});

    };


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <section
            id="contact"
            className="contact-section"
        >

            <div className="contact-container">


                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div className="contact-content">


                    {/* ---------------------------------------------
                        SECTION KICKER
                    ---------------------------------------------- */}

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

                        <span>
                            04
                        </span>

                        <i />

                        <span>
                            GET IN TOUCH
                        </span>

                    </motion.div>


                    {/* ---------------------------------------------
                        HEADING
                    ---------------------------------------------- */}

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

                        Let's grow
                        <br />

                        <span>
                            better shrimp.
                        </span>

                    </motion.h2>


                    {/* ---------------------------------------------
                        DESCRIPTION
                    ---------------------------------------------- */}

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

                        Have a question about our shrimp
                        health products or aquaculture
                        solutions? Tell us what you need
                        and our team will get in touch.

                    </motion.p>


                    {/* =================================================
                        CONTACT DETAILS
                    ================================================= */}

                    <div className="contact-details">


                        {/* ---------------------------------------------
                            PHONE
                        ---------------------------------------------- */}

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
                                    +91 6380701082
                                </strong>

                            </div>

                        </motion.a>


                        {/* ---------------------------------------------
                            EMAIL
                        ---------------------------------------------- */}

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


                        {/* ---------------------------------------------
                            ADDRESS
                        ---------------------------------------------- */}

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

                                    Harur Taluk,
                                    Dharmapuri Dist,
                                    <br />

                                    Tamilnadu 636903

                                </strong>

                            </div>

                        </motion.div>


                    </div>

                </div>


                {/* =================================================
                    ENQUIRY FORM
                ================================================= */}

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


                    {/* ---------------------------------------------
                        FORM HEADER
                    ---------------------------------------------- */}

                    <div className="contact-form-header">

                        <span>
                            SEND AN ENQUIRY
                        </span>

                        <h3>

                            Tell us what
                            <br />

                            <span>
                                you need.
                            </span>

                        </h3>

                    </div>


                    {/* =================================================
                        FORM
                    ================================================= */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                    >


                        {/* ---------------------------------------------
                            NAME
                        ---------------------------------------------- */}

                        <div className="contact-field">

                            <label htmlFor="name">
                                YOUR NAME
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                maxLength={50}
                                autoComplete="name"
                                aria-invalid={
                                    Boolean(errors.name)
                                }
                            />


                            {errors.name && (

                                <small className="contact-error">
                                    {errors.name}
                                </small>

                            )}

                        </div>


                        {/* ---------------------------------------------
                            PRODUCT / REQUIREMENT
                        ---------------------------------------------- */}

                        <div className="contact-field">

                            <label htmlFor="product">
                                PRODUCT / REQUIREMENT
                            </label>

                            <select
                                id="product"
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                aria-invalid={
                                    Boolean(errors.product)
                                }
                            >

                                <option
                                    value=""
                                    disabled
                                >
                                    Select a product or requirement
                                </option>


                                <option value="Grow Meg">
                                    Grow Meg
                                </option>

                                <option value="Grow C">
                                    Grow C
                                </option>

                                <option value="Oxy Fresh">
                                    Oxy Fresh
                                </option>

                                <option value="SoftMAX">
                                    SoftMAX
                                </option>

                                <option value="Biocide">
                                    Biocide
                                </option>

                                <option value="AmmoCure">
                                    AmmoCure
                                </option>

                                <option value="ZOO Clear">
                                    ZOO Clear
                                </option>

                                <option value="PROLife">
                                    PROLife
                                </option>

                                <option value="Hercules TC">
                                    Hercules TC
                                </option>

                                <option value="ZOO Gill">
                                    ZOO Gill
                                </option>

                                <option value="Hepto Gut">
                                    Hepto Gut
                                </option>

                                <option value="General Aquaculture Enquiry">
                                    General Aquaculture Enquiry
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>


                            {errors.product && (

                                <small className="contact-error">
                                    {errors.product}
                                </small>

                            )}

                        </div>


                        {/* ---------------------------------------------
                            MESSAGE
                        ---------------------------------------------- */}

                        <div className="contact-field">

                            <label htmlFor="message">
                                YOUR REQUIREMENT
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your shrimp farming requirement..."
                                maxLength={1000}
                                aria-invalid={
                                    Boolean(errors.message)
                                }
                            />


                            <div className="contact-message-meta">

                                <span>

                                    {errors.message && (
                                        <small className="contact-error">
                                            {errors.message}
                                        </small>
                                    )}

                                </span>

                                {/* <span>
                                    {formData.message.length}/1000
                                </span> */}

                            </div>

                        </div>


                        {/* ---------------------------------------------
                            SUBMIT
                        ---------------------------------------------- */}

                        <button
                            type="submit"
                            className="contact-submit"
                        >

                            <span>
                                SEND ENQUIRY
                            </span>


                        </button>


                    </form>

                </motion.div>

            </div>

        </section>

    );

};


export default Contact;