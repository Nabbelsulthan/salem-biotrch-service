import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import growMegImage from "../../assets/products/Grow-meg.png";
import softMaxImage from "../../assets/products/Soft-max.png";
import zoogillImage from "../../assets/products/zoo-gill.png";
import ammoCureImage from "../../assets/products/ammo-cure.jpeg";
import growCImage from "../../assets/products/grow-c.png";
import herculesImage from "../../assets/products/hercules-tc.jpeg";
import zooclearImage from "../../assets/products/zoo-clear.png";
import prolifeImage from "../../assets/products/prolife.jpeg";
import oxyFreshImage from "../../assets/products/oxyfresh.png";
import biocideImage from "../../assets/products/biocide.png";
import heptoGutImage from "../../assets/products/heptogut.png";

import "./Products.css";


const products = [
    {
        number: "01",
        name: "GROW MEG",
        category: "IMMUNE BOOSTER",
        tagline:
            "Support stronger shrimp throughout the farming cycle.",
        description:
            "A vitamin, amino acid and essential mineral formulation designed to support growth, health and survival of shrimp.",
        image: growMegImage,
        focus: "Shrimp Health",
    },

    {
        number: "02",
        name: "GROW C",
        category: "MAKE A HEALTHY SHRIMP",
        tagline:
            "Supporting shrimp health and development.",
        description:
            "Vitamin C supports growth, tissue repair and immune function in shrimp.",
        focus: "Shrimp Health",
        image: growCImage,
    },

    {
        number: "03",
        name: "OXY FRESH",
        category: "IMPROVE MORE OXYGEN",
        tagline:
            "Supporting healthier pond water conditions.",
        description:
            "A pond solution focused on improving water quality, reducing BOD and COD, removing sludge and reducing toxic gases.",
        focus: "Water Quality",
        image: oxyFreshImage,
    },

    {
        number: "04",
        name: "SOFT MAX",
        category: "MOST POWERFUL SOFTENER",
        tagline:
            "Improving pond water conditions.",
        description:
            "An EDTA-based water treatment solution designed to reduce heavy metals and soften water hardness.",
        image: softMaxImage,
        focus: "Water Quality",
    },

    {
        number: "05",
        name: "BIOCIDES",
        category: "CONTROL DISEASE OUTBREAK",
        tagline:
            "Supporting disease management in aquaculture.",
        description:
            "A biocide product designed to help control viral and algal toxins and support pond conditions.",
        focus: "Disease Control",
        image: biocideImage,
    },

    {
        number: "06",
        name: "AMMO CURE",
        category: "REDUCING AMMONIA & NITRITE",
        tagline:
            "Helping maintain healthier pond water.",
        description:
            "A natural-ingredient blend designed to reduce ammonia and nitrite levels in aquaculture systems.",
        focus: "Water Quality",
        image: ammoCureImage,
    },

    {
        number: "07",
        name: "ZOO CLEAR",
        category: "CLEAR ZOOTHAMNIUM",
        tagline:
            "Supporting cleaner and healthier shrimp.",
        description:
            "A biological treatment designed to address external attachments and support healthier aquatic animals.",
        focus: "Shrimp Health",
        image: zooclearImage,
    },

    {
        number: "08",
        name: "PROLIFE",
        category: "EXTEND YOUR POND LIFE",
        tagline:
            "Supporting pond performance through probiotics.",
        description:
            "A probiotic formulation designed to support water quality, reduce BOD and COD, improve FCR and pond performance.",
        focus: "Pond Performance",
        image: prolifeImage,
    },

    {
        number: "09",
        name: "HERCULES TC",
        category: "MAKE A SHRIMP STRONG",
        tagline:
            "Supporting shrimp nutrition and resilience.",
        description:
        "A combination of natural mixed minerals, gives good health to shrimp, and pond environment.",
        image: herculesImage,
    },

    {
        number: "10",
        name: "ZOO GILL",
        category: "REDUCE GILL INFECTION",
        tagline:
            "Supporting healthier shrimp gills.",
        description:
            "A specialized solution introduced to help address black or brown gill conditions in shrimp aquaculture.",
        focus: "Shrimp Health",
        image: zoogillImage,
    },

    {
        number: "11",
        name: "HEPTO GUT",
        category: "IMPROVE GUT HEALTH",
        tagline:
            "Supporting healthy shrimp gut function.",
        description:
            "A shrimp gut probiotic formulation supporting microbial balance, feed intake, growth and digestive health.",
        focus: "Gut Health",
        image: heptoGutImage,
    },
];


const ease = [0.22, 1, 0.36, 1];


const Products = () => {
    return (
        <section
            id="products"
            className="products"
        >

            {/* =====================================================
                INTRO
            ===================================================== */}

            <div className="products-intro">

                {/* subtle visual background */}
                <div className="products-intro-glow" />
                <div className="products-intro-water" />

                <motion.div
                    className="products-intro-inner"

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
                        amount: 0.35,
                    }}

                    transition={{
                        duration: 1,
                        ease,
                    }}
                >

                    <motion.div
                        className="products-kicker"

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
                        }}

                        transition={{
                            duration: 0.7,
                            ease,
                        }}
                    >
                        <span>03</span>
                        <span className="products-kicker-line" />
                        <span>OUR PRODUCTS</span>
                    </motion.div>


                    <div className="products-intro-main">

                        <motion.h2
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
                            }}

                            transition={{
                                duration: 1,
                                delay: 0.12,
                                ease,
                            }}
                        >
                            Aquaculture
                            <br />
                            <span>solutions.</span>
                        </motion.h2>


                        <motion.div
                            className="products-intro-copy"

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
                            }}

                            transition={{
                                duration: 0.8,
                                delay: 0.28,
                                ease,
                            }}
                        >

                            <p>
                                A focused range of products designed
                                around shrimp health, water quality
                                and pond performance.
                            </p>

                            <div className="products-intro-stats">

                                <div>
                                    <strong>11</strong>
                                    <span>PRODUCTS</span>
                                </div>

                                <div>
                                    <strong>03</strong>
                                    <span>CORE AREAS</span>
                                </div>

                            </div>

                        </motion.div>

                    </div>


                    <motion.a
                        href="#product-01"
                        className="products-explore"

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
                        }}

                        transition={{
                            duration: 0.7,
                            delay: 0.42,
                            ease,
                        }}
                    >
                        <span>EXPLORE PRODUCTS</span>

                        <span className="products-explore-icon">
                            <ChevronDown size={18} />
                        </span>
                    </motion.a>

                </motion.div>

            </div>


            {/* =====================================================
                PRODUCT SHOWCASE
            ===================================================== */}

            <div className="products-showcase">

                {products.map((product, index) => (

                    <article
                        className={`product-slide ${index % 2 === 1
                            ? "product-slide-light"
                            : ""
                            }`}
                        id={`product-${product.number}`}
                        key={product.name}
                    >

                        <div className="product-slide-inner">

                            {/* =================================================
                                PRODUCT INFORMATION
                            ================================================= */}

                            <motion.div
                                className="product-info"

                                initial={{
                                    opacity: 0,
                                    x: -55,
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
                                    duration: 0.9,
                                    ease,
                                }}
                            >

                                <div className="product-topline">

                                    <span className="product-number">
                                        {product.number}
                                    </span>

                                    <span className="product-category">
                                        {product.category}
                                    </span>

                                </div>


                                <h3>
                                    {product.name}
                                </h3>


                                <p className="product-tagline">
                                    {product.tagline}
                                </p>


                                <p className="product-description">
                                    {product.description}
                                </p>


                                <div className="product-details">

                                    <div className="product-detail">
                                        <span>FOCUS</span>
                                        <strong>
                                            {product.focus}
                                        </strong>
                                    </div>

                                    <div className="product-detail">
                                        <span>PRODUCT</span>
                                        <strong>
                                            {product.number} / 11
                                        </strong>
                                    </div>

                                </div>


                        

                                <Link
                                    to={`/products/${product.name
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    className="product-button"
                                >
                                    <span>EXPLORE PRODUCT</span>

                                    <span className="product-button-icon">
                                        <ArrowUpRight size={19} />
                                    </span>
                                </Link>

                            </motion.div>


                            {/* =================================================
                                PRODUCT VISUAL
                            ================================================= */}

                            <motion.div
                                className="product-visual"

                                initial={{
                                    opacity: 0,
                                    x: 55,
                                    scale: 0.94,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}

                                viewport={{
                                    once: false,
                                    amount: 0.3,
                                }}

                                transition={{
                                    duration: 1,
                                    ease,
                                }}
                            >

                                <div className="product-visual-bg" />

                                <div className="product-visual-number">
                                    {product.number}
                                </div>

                                {product.image ? (
                                    <>
                                        {/* Full-frame atmospheric version */}
                                        <div
                                            className="product-image-backdrop"
                                            style={{
                                                backgroundImage: `url(${product.image})`,
                                            }}
                                        />

                                        {/* Soft overlay above backdrop */}
                                        <div className="product-image-overlay" />

                                        {/* Actual product image */}
                                        <motion.img
                                            src={product.image}
                                            alt={product.name}
                                            className="product-image"
                                            initial={{
                                                opacity: 0,
                                                scale: 0.92,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.2,
                                            }}
                                            transition={{
                                                duration: 1,
                                                ease,
                                            }}
                                        />
                                    </>
                                ) : (

                                    <div className="product-placeholder">

                                        <span>
                                            {product.number}
                                        </span>

                                        <strong>
                                            {product.name}
                                        </strong>

                                        <small>
                                            PRODUCT IMAGE
                                        </small>

                                    </div>

                                )}

                            </motion.div>

                        </div>

                    </article>

                ))}

            </div>


            {/* =====================================================
                CLOSING
            ===================================================== */}

            <motion.div
                className="products-closing"

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
                    amount: 0.5,
                }}

                transition={{
                    duration: 0.8,
                    ease,
                }}
            >

                <span>SALEM BIOTECH SERVICE</span>

                <strong>
                    AQUACULTURE TECHNOLOGY &amp; SERVICES
                </strong>

            </motion.div>

        </section>
    );
};


export default Products;