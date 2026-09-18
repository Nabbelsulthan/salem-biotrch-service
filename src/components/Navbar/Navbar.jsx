






import { useEffect, useState } from "react";

import {
    motion,
    AnimatePresence
} from "framer-motion";

import {
    Menu,
    X,
    ArrowUpRight
} from "lucide-react";

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import logo from "../../assets/logos/sbs-logo.png";

import "./Navbar.css";


/* =========================================================
   NAVIGATION LINKS
========================================================= */

const navLinks = [

    {
        label: "Home",
        section: "home",
    },

    {
        label: "Certificates",
        section: "certificates",
    },

    {
        label: "Products",
        section: "products",
    },

    {
        label: "Contact",
        section: "contact",
    },

];


/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();


    const [scrolled, setScrolled] =
        useState(false);


    const [menuOpen, setMenuOpen] =
        useState(false);


    const [activeSection, setActiveSection] =
        useState("home");


    /* =====================================================
       SCROLL STATE
    ===================================================== */

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(
                window.scrollY > 40
            );

        };


        handleScroll();


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);


    /* =====================================================
       DETERMINE ACTIVE PAGE / SECTION
    ===================================================== */

    useEffect(() => {

        /* =================================================
           PRODUCT DETAIL PAGES
        ================================================= */

        if (
            location.pathname.startsWith(
                "/products/"
            )
        ) {

            setActiveSection(
                "products"
            );

            return;

        }


        /* =================================================
           PRODUCTS LISTING PAGE
        ================================================= */

        if (
            location.pathname ===
            "/products"
        ) {

            setActiveSection(
                "products"
            );

            return;

        }


        /* =================================================
           OTHER PAGES
        ================================================= */

        if (
            location.pathname !== "/"
        ) {

            setActiveSection("");

            return;

        }


        /* =================================================
           HOMEPAGE SECTION DETECTION
        ================================================= */

        const sections = [

            "home",

            "certificates",

            "products",

            "contact",

        ];


        const handleScroll = () => {

            const scrollPosition =
                window.scrollY + 180;


            let currentSection =
                "home";


            sections.forEach(
                (section) => {

                    const element =
                        document.getElementById(
                            section
                        );


                    if (!element) {
                        return;
                    }


                    const sectionTop =
                        element.offsetTop;


                    if (
                        scrollPosition >=
                        sectionTop
                    ) {

                        currentSection =
                            section;

                    }

                }
            );


            /* =============================================
               AT THE VERY TOP
            ============================================== */

            if (
                window.scrollY < 100
            ) {

                currentSection =
                    "home";

            }


            setActiveSection(
                currentSection
            );

        };


        handleScroll();


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, [location.pathname]);


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    const handleLinkClick = () => {

        setMenuOpen(false);

    };


    /* =====================================================
       SECTION NAVIGATION
    ===================================================== */

    const handleSectionClick = (
        section
    ) => {

        setMenuOpen(false);


        /* =================================================
           ALREADY ON HOMEPAGE
        ================================================= */

        if (
            location.pathname === "/"
        ) {

            const element =
                document.getElementById(
                    section
                );


            if (!element) {
                return;
            }


            /* =============================================
               UPDATE URL
            ============================================== */

            window.history.replaceState(
                null,
                "",
                `/#${section}`
            );


            /* =============================================
               SMOOTH SCROLL
            ============================================== */

            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });


            setActiveSection(
                section
            );


            return;

        }


        /* =================================================
           OTHER PAGE

           Go to homepage + section.
        ================================================= */

        navigate(
            `/#${section}`
        );

    };


    /* =====================================================
       HOME CLICK
    ===================================================== */

    const handleHomeClick = (
        event
    ) => {

        event.preventDefault();

        setMenuOpen(false);


        /* =================================================
           ALREADY ON HOMEPAGE
        ================================================= */

        if (
            location.pathname === "/"
        ) {

            const element =
                document.getElementById(
                    "home"
                );


            if (element) {

                window.history.replaceState(
                    null,
                    "",
                    "/"
                );


                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

            }


            setActiveSection(
                "home"
            );


            return;

        }


        /* =================================================
           OTHER PAGE
        ================================================= */

        navigate("/");

    };


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <>

            {/* =================================================
                NAVBAR
            ================================================= */}

            <motion.header
                className={`navbar ${
                    scrolled
                        ? "navbar-scrolled"
                        : ""
                }`}

                initial={{
                    y: -100,
                    opacity: 0,
                }}

                animate={{
                    y: 0,
                    opacity: 1,
                }}

                transition={{
                    duration: 0.7,

                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                }}
            >

                <div className="navbar-inner">


                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={
                            handleLinkClick
                        }
                    >

                        <img
                            src={logo}
                            alt="Salem Biotech Service"
                        />

                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <nav
                        className="navbar-links"
                        aria-label="Main navigation"
                    >

                        {navLinks.map(
                            (link, index) => {

                                const isActive =
                                    activeSection ===
                                    link.section;


                                return (

                                    <motion.div
                                        key={
                                            link.label
                                        }

                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}

                                        transition={{
                                            delay:
                                                0.15 +
                                                index *
                                                0.08,

                                            duration:
                                                0.45,
                                        }}
                                    >

                                        <a
                                            href={
                                                link.section ===
                                                "home"

                                                    ? "/"

                                                    : `/#${link.section}`
                                            }

                                            className={`navbar-link ${
                                                isActive
                                                    ? "navbar-link-active"
                                                    : ""
                                            }`}

                                            onClick={(
                                                event
                                            ) => {

                                                /* =================================
                                                   HOME
                                                ================================== */

                                                if (
                                                    link.section ===
                                                    "home"
                                                ) {

                                                    handleHomeClick(
                                                        event
                                                    );

                                                    return;

                                                }


                                                /* =================================
                                                   SECTION
                                                ================================== */

                                                event.preventDefault();


                                                handleSectionClick(
                                                    link.section
                                                );

                                            }}
                                        >

                                            <span>
                                                {
                                                    link.label
                                                }
                                            </span>


                                            <span
                                                className="navbar-link-line"
                                            />

                                        </a>

                                    </motion.div>

                                );

                            }
                        )}

                    </nav>


                    {/* =================================================
                        DESKTOP CTA
                    ================================================= */}

                    <motion.a
                        href="/#contact"

                        className="navbar-cta"

                        onClick={(
                            event
                        ) => {

                            event.preventDefault();

                            handleSectionClick(
                                "contact"
                            );

                        }}

                        whileHover={{
                            scale: 1.03,
                        }}

                        whileTap={{
                            scale: 0.97,
                        }}
                    >

                        <span>
                            Enquire Now
                        </span>

                   

                    </motion.a>


                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================= */}

                    <button
                        type="button"

                        className="navbar-menu-button"

                        aria-label={
                            menuOpen
                                ? "Close menu"
                                : "Open menu"
                        }

                        aria-expanded={
                            menuOpen
                        }

                        onClick={() =>
                            setMenuOpen(
                                !menuOpen
                            )
                        }
                    >

                        {menuOpen ? (

                            <X
                                size={24}
                            />

                        ) : (

                            <Menu
                                size={24}
                            />

                        )}

                    </button>

                </div>

            </motion.header>


            {/* =================================================
                MOBILE MENU
            ================================================= */}

            <AnimatePresence>

                {menuOpen && (

                    <motion.div
                        className="mobile-menu"

                        initial={{
                            opacity: 0,
                            y: -20,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            y: -20,
                        }}

                        transition={{
                            duration: 0.35,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ],
                        }}
                    >

                        <div className="mobile-menu-content">


                            {/* =================================================
                                MOBILE LINKS
                            ================================================= */}

                            {navLinks.map(
                                (
                                    link,
                                    index
                                ) => {

                                    const isActive =
                                        activeSection ===
                                        link.section;


                                    return (

                                        <motion.div
                                            key={
                                                link.label
                                            }

                                            initial={{
                                                opacity: 0,
                                                x: -20,
                                            }}

                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}

                                            transition={{
                                                delay:
                                                    index *
                                                    0.07,
                                            }}
                                        >

                                            <a
                                                href={
                                                    link.section ===
                                                    "home"

                                                        ? "/"

                                                        : `/#${link.section}`
                                                }

                                                className={`mobile-menu-link ${
                                                    isActive
                                                        ? "mobile-menu-link-active"
                                                        : ""
                                                }`}

                                                onClick={(
                                                    event
                                                ) => {

                                                    /* =========================
                                                       HOME
                                                    ========================== */

                                                    if (
                                                        link.section ===
                                                        "home"
                                                    ) {

                                                        handleHomeClick(
                                                            event
                                                        );

                                                        return;

                                                    }


                                                    /* =========================
                                                       SECTION
                                                    ========================== */

                                                    event.preventDefault();


                                                    handleSectionClick(
                                                        link.section
                                                    );

                                                }}
                                            >

                                                <span>
                                                    {
                                                        link.label
                                                    }
                                                </span>

                                                <ArrowUpRight
                                                    size={20}
                                                />

                                            </a>

                                        </motion.div>

                                    );

                                }
                            )}


                            {/* =================================================
                                MOBILE CTA
                            ================================================= */}

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
                                    delay: 0.25,
                                }}
                            >

                                <a
                                    href="/#contact"

                                    className="mobile-menu-cta"

                                    onClick={(
                                        event
                                    ) => {

                                        event.preventDefault();

                                        handleSectionClick(
                                            "contact"
                                        );

                                    }}
                                >

                                    Enquire Now

                              

                                </a>

                            </motion.div>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </>

    );

};


export default Navbar;