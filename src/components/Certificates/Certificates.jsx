import {
    useEffect,
    useRef,
    useState
} from "react";

import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    X,
    ShieldCheck,
} from "lucide-react";

import certificate1 from "../../assets/certificates/1.jpeg";
import certificate2 from "../../assets/certificates/2.jpeg";
import certificate3 from "../../assets/certificates/3.jpeg";
import certificate4 from "../../assets/certificates/4.jpeg";

import "./Certificates.css";


/* =========================================================
   CERTIFICATE DATA
========================================================= */

const certificates = [

    {
        id: 1,

        title: "ZOOCLEAR",

        category: "Chemical",

        image: certificate1,

        description:
            "Certificate of Compliance for Antibiotic-Free Aquaculture Inputs.",
    },


    {
        id: 2,

        title: "HERCULES TC",

        category: "Feed Additive",

        image: certificate2,

        description:
            "Certificate of Compliance for Antibiotic-Free Aquaculture Inputs.",
    },


    {
        id: 3,

        title: "PRO LIFE",

        category: "Probiotic",

        image: certificate3,

        description:
            "Certificate of Compliance for Antibiotic-Free Aquaculture Inputs.",
    },


    {
        id: 4,

        title: "AMMOCURE",

        category: "Chemical",

        image: certificate4,

        description:
            "Certificate of Compliance for Antibiotic-Free Aquaculture Inputs.",
    },

];


/* =========================================================
   COMPONENT
========================================================= */

const Certificates = () => {

    const [activeCertificate, setActiveCertificate] =
        useState(null);


    const certificatesSectionRef =
        useRef(null);


    /* =====================================================
       SCROLL REVEAL
       REPLAYS EVERY TIME SECTION ENTERS VIEWPORT
    ===================================================== */

    useEffect(() => {

        const section =
            certificatesSectionRef.current;


        if (!section) {
            return;
        }


        const animatedElements =
            section.querySelectorAll(
                ".certificate-reveal"
            );


        /*
         * Browser does not support
         * IntersectionObserver.
         *
         * Simply show everything.
         */

        if (
            !("IntersectionObserver" in window)
        ) {

            animatedElements.forEach(
                (element) => {

                    element.classList.add(
                        "certificate-visible"
                    );

                }
            );

            return;

        }


        /* =================================================
           INTERSECTION OBSERVER
        ================================================= */

        const observer =
            new IntersectionObserver(

                ([entry]) => {

                    /*
                     * =========================================
                     * SECTION ENTERED VIEWPORT
                     * =========================================
                     */

                    if (
                        entry.isIntersecting
                    ) {

                        /*
                         * Reset animation first.
                         */

                        animatedElements.forEach(
                            (element) => {

                                element.classList.remove(
                                    "certificate-visible"
                                );

                            }
                        );


                        /*
                         * Force browser reflow.
                         *
                         * This is important because it
                         * allows the CSS transition to
                         * restart every time.
                         */

                        void section.offsetWidth;


                        /*
                         * Start animation again.
                         */

                        animatedElements.forEach(
                            (element) => {

                                element.classList.add(
                                    "certificate-visible"
                                );

                            }
                        );

                    }


                    /*
                     * =========================================
                     * SECTION LEFT VIEWPORT
                     * =========================================
                     */

                    else {

                        /*
                         * Remove the visible class.
                         *
                         * The next time the section enters
                         * the viewport, the animation will
                         * start from the beginning.
                         */

                        animatedElements.forEach(
                            (element) => {

                                element.classList.remove(
                                    "certificate-visible"
                                );

                            }
                        );

                    }

                },

                {
                    /*
                     * Start when 15% of the Certificates
                     * section is visible.
                     */

                    threshold: 0.15,

                    /*
                     * Trigger slightly before the
                     * section reaches the bottom.
                     */

                    rootMargin:
                        "0px 0px -80px 0px",
                }

            );


        observer.observe(
            section
        );


        /* =================================================
           CLEANUP
        ================================================= */

        return () => {

            observer.disconnect();

        };

    }, []);


    /* =====================================================
       OPEN CERTIFICATE
    ===================================================== */

    const openCertificate = (
        certificate
    ) => {

        setActiveCertificate(
            certificate
        );


        document.body.style.overflow =
            "hidden";

    };


    /* =====================================================
       CLOSE CERTIFICATE
    ===================================================== */

    const closeCertificate = () => {

        setActiveCertificate(
            null
        );


        document.body.style.overflow =
            "";

    };


    /* =====================================================
       NEXT CERTIFICATE
    ===================================================== */

    const showNext = () => {

        if (!activeCertificate) {
            return;
        }


        const currentIndex =
            certificates.findIndex(
                (certificate) =>
                    certificate.id ===
                    activeCertificate.id
            );


        const nextIndex =
            (
                currentIndex + 1
            ) %
            certificates.length;


        setActiveCertificate(
            certificates[nextIndex]
        );

    };


    /* =====================================================
       PREVIOUS CERTIFICATE
    ===================================================== */

    const showPrevious = () => {

        if (!activeCertificate) {
            return;
        }


        const currentIndex =
            certificates.findIndex(
                (certificate) =>
                    certificate.id ===
                    activeCertificate.id
            );


        const previousIndex =
            (
                currentIndex -
                1 +
                certificates.length
            ) %
            certificates.length;


        setActiveCertificate(
            certificates[previousIndex]
        );

    };


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    useEffect(() => {

        if (!activeCertificate) {

            document.body.style.overflow =
                "";

            return;

        }


        const handleKeyDown = (
            event
        ) => {

            switch (event.key) {

                case "Escape":

                    closeCertificate();

                    break;


                case "ArrowRight":

                    showNext();

                    break;


                case "ArrowLeft":

                    showPrevious();

                    break;


                default:

                    break;

            }

        };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [activeCertificate]);


    /* =====================================================
       CLEANUP BODY SCROLL
    ===================================================== */

    useEffect(() => {

        return () => {

            document.body.style.overflow =
                "";

        };

    }, []);


    /* =====================================================
       CARD KEYBOARD HANDLER
    ===================================================== */

    const handleCardKeyDown = (
        event,
        certificate
    ) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();


            openCertificate(
                certificate
            );

        }

    };


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <section
            ref={certificatesSectionRef}
            id="certificates"
            className="certificates-section"
        >

            <div className="certificates-container">


                {/* =================================================
                    HEADER
                ================================================= */}

                <header
                    className="
                        certificates-header
                        certificate-reveal
                    "
                >

                    <div className="certificates-kicker">

                        <span>
                            02
                        </span>

                        <i />

                        <span>
                            CERTIFICATIONS
                        </span>

                    </div>


                    <div className="certificates-heading-wrap">

                        <div>

                            <h2>

                                Certified for

                                <br />

                                <span>
                                    better aquaculture.
                                </span>

                            </h2>

                        </div>


                        <p>

                            Our aquaculture products are
                            supported by certification and
                            compliance documentation for
                            antibiotic-free aquaculture inputs.

                        </p>

                    </div>

                </header>


                {/* =================================================
                    CERTIFICATE GRID
                ================================================= */}

                <div className="certificates-grid">

                    {certificates.map(
                        (
                            certificate,
                            index
                        ) => (

                            <article
                                key={
                                    certificate.id
                                }

                                className="
                                    certificate-card
                                    certificate-reveal
                                "

                                style={{
                                    "--certificate-delay":
                                        `${index * 110}ms`,
                                }}

                                role="button"

                                tabIndex={0}

                                onClick={() =>
                                    openCertificate(
                                        certificate
                                    )
                                }

                                onKeyDown={(
                                    event
                                ) =>
                                    handleCardKeyDown(
                                        event,
                                        certificate
                                    )
                                }

                                aria-label={
                                    `View ${certificate.title} certificate`
                                }
                            >


                                {/* =================================
                                    CERTIFICATE IMAGE
                                ================================== */}

                                <div className="certificate-image">

                                    <img
                                        src={
                                            certificate.image
                                        }

                                        alt={
                                            `${certificate.title} certificate`
                                        }

                                        loading={
                                            index === 0
                                                ? "eager"
                                                : "lazy"
                                        }
                                    />


                                    {/* =============================
                                        VIEW OVERLAY
                                    ============================== */}

                                    <div className="certificate-overlay">

                                        <span>
                                            VIEW CERTIFICATE
                                        </span>


                                        <div className="certificate-view-icon">

                                            <ArrowUpRight
                                                size={18}
                                            />

                                        </div>

                                    </div>

                                </div>


                                {/* =================================
                                    CERTIFICATE INFORMATION
                                ================================== */}

                                <div className="certificate-info">

                                    <div className="certificate-info-main">

                                        <span className="certificate-number">

                                            0
                                            {certificate.id}

                                        </span>


                                        <div>

                                            <h3>
                                                {
                                                    certificate.title
                                                }
                                            </h3>


                                            <p>
                                                {
                                                    certificate.category
                                                }
                                            </p>

                                        </div>

                                    </div>


                                    <ShieldCheck
                                        className="certificate-shield"
                                        size={20}
                                        strokeWidth={1.8}
                                    />

                                </div>

                            </article>

                        )
                    )}

                </div>


                {/* =================================================
                    AUTHORITY FOOTER
                ================================================= */}

                <div
                    className="
                        certificates-footer
                        certificate-reveal
                    "
                >

                    <span>
                        COASTAL AQUACULTURE AUTHORITY
                    </span>


                    <span>
                        GOVERNMENT OF INDIA
                    </span>

                </div>

            </div>


            {/* =====================================================
                CERTIFICATE MODAL
            ===================================================== */}

            {activeCertificate && (

                <div
                    className="certificate-modal"

                    role="dialog"

                    aria-modal="true"

                    aria-label={
                        `${activeCertificate.title} certificate viewer`
                    }

                    onMouseDown={(
                        event
                    ) => {

                        /*
                         * Close only when clicking
                         * the dark backdrop.
                         */

                        if (
                            event.target ===
                            event.currentTarget
                        ) {

                            closeCertificate();

                        }

                    }}
                >


                    {/* =============================================
                        CLOSE BUTTON
                    ============================================== */}

                    <button
                        type="button"

                        className="certificate-modal-close"

                        onClick={
                            closeCertificate
                        }

                        aria-label="Close certificate viewer"
                    >

                        <X
                            size={22}
                        />

                    </button>


                    {/* =============================================
                        PREVIOUS BUTTON
                    ============================================== */}

                    <button
                        type="button"

                        className="
                            certificate-modal-nav
                            certificate-modal-prev
                        "

                        onClick={
                            showPrevious
                        }

                        aria-label="Previous certificate"
                    >

                        <ChevronLeft
                            size={27}
                        />

                    </button>


                    {/* =============================================
                        MODAL CONTENT
                    ============================================== */}

                    <div className="certificate-modal-content">


                        {/* =========================================
                            MODAL TOP
                        ========================================== */}

                        <div className="certificate-modal-top">

                            <div>

                                <span>
                                    CERTIFICATE
                                </span>


                                <h3>
                                    {
                                        activeCertificate.title
                                    }
                                </h3>

                            </div>


                            <span className="certificate-modal-category">

                                {
                                    activeCertificate.category
                                }

                            </span>

                        </div>


                        {/* =========================================
                            CERTIFICATE IMAGE
                        ========================================== */}

                        <div className="certificate-modal-image">

                            <img
                                src={
                                    activeCertificate.image
                                }

                                alt={
                                    `${activeCertificate.title} certificate`
                                }
                            />

                        </div>


                        {/* =========================================
                            MODAL BOTTOM
                        ========================================== */}

                        <div className="certificate-modal-bottom">

                            <span>

                                {
                                    activeCertificate.description
                                }

                            </span>


                            <span>

                                {
                                    certificates.findIndex(
                                        (certificate) =>
                                            certificate.id ===
                                            activeCertificate.id
                                    ) + 1
                                }

                                {" / "}

                                {
                                    certificates.length
                                }

                            </span>

                        </div>

                    </div>


                    {/* =============================================
                        NEXT BUTTON
                    ============================================== */}

                    <button
                        type="button"

                        className="
                            certificate-modal-nav
                            certificate-modal-next
                        "

                        onClick={
                            showNext
                        }

                        aria-label="Next certificate"
                    >

                        <ChevronRight
                            size={27}
                        />

                    </button>

                </div>

            )}

        </section>

    );

};


export default Certificates;