import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Package,
  Droplets,
  Scale,
  ShieldCheck,
} from "lucide-react";

import growMegImage from "../../assets/products/grow-meg.png";

import "./GrowMeg.css";

const ease = [0.22, 1, 0.36, 1];

const benefits = [
  "Increased blood cell levels",
  "Increased plasma proteins levels",
  "Higher selenium muscle content",
  "Optimized immune performance",
  "Supports higher growth rate",
  "Improve better FCR",
  "Relive stress and maintain good pigmentation",
];

const GrowMeg = () => {
  return (
    <main className="grow-meg-page">

      {/* =========================================
          PRODUCT HERO
      ========================================= */}

      <section className="grow-meg-hero">

        <div className="grow-meg-hero-bg" />

        <div className="grow-meg-container">

          <motion.a
            href="/#products"
            className="grow-meg-back"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <ArrowLeft size={17} />
            <span>BACK TO PRODUCTS</span>
          </motion.a>

          <div className="grow-meg-hero-grid">

            {/* LEFT */}
            <motion.div
              className="grow-meg-hero-content"
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease,
              }}
            >

              <div className="grow-meg-eyebrow">
                <span>01</span>
                <i />
                <span>IMMUNE BOOSTER</span>
              </div>

              <h1>
                Grow
                <br />
                <span>Meg</span>
              </h1>

              <p className="grow-meg-hero-description">
                A nutritional formulation designed to support
                the growth, health and survival of shrimp and
                other aquatic animals.
              </p>

              <div className="grow-meg-hero-meta">

                <div>
                  <span>PRODUCT TYPE</span>
                  <strong>IMMUNE BOOSTER</strong>
                </div>

                <div>
                  <span>NET WEIGHT</span>
                  <strong>500 GRAM</strong>
                </div>

              </div>

            </motion.div>


            {/* RIGHT PRODUCT IMAGE */}
            <motion.div
              className="grow-meg-product-visual"
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.94,
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

              <div
                className="grow-meg-image-backdrop"
                style={{
                  backgroundImage: `url(${growMegImage})`,
                }}
              />

              <div className="grow-meg-image-overlay" />

              <motion.img
                src={growMegImage}
                alt="Grow Meg immune booster"
                className="grow-meg-product-image"
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.4,
                  delay: 0.3,
                  ease,
                }}
              />

              <div className="grow-meg-image-number">
                01
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================
          PRODUCT INTRODUCTION
      ========================================= */}

      <section className="grow-meg-introduction">

        <div className="grow-meg-container">

          <div className="grow-meg-section-label">
            <span>01</span>
            <span>PRODUCT OVERVIEW</span>
          </div>

          <div className="grow-meg-introduction-grid">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease }}
            >
              Nutrition that
              <br />
              supports <span>better shrimp.</span>
            </motion.h2>

            <motion.div
              className="grow-meg-introduction-copy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease,
              }}
            >
              <p>
                Vitamins, amino acids, and essential minerals are
                crucial nutrients that support the growth, health,
                and survival of shrimp and other aquatic animals.
              </p>

              <p>
                Vitamins regulate metabolic processes, immunity,
                and tissue development, with water-soluble vitamins
                requiring regular dietary supply to prevent
                deficiencies.
              </p>

              <p>
                Vitamin C, is especially important for collagen
                formation, healing, and antioxidant protection.
                Trace minerals such as iron, zinc, copper,
                manganese, and selenium act as enzyme cofactors
                and structural components in the body.
              </p>

              <p>
                Since minerals absorbed from water are not
                sufficient, supplementation through aquafeed is
                necessary to ensure proper growth, metabolism,
                and productivity in aquaculture.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================
          BENEFITS
      ========================================= */}

      <section className="grow-meg-benefits">

        <div className="grow-meg-container">

          <div className="grow-meg-section-label light">
            <span>02</span>
            <span>BENEFITS</span>
          </div>

          <div className="grow-meg-benefits-heading">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease }}
            >
              Built around
              <br />
              <span>shrimp health.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease,
              }}
            >
              Grow Meg combines essential nutritional
              components to support shrimp health,
              growth and performance.
            </motion.p>

          </div>


          <div className="grow-meg-benefits-list">

            {benefits.map((benefit, index) => (

              <motion.div
                className="grow-meg-benefit"
                key={benefit}
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
                  duration: 0.65,
                  delay: index * 0.06,
                  ease,
                }}
              >

                <div className="grow-meg-benefit-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="grow-meg-benefit-icon">
                  <Check size={17} />
                </div>

                <p>{benefit}</p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================
          APPLICATION / DOSAGE / STORAGE
      ========================================= */}

      <section className="grow-meg-usage">

        <div className="grow-meg-container">

          <div className="grow-meg-section-label">
            <span>03</span>
            <span>PRODUCT DETAILS</span>
          </div>

          <div className="grow-meg-usage-grid">

            {/* APPLICATION */}

            <motion.article
              className="grow-meg-detail-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease }}
            >

              <div className="grow-meg-detail-icon">
                <Droplets size={23} />
              </div>

              <span className="grow-meg-detail-label">
                APPLICATION
              </span>

              <h3>How to apply</h3>

              <p>
                Take 10 grams of GROW MEG with 100 ml of
                water and stir well to form a fine gel.
              </p>

            </motion.article>


            {/* DOSAGE */}

            <motion.article
              className="grow-meg-detail-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease,
              }}
            >

              <div className="grow-meg-detail-icon">
                <Scale size={23} />
              </div>

              <span className="grow-meg-detail-label">
                DOSAGE
              </span>

              <h3>10 gms</h3>

              <p>
                10 gms per kg feed.
              </p>

            </motion.article>


            {/* STORAGE */}

            <motion.article
              className="grow-meg-detail-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease,
              }}
            >

              <div className="grow-meg-detail-icon">
                <Package size={23} />
              </div>

              <span className="grow-meg-detail-label">
                STORAGE
              </span>

              <h3>Cool &amp; dark</h3>

              <p>
                Store in a cool and dark place.
              </p>

            </motion.article>


            {/* NET WEIGHT */}

            <motion.article
              className="grow-meg-detail-card grow-meg-weight-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease,
              }}
            >

              <div className="grow-meg-detail-icon">
                <ShieldCheck size={23} />
              </div>

              <span className="grow-meg-detail-label">
                NET WEIGHT
              </span>

              <h3>500 gram</h3>

              <p>
                Product pack size.
              </p>

            </motion.article>

          </div>
        </div>
      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="grow-meg-cta">

        <div className="grow-meg-container">

          <motion.div
            className="grow-meg-cta-inner"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.9, ease }}
          >

            <div>
              <span>SALEM BIOTECH SERVICE</span>

              <h2>
                Explore the next
                <br />
                <strong>aquaculture solution.</strong>
              </h2>
            </div>

            <a
              href="/#products"
              className="grow-meg-next-button"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowUpRight size={19} />
            </a>

          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default GrowMeg;