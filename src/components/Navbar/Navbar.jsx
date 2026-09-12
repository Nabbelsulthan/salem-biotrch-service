// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //     Menu,
// //     X,
// //     ArrowUpRight
// // } from "lucide-react";

// // import logo from "../../assets/logos/salem-biotech-logo.png";

// // import "./Navbar.css";

// // const navLinks = [
// //     {
// //         label: "Home",
// //         href: "#home",
// //     },
// //     {
// //         label: "Products",
// //         href: "#products",
// //     },
// //     {
// //         label: "Contact",
// //         href: "#contact",
// //     },
// // ];


// // const Navbar = () => {

// //     const [scrolled, setScrolled] = useState(false);
// //     const [menuOpen, setMenuOpen] = useState(false);


// //     useEffect(() => {

// //         const handleScroll = () => {

// //             setScrolled(window.scrollY > 40);

// //         };


// //         window.addEventListener(
// //             "scroll",
// //             handleScroll
// //         );


// //         return () => {

// //             window.removeEventListener(
// //                 "scroll",
// //                 handleScroll
// //             );

// //         };

// //     }, []);


// //     const handleLinkClick = () => {

// //         setMenuOpen(false);

// //     };


// //     return (

// //         <>

// //             <motion.header
// //                 className={`navbar ${
// //                     scrolled ? "navbar-scrolled" : ""
// //                 }`}
// //                 initial={{
// //                     y: -100,
// //                     opacity: 0,
// //                 }}
// //                 animate={{
// //                     y: 0,
// //                     opacity: 1,
// //                 }}
// //                 transition={{
// //                     duration: 0.7,
// //                     ease: [0.22, 1, 0.36, 1],
// //                 }}
// //             >

// //                 <div className="navbar-inner">


// //                     {/* Logo */}

// //                     <a
// //                         href="#home"
// //                         className="navbar-logo"
// //                         onClick={handleLinkClick}
// //                     >

// //                         <img
// //                             src={logo}
// //                             alt="Salem Biotech Service"
// //                         />

// //                     </a>



// //                     {/* Desktop Navigation */}

// //                     <nav className="navbar-links">

// //                         {navLinks.map(
// //                             (link, index) => (

// //                                 <motion.a
// //                                     key={link.label}
// //                                     href={link.href}
// //                                     className="navbar-link"
// //                                     initial={{
// //                                         opacity: 0,
// //                                         y: -10,
// //                                     }}
// //                                     animate={{
// //                                         opacity: 1,
// //                                         y: 0,
// //                                     }}
// //                                     transition={{
// //                                         delay:
// //                                             0.15 +
// //                                             index * 0.08,
// //                                         duration: 0.45,
// //                                     }}
// //                                 >

// //                                     <span>
// //                                         {link.label}
// //                                     </span>

// //                                     <span className="navbar-link-line" />

// //                                 </motion.a>

// //                             )
// //                         )}

// //                     </nav>



// //                     {/* CTA */}

// //                     <motion.a
// //                         href="#contact"
// //                         className="navbar-cta"
// //                         whileHover={{
// //                             scale: 1.03,
// //                         }}
// //                         whileTap={{
// //                             scale: 0.97,
// //                         }}
// //                     >

// //                         <span>
// //                             Enquire Now
// //                         </span>

// //                         <ArrowUpRight
// //                             size={17}
// //                             strokeWidth={2}
// //                         />

// //                     </motion.a>



// //                     {/* Mobile Menu Button */}

// //                     <button
// //                         type="button"
// //                         className="navbar-menu-button"
// //                         aria-label={
// //                             menuOpen
// //                                 ? "Close menu"
// //                                 : "Open menu"
// //                         }
// //                         aria-expanded={menuOpen}
// //                         onClick={() =>
// //                             setMenuOpen(
// //                                 !menuOpen
// //                             )
// //                         }
// //                     >

// //                         {menuOpen ? (
// //                             <X size={24} />
// //                         ) : (
// //                             <Menu size={24} />
// //                         )}

// //                     </button>

// //                 </div>

// //             </motion.header>



// //             {/* Mobile Menu */}

// //             <AnimatePresence>

// //                 {menuOpen && (

// //                     <motion.div
// //                         className="mobile-menu"
// //                         initial={{
// //                             opacity: 0,
// //                             y: -20,
// //                         }}
// //                         animate={{
// //                             opacity: 1,
// //                             y: 0,
// //                         }}
// //                         exit={{
// //                             opacity: 0,
// //                             y: -20,
// //                         }}
// //                         transition={{
// //                             duration: 0.35,
// //                             ease: [0.22, 1, 0.36, 1],
// //                         }}
// //                     >

// //                         <div className="mobile-menu-content">

// //                             {navLinks.map(
// //                                 (link, index) => (

// //                                     <motion.a
// //                                         key={link.label}
// //                                         href={link.href}
// //                                         className="mobile-menu-link"
// //                                         onClick={
// //                                             handleLinkClick
// //                                         }
// //                                         initial={{
// //                                             opacity: 0,
// //                                             x: -20,
// //                                         }}
// //                                         animate={{
// //                                             opacity: 1,
// //                                             x: 0,
// //                                         }}
// //                                         transition={{
// //                                             delay:
// //                                                 index *
// //                                                 0.07,
// //                                         }}
// //                                     >

// //                                         <span>
// //                                             {link.label}
// //                                         </span>

// //                                         <ArrowUpRight
// //                                             size={20}
// //                                         />

// //                                     </motion.a>

// //                                 )
// //                             )}


// //                             <motion.a
// //                                 href="#contact"
// //                                 className="mobile-menu-cta"
// //                                 onClick={
// //                                     handleLinkClick
// //                                 }
// //                                 initial={{
// //                                     opacity: 0,
// //                                     y: 15,
// //                                 }}
// //                                 animate={{
// //                                     opacity: 1,
// //                                     y: 0,
// //                                 }}
// //                                 transition={{
// //                                     delay: 0.25,
// //                                 }}
// //                             >

// //                                 Enquire Now

// //                                 <ArrowUpRight
// //                                     size={19}
// //                                 />

// //                             </motion.a>

// //                         </div>

// //                     </motion.div>

// //                 )}

// //             </AnimatePresence>

// //         </>

// //     );

// // };


// // export default Navbar;




// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//     Menu,
//     X,
//     ArrowUpRight
// } from "lucide-react";

// import {
//     Link,
//     useLocation,
//     useNavigate,
// } from "react-router-dom";

// import logo from "../../assets/logos/salem-biotech-logo.png";

// import "./Navbar.css";


// const navLinks = [
//     {
//         label: "Home",
//         to: "/",
//     },
//     {
//         label: "Products",
//         section: "products",
//     },
//     {
//         label: "Contact",
//         section: "contact",
//     },
// ];

// const Navbar = () => {

//     const navigate = useNavigate();
//     const location = useLocation();
//     const [scrolled, setScrolled] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);


//     useEffect(() => {

//         const handleScroll = () => {

//             setScrolled(window.scrollY > 40);

//         };


//         window.addEventListener(
//             "scroll",
//             handleScroll
//         );


//         return () => {

//             window.removeEventListener(
//                 "scroll",
//                 handleScroll
//             );

//         };

//     }, []);


//     const handleLinkClick = () => {

//         setMenuOpen(false);

//     };


//     const handleSectionClick = (section) => {

//         setMenuOpen(false);


//         // If already on homepage,
//         // directly scroll to the section.
//         if (location.pathname === "/") {

//             const element =
//                 document.getElementById(section);

//             if (element) {

//                 element.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });

//             }

//             return;
//         }


//         // If on another page,
//         // navigate back to homepage first.
//         navigate(`/#${section}`);

//     };


//     return (

//         <>

//             <motion.header
//                 className={`navbar ${scrolled ? "navbar-scrolled" : ""
//                     }`}
//                 initial={{
//                     y: -100,
//                     opacity: 0,
//                 }}
//                 animate={{
//                     y: 0,
//                     opacity: 1,
//                 }}
//                 transition={{
//                     duration: 0.7,
//                     ease: [0.22, 1, 0.36, 1],
//                 }}
//             >

//                 <div className="navbar-inner">


//                     {/* Logo */}

//                     <Link
//                         to="/"
//                         className="navbar-logo"
//                         onClick={handleLinkClick}
//                     >

//                         <img
//                             src={logo}
//                             alt="Salem Biotech Service"
//                         />

//                     </Link>



//                     {/* Desktop Navigation */}

//                     <nav className="navbar-links">

//                         {navLinks.map(
//                             (link, index) => (

//                                 <motion.div
//                                     key={link.label}
//                                     initial={{
//                                         opacity: 0,
//                                         y: -10,
//                                     }}
//                                     animate={{
//                                         opacity: 1,
//                                         y: 0,
//                                     }}
//                                     transition={{
//                                         delay:
//                                             0.15 +
//                                             index * 0.08,
//                                         duration: 0.45,
//                                     }}
//                                 >

//                                     {/* <Link
//                                         to={link.to}
//                                         className="navbar-link"
//                                         onClick={handleLinkClick}
//                                     >

//                                         <span>
//                                             {link.label}
//                                         </span>

//                                         <span className="navbar-link-line" />

//                                     </Link> */}


//                                     {link.section ? (

//                                         <a
//                                             href={`/#${link.section}`}
//                                             className="navbar-link"
//                                             onClick={(event) => {

//                                                 event.preventDefault();

//                                                 handleSectionClick(
//                                                     link.section
//                                                 );

//                                             }}
//                                         >

//                                             <span>
//                                                 {link.label}
//                                             </span>

//                                             <span className="navbar-link-line" />

//                                         </a>

//                                     ) : (

//                                         <Link
//                                             to={link.to}
//                                             className="navbar-link"
//                                             onClick={handleLinkClick}
//                                         >

//                                             <span>
//                                                 {link.label}
//                                             </span>

//                                             <span className="navbar-link-line" />

//                                         </Link>

//                                     )}
//                                 </motion.div>

//                             )
//                         )}

//                     </nav>



//                     {/* CTA */}

//                     <motion.div
//                         whileHover={{
//                             scale: 1.03,
//                         }}
//                         whileTap={{
//                             scale: 0.97,
//                         }}
//                     >

//                         <Link
//                             to="/#contact"
//                             className="navbar-cta"
//                             onClick={handleLinkClick}
//                         >

//                             <span>
//                                 Enquire Now
//                             </span>

//                             <ArrowUpRight
//                                 size={17}
//                                 strokeWidth={2}
//                             />

//                         </Link>

//                     </motion.div>



//                     {/* Mobile Menu Button */}

//                     <button
//                         type="button"
//                         className="navbar-menu-button"
//                         aria-label={
//                             menuOpen
//                                 ? "Close menu"
//                                 : "Open menu"
//                         }
//                         aria-expanded={menuOpen}
//                         onClick={() =>
//                             setMenuOpen(
//                                 !menuOpen
//                             )
//                         }
//                     >

//                         {menuOpen ? (
//                             <X size={24} />
//                         ) : (
//                             <Menu size={24} />
//                         )}

//                     </button>

//                 </div>

//             </motion.header>



//             {/* Mobile Menu */}

//             <AnimatePresence>

//                 {menuOpen && (

//                     <motion.div
//                         className="mobile-menu"
//                         initial={{
//                             opacity: 0,
//                             y: -20,
//                         }}
//                         animate={{
//                             opacity: 1,
//                             y: 0,
//                         }}
//                         exit={{
//                             opacity: 0,
//                             y: -20,
//                         }}
//                         transition={{
//                             duration: 0.35,
//                             ease: [0.22, 1, 0.36, 1],
//                         }}
//                     >

//                         <div className="mobile-menu-content">

//                             {navLinks.map(
//                                 (link, index) => (

//                                     <motion.div
//                                         key={link.label}
//                                         initial={{
//                                             opacity: 0,
//                                             x: -20,
//                                         }}
//                                         animate={{
//                                             opacity: 1,
//                                             x: 0,
//                                         }}
//                                         transition={{
//                                             delay:
//                                                 index *
//                                                 0.07,
//                                         }}
//                                     >

//                                         <Link
//                                             to={link.to}
//                                             className="mobile-menu-link"
//                                             onClick={
//                                                 handleLinkClick
//                                             }
//                                         >

//                                             <span>
//                                                 {link.label}
//                                             </span>

//                                             <ArrowUpRight
//                                                 size={20}
//                                             />

//                                         </Link>

//                                     </motion.div>

//                                 )
//                             )}


//                             <motion.div
//                                 initial={{
//                                     opacity: 0,
//                                     y: 15,
//                                 }}
//                                 animate={{
//                                     opacity: 1,
//                                     y: 0,
//                                 }}
//                                 transition={{
//                                     delay: 0.25,
//                                 }}
//                             >

//                                 <Link
//                                     to="/#contact"
//                                     className="mobile-menu-cta"
//                                     onClick={
//                                         handleLinkClick
//                                     }
//                                 >

//                                     Enquire Now

//                                     <ArrowUpRight
//                                         size={19}
//                                     />

//                                 </Link>

//                             </motion.div>

//                         </div>

//                     </motion.div>

//                 )}

//             </AnimatePresence>

//         </>

//     );

// };


// export default Navbar;


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

import logo from "../../assets/logos/salem-biotech-logo.png";

import "./Navbar.css";


const navLinks = [
    {
        label: "Home",
        section: "home",
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


const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [scrolled, setScrolled] =
        useState(false);

    const [menuOpen, setMenuOpen] =
        useState(false);

    const [activeSection, setActiveSection] =
        useState("home");


    /*
    ----------------------------------------
    SCROLL STATE
    ----------------------------------------
    */

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


    /*
    ----------------------------------------
    DETERMINE ACTIVE PAGE / SECTION
    ----------------------------------------
    */

    useEffect(() => {

        /*
        Product detail pages
        */

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


        /*
        Products listing page
        */

        if (
            location.pathname ===
            "/products"
        ) {

            setActiveSection(
                "products"
            );

            return;

        }


        /*
        Any other page
        */

        if (
            location.pathname !== "/"
        ) {

            setActiveSection(
                ""
            );

            return;

        }


        /*
        Homepage section detection
        */

        const sections = [
            "home",
            "products",
            "contact",
        ];


        const handleScroll = () => {

            const scrollPosition =
                window.scrollY +
                180;


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


            /*
            At the very top always show Home
            */

            if (
                window.scrollY <
                100
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


    /*
    ----------------------------------------
    CLOSE MOBILE MENU
    ----------------------------------------
    */

    const handleLinkClick = () => {

        setMenuOpen(false);

    };


    /*
    ----------------------------------------
    SECTION NAVIGATION
    ----------------------------------------
    */

    const handleSectionClick = (
        section
    ) => {

        setMenuOpen(false);


        /*
        If already on homepage,
        scroll directly.
        */

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


            /*
            Update browser URL
            */

            window.history.replaceState(
                null,
                "",
                `/#${section}`
            );


            /*
            Scroll smoothly
            */

            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });


            setActiveSection(
                section
            );


            return;

        }


        /*
        If on another page,
        go to homepage + section.
        */

        navigate(
            `/#${section}`
        );

    };


    /*
    ----------------------------------------
    HOME CLICK
    ----------------------------------------
    */

    const handleHomeClick = (
        event
    ) => {

        event.preventDefault();

        setMenuOpen(false);


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


        navigate("/");

    };


    /*
    ----------------------------------------
    RENDER
    ----------------------------------------
    */

    return (

        <>

            {/* =================================
                NAVBAR
            ================================= */}

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


                    {/* =========================
                        LOGO
                    ========================= */}

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



                    {/* =========================
                        DESKTOP NAVIGATION
                    ========================= */}

                    <nav className="navbar-links">

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

                                                if (
                                                    link.section ===
                                                    "home"
                                                ) {

                                                    handleHomeClick(
                                                        event
                                                    );

                                                    return;

                                                }


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



                    {/* =========================
                        CTA
                    ========================= */}

                    <motion.a
                        href="/#contact"

                        className="navbar-cta"

                        onClick={(event) => {

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

                        <ArrowUpRight
                            size={17}
                            strokeWidth={2}
                        />

                    </motion.a>



                    {/* =========================
                        MOBILE BUTTON
                    ========================= */}

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

                            <X size={24} />

                        ) : (

                            <Menu size={24} />

                        )}

                    </button>

                </div>

            </motion.header>



            {/* =================================
                MOBILE MENU
            ================================= */}

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

                                                    if (
                                                        link.section ===
                                                        "home"
                                                    ) {

                                                        handleHomeClick(
                                                            event
                                                        );

                                                        return;

                                                    }


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



                            {/* =====================
                                MOBILE CTA
                            ===================== */}

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

                                    <ArrowUpRight
                                        size={19}
                                    />

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