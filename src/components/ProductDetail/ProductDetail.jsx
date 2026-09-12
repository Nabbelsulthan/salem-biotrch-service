import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
} from "lucide-react";

import { products } from "../../data/products";

import "./ProductDetail.css";


const ease = [
    0.22,
    1,
    0.36,
    1,
];


const ProductDetail = () => {

    const { slug } = useParams();

    const product = products[slug];


    /* =========================================
       START EVERY PRODUCT PAGE FROM TOP
       ========================================= */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [slug]);


    /* =========================================
       INVALID PRODUCT
       ========================================= */

    if (!product) {

        return (

            <section className="product-not-found">

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
                        duration: 0.8,
                        ease,
                    }}
                >
                    Product not found
                </motion.h1>


                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.6,
                        delay: 0.15,
                    }}
                >

                    <Link to="/products">
                        Back to products
                    </Link>

                </motion.div>

            </section>

        );
    }


    /* =========================================
       DYNAMIC SECTION DETECTION
       ========================================= */

    const hasHeavyMetalCauses =
        Array.isArray(product.heavyMetalCauses) &&
        product.heavyMetalCauses.length > 0;


    const hasBenefits =
        Array.isArray(product.benefits) &&
        product.benefits.length > 0;


    const hasProductInformation =
        Boolean(
            product.ingredients ||
            product.application ||
            product.dosage ||
            product.storage ||
            product.netWeight
        );


    /* =========================================
       DYNAMIC SECTION NUMBERS
       ========================================= */

    let sectionNumber = 1;


    const overviewNumber =
        String(sectionNumber++).padStart(2, "0");


    const heavyMetalCausesNumber =
        hasHeavyMetalCauses
            ? String(sectionNumber++).padStart(2, "0")
            : null;


    const benefitsNumber =
        hasBenefits
            ? String(sectionNumber++).padStart(2, "0")
            : null;


    const informationNumber =
        hasProductInformation
            ? String(sectionNumber++).padStart(2, "0")
            : null;


    return (

        <div className="product-detail-page">


            {/* =====================================================
                PRODUCT HERO
                ===================================================== */}

            <section className="product-detail-hero">

                <div className="product-detail-container">


                    {/* BACK TO PRODUCTS */}

                    <motion.div
                        className="product-detail-back-wrap"

                        initial={{
                            opacity: 0,
                            x: -25,
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                        }}

                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease,
                        }}
                    >

                        <Link
                            to={`/products#product-${product.number}`}
                            className="product-detail-back"
                        >

                            <ArrowLeft size={17} />

                            <span>
                                BACK TO PRODUCTS
                            </span>

                        </Link>

                    </motion.div>


                    {/* HERO GRID */}

                    <div className="product-detail-hero-grid">


                        {/* =================================================
                            HERO CONTENT
                        ================================================= */}

                        <div className="product-detail-content">


                            {/* CATEGORY */}

                            <motion.div
                                className="product-detail-kicker"

                                initial={{
                                    opacity: 0,
                                    x: -25,
                                }}

                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}

                                transition={{
                                    duration: 0.7,
                                    delay: 0.3,
                                    ease,
                                }}
                            >

                                <span>
                                    {product.number}
                                </span>

                                <i />

                                <span>
                                    {product.category}
                                </span>

                            </motion.div>


                            {/* PRODUCT NAME */}

                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: 1,
                                    delay: 0.4,
                                    ease,
                                }}
                            >
                                {product.name}
                            </motion.h1>


                            {/* SHORT HERO DESCRIPTION */}

                            <motion.p
                                className="product-detail-intro"

                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: 0.8,
                                    delay: 0.65,
                                    ease,
                                }}
                            >

                                {product.heroDescription ||
                                    product.tagline ||
                                    ""}

                            </motion.p>


                            {/* HERO META */}

                            <motion.div
                                className="product-detail-meta"

                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: 0.75,
                                    delay: 0.85,
                                    ease,
                                }}
                            >

                                <div>

                                    <span>
                                        PRODUCT TYPE
                                    </span>

                                    <strong>
                                        {product.category}
                                    </strong>

                                </div>


                                <div>

                                    <span>
                                        NET WEIGHT
                                    </span>

                                    <strong>
                                        {product.netWeight}
                                    </strong>

                                </div>

                            </motion.div>

                        </div>


                        {/* =================================================
                            PRODUCT VISUAL
                        ================================================= */}

                        <motion.div
                            className="product-detail-visual"

                            initial={{
                                opacity: 0,
                                x: 70,
                                scale: 0.92,
                            }}

                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}

                            transition={{
                                duration: 1.2,
                                delay: 0.25,
                                ease,
                            }}
                        >


                            {/* BLURRED IMAGE BACKGROUND */}

                            <motion.div
                                className="product-detail-backdrop"

                                style={{
                                    backgroundImage:
                                        `url(${product.image})`,
                                }}

                                initial={{
                                    scale: 1.18,
                                    opacity: 0,
                                }}

                                animate={{
                                    scale: 1.08,
                                    opacity: 0.6,
                                }}

                                transition={{
                                    duration: 1.8,
                                    delay: 0.25,
                                    ease,
                                }}
                            />


                            {/* IMAGE OVERLAY */}

                            <div className="product-detail-overlay" />


                            {/* PRODUCT IMAGE */}

                            <motion.img
                                src={product.image}
                                alt={product.name}
                                className="product-detail-image"

                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 30,
                                }}

                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: 1.2,
                                    delay: 0.5,
                                    ease,
                                }}
                            />


                            {/* LARGE NUMBER */}

                            <motion.span
                                className="product-detail-number"

                                initial={{
                                    opacity: 0,
                                    y: -20,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: 0.7,
                                    delay: 0.75,
                                    ease,
                                }}
                            >

                                {product.number}

                            </motion.span>


                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRODUCT OVERVIEW
                ===================================================== */}

            <section className="product-detail-description">

                <div className="product-detail-container">


                    {/* SECTION LABEL */}

                    <motion.div
                        className="product-section-label"

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
                            amount: 0.35,
                        }}

                        transition={{
                            duration: 0.7,
                            ease,
                        }}
                    >

                        <span>
                            {overviewNumber}
                        </span>

                        <span>
                            PRODUCT OVERVIEW
                        </span>

                    </motion.div>


                    <div className="product-description-grid">


                        {/* OVERVIEW TITLE */}

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

                            Understanding

                            <br />

                            <span>
                                {product.name}.
                            </span>

                        </motion.h2>


                        {/* FULL DESCRIPTION */}

                        <motion.div
                            className="product-description-copy"

                            initial={{
                                opacity: 0,
                                x: 45,
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
                                duration: 0.9,
                                delay: 0.15,
                                ease,
                            }}
                        >

                            <p>
                                {product.description}
                            </p>


                            {product.descriptionExtra && (

                                <p>
                                    {product.descriptionExtra}
                                </p>

                            )}

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                HEAVY METAL WILL CAUSES
                ===================================================== */}

            {hasHeavyMetalCauses && (

                <section className="product-detail-causes">

                    <div className="product-detail-container">


                        {/* SECTION LABEL */}

                        <motion.div
                            className="product-section-label"

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
                                amount: 0.35,
                            }}

                            transition={{
                                duration: 0.7,
                                ease,
                            }}
                        >

                            <span>
                                {heavyMetalCausesNumber}
                            </span>

                            <span>
                                HEAVY METAL WILL CAUSES
                            </span>

                        </motion.div>


                        {/* HEAVY METAL CAUSES LIST */}

                        <div className="product-causes-list">

                            {product.heavyMetalCauses.map(
                                (cause, index) => (

                                    <motion.div
                                        className="product-benefit"
                                        key={cause}

                                        initial={{
                                            opacity: 0,
                                            x: -35,
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}

                                        viewport={{
                                            once: false,
                                            amount: 0.2,
                                        }}

                                        transition={{
                                            duration: 0.65,
                                            delay: index * 0.08,
                                            ease,
                                        }}
                                    >

                                        <span>
                                            {String(
                                                index + 1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <p>
                                            {cause}
                                        </p>

                                    </motion.div>

                                )
                            )}

                        </div>

                    </div>

                </section>

            )}


            {/* =====================================================
                BENEFITS
                ===================================================== */}

            {hasBenefits && (

                <section className="product-detail-benefits">

                    <div className="product-detail-container">


                        {/* SECTION LABEL */}

                        <motion.div
                            className="product-section-label light"

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
                                amount: 0.35,
                            }}

                            transition={{
                                duration: 0.7,
                                ease,
                            }}
                        >

                            <span>
                                {benefitsNumber}
                            </span>

                            <span>
                                BENEFITS
                            </span>

                        </motion.div>


                        {/* BENEFITS TITLE */}

                        <motion.div
                            className="product-benefits-heading"

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
                                amount: 0.3,
                            }}

                            transition={{
                                duration: 0.9,
                                ease,
                            }}
                        >

                            <h2>

                                Key benefits

                                <br />

                                <span>
                                    of {product.name}.
                                </span>

                            </h2>

                        </motion.div>


                        {/* BENEFIT LIST */}

                        <div className="product-benefits-list">

                            {product.benefits.map(
                                (benefit, index) => (

                                    <motion.div
                                        className="product-benefit"
                                        key={benefit}

                                        initial={{
                                            opacity: 0,
                                            x: -35,
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}

                                        viewport={{
                                            once: false,
                                            amount: 0.2,
                                        }}

                                        transition={{
                                            duration: 0.65,
                                            delay: index * 0.08,
                                            ease,
                                        }}
                                    >

                                        <span>
                                            {String(
                                                index + 1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <p>
                                            {benefit}
                                        </p>

                                    </motion.div>

                                )
                            )}

                        </div>

                    </div>

                </section>

            )}


            {/* =====================================================
                PRODUCT INFORMATION
                ===================================================== */}

            {hasProductInformation && (

                <section className="product-detail-information">

                    <div className="product-detail-container">


                        {/* SECTION LABEL */}

                        <motion.div
                            className="product-section-label"

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
                                amount: 0.35,
                            }}

                            transition={{
                                duration: 0.7,
                                ease,
                            }}
                        >

                            <span>
                                {informationNumber}
                            </span>

                            <span>
                                PRODUCT INFORMATION
                            </span>

                        </motion.div>


                        {/* INFORMATION GRID */}

                        <div className="product-information-grid">


                            {/* =============================================
                                INGREDIENTS
                            ============================================= */}

                            {product.ingredients && (

                                <motion.article

                                    initial={{
                                        opacity: 0,
                                        y: 45,
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
                                        duration: 0.75,
                                        ease,
                                    }}
                                >

                                    <span>
                                        INGREDIENTS
                                    </span>

                                    <h3>
                                        What's inside
                                    </h3>

                                    <p>
                                        {product.ingredients}
                                    </p>

                                </motion.article>

                            )}


                            {/* =============================================
                                APPLICATION
                            ============================================= */}

                            {product.application && (

                                <motion.article

                                    initial={{
                                        opacity: 0,
                                        y: 45,
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
                                        duration: 0.75,
                                        delay: 0.1,
                                        ease,
                                    }}
                                >

                                    <span>
                                        APPLICATION
                                    </span>

                                    <h3>
                                        How to apply
                                    </h3>

                                    <p>
                                        {product.application}
                                    </p>

                                </motion.article>

                            )}


                            {/* =============================================
                                DOSAGE
                            ============================================= */}

                            {product.dosage && (

                                <motion.article

                                    initial={{
                                        opacity: 0,
                                        y: 45,
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
                                        duration: 0.75,
                                        delay: 0.2,
                                        ease,
                                    }}
                                >

                                    <span>
                                        DOSAGE
                                    </span>

                                    <h3>
                                        Dosage
                                    </h3>

                                    <p>
                                        {product.dosage}
                                    </p>

                                </motion.article>

                            )}


                            {/* =============================================
                                STORAGE
                            ============================================= */}

                            {product.storage && (

                                <motion.article

                                    initial={{
                                        opacity: 0,
                                        y: 45,
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
                                        duration: 0.75,
                                        delay: 0.3,
                                        ease,
                                    }}
                                >

                                    <span>
                                        STORAGE
                                    </span>

                                    <h3>
                                        Cool &amp; dark
                                    </h3>

                                    <p>
                                        {product.storage}
                                    </p>

                                </motion.article>

                            )}


                            {/* =============================================
                                NET WEIGHT
                            ============================================= */}

                            {product.netWeight && (

                                <motion.article

                                    initial={{
                                        opacity: 0,
                                        y: 45,
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
                                        duration: 0.75,
                                        delay: 0.4,
                                        ease,
                                    }}
                                >

                                    <span>
                                        NET WEIGHT
                                    </span>

                                    <h3>
                                        {product.netWeight}
                                    </h3>

                                    <p>
                                        Product pack size.
                                    </p>

                                </motion.article>

                            )}

                        </div>

                    </div>

                </section>

            )}


            {/* =====================================================
                BACK TO PRODUCTS
                ===================================================== */}

            <section className="product-detail-footer">

                <div className="product-detail-container">

                    <motion.div
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
                            duration: 0.8,
                            ease,
                        }}
                    >

                        <Link
                            to={`/products#product-${product.number}`}
                            className="product-detail-all-products"
                        >

                            <span>
                                VIEW ALL PRODUCTS
                            </span>

                            <ArrowUpRight size={18} />

                        </Link>

                    </motion.div>

                </div>

            </section>

        </div>
    );
};


export default ProductDetail;