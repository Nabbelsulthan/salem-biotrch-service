// import growMegImage from "../assets/products/Grow-meg.png";
// import growCImage from "../assets/products/grow-c.png";
// import oxyFreshImage from "../assets/products/oxyfresh.png";
// import softMaxImage from "../assets/products/soft-max.png";
// import biocideImage from "../assets/products/biocide.png";
// import ammoCureImage from "../assets/products/ammocure.jpeg";
// import zooClearImage from "../assets/products/zoo-clear.png";
// import proLifeImage from "../assets/products/prolife.jpeg";
// import herculesTCImage from "../assets/products/hercules-tc.jpeg";
// import zoogillImage from "../assets/products/zoo-gill.png";
// import heptoGutImage from "../assets/products/heptogut.png";


import growMegImage from "../assets/products/Grow-meg.png";
import growCImage from "../assets/products/grow-c.png";
import oxyFreshImage from "../assets/products/oxyfresh.png";
import softMaxImage from "../assets/products/Soft-max.png";
import biocideImage from "../assets/products/biocide.png";
import ammoCureImage from "../assets/products/ammocure.jpeg";
import zooClearImage from "../assets/products/zoo-clear.png";
import proLifeImage from "../assets/products/prolife.jpeg";
import herculesTCImage from "../assets/products/hercules-tc.png";
import zoogillImage from "../assets/products/zoo-gill.png";
import heptoGutImage from "../assets/products/heptogut.png";


export const products = {

    /* =========================================================
       01 — GROW MEG
       ========================================================= */

    "grow-meg": {

        number: "01",

        name: "Grow Meg",

        category: "IMMUNE BOOSTER",

        image: growMegImage,

        heroDescription:
            "Nutritional support for shrimp growth, health and survival.",

        description: `
      Vitamins, amino acids, and essential minerals are crucial
      nutrients that support the growth, health, and survival of
      shrimp and other aquatic animals. Vitamins regulate metabolic
      processes, immunity, and tissue development, with water-soluble
      vitamins requiring regular dietary supply to prevent deficiencies.
    `,

        descriptionExtra: `
      Vitamin C, is especially important for collagen formation,
      healing, and antioxidant protection. Trace minerals such as
      iron, zinc, copper, manganese, and selenium act as enzyme
      cofactors and structural components in the body. Since minerals
      absorbed from water are not sufficient, supplementation through
      aquafeed is necessary to ensure proper growth, metabolism,
      and productivity in aquaculture.
    `,

        benefits: [

            "Increased blood cell levels",

            "Increased plasma proteins levels",

            "Higher selenium muscle content",

            "Optimized immune performance",

            "Supports higher growth rate",

            "Improve better FCR",

            "Relive stress and maintain good pigmentation",

        ],

        application: `
      Take 10 grams of GROW MEG with 100 ml of water
      and stir well to form a fine gel.
    `,

        dosage:
            "10 gms per kg feed",

        storage:
            "Store in a cool and dark place",

        netWeight:
            "500 gram",
    },


    /* =========================================================
       02 — GROW C
       ========================================================= */

    "grow-c": {

        number: "02",

        name: "Grow C",

        category: "MAKE A HEALTHY SHRIMP",

        image: growCImage,

        heroDescription:
            "Vitamin C support for shrimp growth, immunity and development.",

        description: `
    Vitamin C is a water-soluble vitamin essential for the growth, tissue repair, and immune
    function of shrimp. Since shrimp cannot synthesize or store vitamin C, it must be supplied
    regularly through feed to prevent deficiencies. It acts as an antioxidant, supports enzyme
    activity, reduces stress, and helps protect cells from damage caused by free radicals.
    Vitamin C is commonly provided in aquafeeds as ascorbic acid or other ascorbate forms, all
    of which are effective in maintaining shrimp health and development.
  `,

        benefits: [

            "Vitamin-C supplementation enhanced the antioxidant status and immune response",

            "Vitamin-C supplementation improved the liver histoarchitecture and intestinal histomorphology",

            "Improves FCR",

            "Improves the growth rate",

        ],

        ingredients: `
    Natural bio resins, rich source of Vitamin C
  `,

        dosage: `
    Take 10 gms Grow C, mix with 100 ml of water,
    and stir well until gel formation, then add per 1 kg of feed.
  `,

        storage: `
    Store in a cool and dark place
  `,

        netWeight:
            "500 gram",
    },


    // oxy-fresh

    "oxy-fresh": {
        number: "03",
        name: "Oxy Fresh",
        category: "IMPROVE MORE OXYGEN",
        image: oxyFreshImage,

        heroDescription:
            "Improves dissolved oxygen levels and supports better pond water quality.",

        description: `
    Dissolved oxygen (DO) in natural waters comes from the atmosphere and photosynthesis.
    Oxygen enters water mainly through surface agitation, since diffusion alone is very slow and
    contributes little. Photosynthesis adds oxygen, but only in areas where light penetrates.
    Oxygen levels vary daily and seasonally, often peaking in the afternoon and dropping early in
    the morning, sometimes close to zero in plankton-rich waters. DO concentration is very
    important for assessing water quality.
  `,

        descriptionExtra: `
    In shallow, warm, plankton-rich waters, oxygen can be completely depleted. Other factors
    such as decomposition of organic matter, aquatic organisms, and gases like carbon dioxide,
    methane, ammonia, and hydrogen sulfide also reduce oxygen levels. Oxidation of iron and
    inflow of low-oxygen water can further decrease dissolved oxygen.
  `,

        benefits: [
            "Improving water quality",
            "Reduces BOD and COD",
            "Removes sludge",
            "Reducing toxic gases",
        ],

        application: `
    1 kgs per acre depends upon the condition of pond
    environment Mix with dry sand and spread
    throughout the pond evenly
  `,

        netWeight: "4 kgs",
    },




    // soft-max

    "softmax": {
        number: "04",
        name: "SoftMAX",
        category: "MOST POWERFUL SOFTENER",
        image: softMaxImage,

        heroDescription:
            "EDTA-based water treatment chemical used to remove heavy metals from ponds.",

        description: `
    EDTA is a water treatment chemical used in aquaculture to remove heavy metals from
    ponds. It works by chelating (binding) metal ions, preventing them from harming aquatic
    organisms. When used properly and according to regulations, EDTA is safe and helps
    maintain a healthy pond environment.
  `,

        descriptionExtra: `
    However, its use must be carefully controlled and monitored, as overuse or improper
    application can negatively affect the aquatic ecosystem and product safety.
  `,

        heavyMetalCauses: [
            "Unstable growth of plankton",
            "Low survival rate during stocking of Post Larva due to external fouling problems",
            "Yellow gill in shrimp",
            "Always encounter plankton collapse",
            "Large accumulation of sludge in pond",
        ],

        benefits: [
            "Softened water hardness",
            "Eliminate heavy metals",
            "Induce moulting",
            "Maintaining pond environment condition",
        ],

        application: `
    2 kgs per acre depends upon the condition of pond
    environment Mix with dry sand and spread
    throughout the pond evenly
  `,

        netWeight: "3 kgs",
    },


    // biocide


    "biocide": {
        number: "05",
        name: "Biocide",
        category: "CONTROL DISEASE OUTBREAK",
        image: biocideImage,

        heroDescription:
            "Helps prevent and control pathogenic bacteria, viruses, and algal toxins in shrimp grow-out systems.",

        description: `
    Mycobacteriosis and algal toxins are significant diseases in aquaculture due
    to their chronic nature and limited treatment options. Diseases in aquatic
    systems can be infectious (caused by pathogens) or noninfectious (due
    to genetics, environment, or nutrition), with higher risks in pond conditions.

    Biocide products made from natural ingredients help prevent and
    control pathogenic bacteria, viruses, and algal toxins in shrimp
    grow-out systems. Viral outbreaks may also be linked to
    secondary infections and harmful algae such as
    dinoflagellates and blue-green algae, which produce toxic waste.

    When applied in preventive doses, biocide can control disease outbreaks, improve
    feed intake, and reduce heavy water blooms without harming host organisms.
  `,

        benefits: [
            "Control vibrio and virus outbreak",
            "Reducing algal toxins",
            "Improves feed intakes",
            "Reduce thick bloom to mild bloom",
        ],

        application: `
    500 gms per acre for preventing doses Incase of disease
    spreading surrounding your pond you may apply 200 gms
    to 300 gms per acre for consecutive
  `,

        netWeight: "500 gms",
    },


    // ammo-cure



    "ammocure": {
        number: "06",
        name: "AmmoCure",
        category: "REDUCING AMMONIA & NITRITE",
        image: ammoCureImage,

        heroDescription:
            "A blend of natural ingredients designed to rapidly reduce ammonia and nitrite levels in aquaculture systems.",

        description: `
    AMMOCURE is a blend of natural ingredients designed to rapidly reduce ammonia and
    nitrite levels in aquaculture systems. Compared to other products, AMMOCURE works
    quickly to remove harmful ammonia and nitrite within minutes.

    Ammonia (NH3) is a compound of nitrogen and hydrogen. In aquaculture ponds, high
    ammonia levels can develop due to overfeeding, overcrowding, and poor pond management.
    Total ammonia consists of un-ionized ammonia (NH3) and ionized ammonium (NHa).
    At higher pH levels, NH3 becomes highly toxic to aquatic animals, causing reduced
    survival and internal organ damage in shrimp.

    AMMOCURE supports the natural nitrogen cycle by reducing ammonia and nitrite
    while promoting the growth of beneficial bacteria. These bacteria convert toxic
    ammonia into nitrite and then into less harmful nitrate, helping maintain a healthier
    pond environment.
  `,

        benefits: [
            "Reducing Ammonia and nitrite rapidly very instantly",
            "Reduce BOD & COD",
            "Improves survival, growth & FCR",
            "Reduce toxic gases",
        ],

        dosage: `
    300 gms to 500 gms per acre on the pond condition.
  `,

        application: `
    Mix with dry sand and broadcasting throughout the pond.
    Consult your aquaculture expert depends upon your
    pond condition.
  `,

        netWeight: "500 gram",
    },


    // zoo-clear

    "zoo-clear": {
        number: "07",
        name: "ZOO Clear",
        category: "CLEAR ZOOTHAMNIUM",
        image: zooClearImage,

        heroDescription:
            "Biological treatment for external protozoan attachments in shrimp aquaculture.",

        description: `
    ZOO CLEAR is biological treatment for external attachment like zoothomnium, Verticello,
    Epistylis and Acineta. It is complete biochemical and contains no flourin compound. Now a
    days protozoa attachments commonly found on Monodon species. These protozoan where
    mostly found at gills, swimming legs and surface of the animal body. It will affect animal
    health totally. It can some times effect the growth of shrimp as well.

    ZOO CLEAR is work as well as good and eradicate the attachment of protozoa. In the mean
    while it will not affect the animal and stress because it is a natural biochemical product.
  `,

        application: `
    Use 300 ml to 500ml per acreTake required quantity of ZOO CLEAR with 40 Litres of pond
    water and apply throughout the entire pond.

    Application time: After 12 PM
  `,

        storage: `
    Store in a cool and dark place temperature should be 30 degree Celsius below
  `,
    },


    // pro-life



    "prolife": {

        number: "08",
        name: "PROLife",
        category: "EXTEND YOUR POND LIFE",
        image: proLifeImage,

        heroDescription:
            "Beneficial microorganisms that support water quality, nutrition, and shrimp health.",

        description: `
    PROBIOTICS are beneficial microorganism which can protect organism against pathogens
    or enhance their growth. Probiotics are usually produced through the process of isolation
    cultivation and fermentation. Certain probiotics have the ability to inhibit the growth of
    pathogenic bacteria. Moriarty determined the ability of bacillus spp. to decrease the
    proportion of vibrio spp. In our shrimp ponds, especially in sediments. Same probiotics ability
    to stimulate appetite, improve absorption of Nutrition and strengthen the host immune system.

    The probiotic treatment may be considers as technique of biological manage and recalled as
    "BIOCONTROL" which indicates the drawback or the removal of pests by the introduction of
    unfavourable organisms. Such as parasites or definite pathogens. BIOCONTROL comprises
    barely that the strains are opposed to pathogens.
  `,

        benefits: [
            "Improvement of water quality",
            "Reduces BOD & COD",
            "Improves FCR",
            "Enzymatic environment to digestion",
            "Communication with phytoplankton",
        ],

        application: `
    300 to 500 grams per acre mix with 50 Litres of pond water
    and broadcast throughout the entire Pond (please follow our
    traditional application -mix probiotic with yeast and soak for 2 hours
  `,

        ingredients: `
    Ingredients - product count 10x10° cfu/gram

    Bacillus megaterium
    Bacillus subtilis
    Bacillus licheniformis
    Marinobacter
  `,

        netWeight: "500 gram",
    },



    // hercules-tc


    "hercules-tc": {
        number: "09",
        name: "Hercules TC",
        category: "MAKE A SHRIMP STRONG",
        image: herculesTCImage,

        heroDescription:
            "Supports shrimp health by controlling harmful algal blooms, improving water quality, and reducing stress.",

        description: `
    Shrimp farming faces major challenges like stress, poor growth, and disease. Excessive
    plankton growth, known as algal bloom, can be harmful. Some algae, such as cyanobacteria
    (blue-green algae), dinoflagellates, and diatoms, produce toxins like microcystins and
    domoic acid that damage shrimp health.

    These harmful algal blooms (HAB) reduce water quality and weaken shrimp, making them
    vulnerable to serious diseases like WSSV, EMS, and RMS.

    HERCULES TC effectively controls HAB, improves water quality, supports shrimp nutrition,
    and helps prevent secondary infections, promoting healthier growth.
  `,

        benefits: [
            "Hercules TC improve the food intake of shrimp & stress conditions",
            "Hercules TC will eradicate all kinds of toxins like microcystins, domoic acid",
            "Hercules TC completely prevents the shrimp from spreading disease and will prevent any infection coming to our pond in the vicinity",
            "Hercules TC apply once in a week, shrimp will be very healthy and keep away from the stress condition",
            "It regular application of Hercules TC will rapidly decreasing the development of pathogenic algae like blue green algae, dinoflagellates and diatoms",
            "Hercules TC reduces gut infection of shrimp and improve more activity of feed intake",
        ],

        dosage: `
    Pond preparation: 50 kgs per acre to apply throughout
    the pond bottom.

    During culture: Apply 5 kgs per acre for once in a week
    till harvest Consult your technical consultant or professional
    based on your pond condition
  `,

        netWeight: "5 kgs",
    },



    // zoo-gill

    "zoo-gill": {
        number: "10",
        name: "ZOO Gill",
        category: "REDUCE GILL INFECTION",
        image: zoogillImage,

        heroDescription:
            "A specialized solution introduced to help bring brown and black gill conditions under control.",

        description: `
    Generally, in aquaculture whether dealing with Vannamei or Tiger shrimp brown and black
    gill conditions occur.

    Black gill disease in shrimp is a condition characterized by brown or black discoloration of
    the gills caused by immune-driven melanization (pigment production) in response to stressors,
    pathogens, or environmental toxins. It frequently causes reduced growth, severe respiratory
    distress, and mass mortality in high-density aquaculture, often triggered by poor water
    quality and fungi.

    The disease is generally caused by environmental stressors, including high levels of ammonia,
    nitrite, and heavy metals. Fungal infections and parasitic ciliatare primary biotic causes.
    This infection leading to severe respiratory issues and high mortality rates in affected
    populations.

    Our ZOOGILL product is a specialized solution specifically introduced to
    bring this under control.
  `,

        application: `
    If black gill or brown gill resist take 500 gms granules per acre spread all over the pond.
    Consult your technical expert based on your pond condition
  `,

        benefits: [
            "Reduce black gill or brown gill gradually",
            "It can be use for rid of primary zoothamnium attachment instead of harmful chemicals",
            "Improve feed consumption ratio",
        ],

        storage: `
    Storage at a cool and dark room,
    temperature should be 25°© not exceed
  `,

        netWeight: "500 gram",
    },



    // hepto-gut

    "hepto-gut": {
        number: "11",
        name: "Hepto Gut",
        category: "IMPROVE GUT HEALTH",
        image: heptoGutImage,

        heroDescription:
            "Shrimp gut probiotics designed to support intestinal microbial balance, immunity, and nutrient absorption.",

        description: `
    Shrimp gut probiotics are live, beneficial microorganisms supplemented in feed or water to
    improve intestinal microbial balance, boost immunity, and enhance nutrient absorption.
    They function as safe, eco-friendly alternatives to antibiotics, preventing disease by inhibiting
    pathogens like Vibrio while accelerating growth rates.

    Pathogens like Vibrio, Photobacterium, and Candidatus Bacilliplasma are grow in the intestines,
    they will severely affect the animal's health.

    This infection leading to severe respiratory issues and high mortality rates in affected
    populations.

    A balanced gut microbiota is vital for shrimp health, while dysbiosis-often involving increased
    Vibrio or Photobacterium is heavily linked to diseases such as white feces syndrome and
    increased mortality.

    The gut diversity is generally lower than the surrounding water, indicating selective,
    host-specific colonization.

    Modulating the gut microbiota through probiotics is a promising strategy to improve growth
    and prevent disease, acting as an alternative to antibiotics.
  `,

        benefits: [
            "Contains specific species create antimicrobial content for gut pathogens, it's reduce the population and multiplication of pathogens",
            "Improving the feed intake randomly",
            "Protect gut from various infection rapidly",
            "It helps to growth improvment of animal",
        ],

        dosage: `
    Take 5 gms /kg feed mix with good binder for regular condition

    Incase of gut affected take 10gms/kg feed

    Consult your technical expert based on your pond condition
  `,

        storage: `
    Storage at a cool and dark room,
    temperature should be 25°© not exceed
  `,

        netWeight: "500 gram",
    },
};


export default products;