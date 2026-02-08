import porcelainTilesImage from "../assets/porcelain-tiles.jpg";
import massiveSlabImage from "../assets/massive-slab.jpg";
import sanitaryImage from "../assets/Sanitaryware.jpg";
import africa from "../assets/Africa.png";
import albania from "../assets/Albania.png";
import algeria from "../assets/Algeria.png";
import australia from "../assets/Australia.png";
import bahrain from "../assets/Bahrain.png";
import belgium from "../assets/Belgium.png";
import guatemala from "../assets/Guatemala.png";
import iraq from "../assets/Iraq.png";
import ireland from "../assets/Ireland.png";
import israel from "../assets/Israel.png";
import kuwait from "../assets/Kuwait.png";
import lebanon from "../assets/Lebanon.png";
import libya from "../assets/Libya.png";
import malta from "../assets/Malta.png";
import mauritania from "../assets/Mauritania.png";
import palestine from "../assets/Palestine.png";
import peru from "../assets/Peru.png";
import poland from "../assets/Poland.png";
import romania from "../assets/Romania.png";
import spain from "../assets/Spain.png";
import switzerland from "../assets/switzerland.png";
import tunisia from "../assets/Tunisia.png";
import usa from "../assets/USA.png";
import yemen from "../assets/Yemen.png";

export const navLinks = [
    {
        id: "/",
        title: "HOME",
    },
    {
        id: "about",
        title: "ABOUT",
        dropdown: [
            {
                id: "companyProfile",
                title: "COMPANY PROFILE",
            },
            {
                id: "infrastructure",
                title: "INFRASTRUCTURE",
            },
            {
                id: "certificate",
                title: "CERTIFICATE",
            },
        ],
    },
    {
        id: "catalogue",
        title: "CATALOGUE",
    },
    {
        id: "technicalArea",
        title: "TECHNICAL AREA",
        dropdown: [
            {
                id: "packingDetails",
                title: "PACKAGING DETAILS",
            },
            {
                id: "tileCalculator",
                title: "TILE CALCULATOR",
            },
        ],
    },
    {
        id: "exports",
        title: "EXPORTS",
    },
    {
        id: "contactUs",
        title: "CONTACT US",
    },
    {
        id: "language",
        title: "EN",
        dropdown: [
            {
                id: "en",
                title: "English",
                language: 'en'
            },
            {
                id: "af",
                title: "Afrikaans",
                language: "af"
            },
            {
                id: "sw",
                title: "Swahili",
                language: "sw"
            },
            {
                id: "es",
                title: "Spanish",
                language: "es"
            },
            {
                id: "tr",
                title: "Turkish",
                language: "tr"
            },
            {
                id: "ara",
                title: "Arabic",
                language: "ara"
            },
            {
                id: "y",
                title: "Yiddish",
                language: "y"
            },

        ],
    },
];

export const normalProducts = [
    {
        id: 1,
        size: "60 X 60",
        thickness: "9",
        tilesPerBox: "4",
        sqMtrPerBox: "1.44",
        boxPerPallet: "44",
        palletPerContainer: "23",
        boxPerContainer: "1012",
        sqmPerContainer: "1457.28",
        approxWeight: "28000",
        tileType: ""
    },
    {
        id: 2,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "72",
        palletPerContainer: "10",
        boxPerContainer: "900",
        sqmPerContainer: "1296",
        approxWeight: "28000",
        tileType: ""
    },
    {
        id: 3,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "30",
        palletPerContainer: "6",
        boxPerContainer: "900",
        sqmPerContainer: "1296",
        approxWeight: "28000",
        tileType: ""
    },
    {
        id: 4,
        size: "80 X 80",
        thickness: "9",
        tilesPerBox: "3",
        sqMtrPerBox: "1.92",
        boxPerPallet: "34",
        palletPerContainer: "20",
        boxPerContainer: "680",
        sqmPerContainer: "1350.6",
        approxWeight: "28000",
        tileType: ""
    },
];

export const euroProducts = [
    {
        id: 1,
        size: "60 X 60",
        thickness: "9",
        tilesPerBox: "4",
        sqMtrPerBox: "1.44",
        boxPerPallet: "36",
        palletPerContainer: "24",
        boxPerContainer: "864",
        sqmPerContainer: "1244.16",
        approxWeight: "24200",
        tileType: ""
    },
    {
        id: 2,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "60",
        palletPerContainer: "10",
        boxPerContainer: "750",
        sqmPerContainer: "1080",
        approxWeight: "24000",
        tileType: ""
    },
    {
        id: 3,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "30",
        palletPerContainer: "5",
        boxPerContainer: "750",
        sqmPerContainer: "1080",
        approxWeight: "24000",
        tileType: ""
    },
];



const collectionItems = [
    {
        title: "PORCELAIN TILES",
        imageSrc: porcelainTilesImage,
        description: "Elegant | Durable | Versatile",
        sizes: [
            { name: "600 X 600 MM", link: "/catalogue" },
            { name: "800 X 800 MM", link: "example.com/size2" },
            { name: "600 X 1200 MM", link: "example.com/size3" }
        ]
    },
    {
        title: "MASSIVE SLAB",
        imageSrc: massiveSlabImage,
        description: "Bold | Seamless | Impressive",
        sizes: [
            { name: "800 X 1600 MM", link: "example.com/size4" },
            { name: "1200 X 1200 MM", link: "example.com/size5" },
            { name: "1200 X 2400 MM", link: "example.com/size6" },
            { name: "800 X 2400 MM", link: "example.com/size7" },
            { name: "800 X 3000 MM", link: "example.com/size8" }
        ]
    },
    {
        title: "SANITARY WARE",
        imageSrc: sanitaryImage,
        description: "Pristine | Luxurious | Hygienic",
        sizes: [
            { name: "Wash Basin", link: "example.com/size9" },
            { name: "Water Closet", link: "example.com/size10" },
            { name: "Pan", link: "example.com/size11" },
            { name: "Accessories", link: "example.com/size12" }
        ]
    }
];


export const catalogue = [
    {
        category: "Artstone",
        type: "Carving",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1xh72JBcy2y3wXAXByxJK6E_qtkCq_Eq7/view?usp=drive_link",

    },

    {
        category: "Artstone Design",
        type: "Carving",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/14anfJrvPztS4UmigQ8ud1Foe19krs1Lc/view?usp=drive_link",

    },

    {
        category: "Pigmento",
        type: "Matt",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1ioVouj7vpexOk_vljFLyUtJVn7UfxBBe/view?usp=drive_link",

    },
    {
        category: "Mudbox",
        type: "Matt",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/16tnNcIipKWzNPiEyJyY7dGWDOlEmGYdF/view?usp=drive_link",

    },
    {
        category: "Glossy",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1eaV3VECUlJc9VovxJ1g3wWBARU9qIRSk/view?usp=drive_link",

    },
    {
        category: "Wanderlust",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1ifI403YIX6JzFOJBxcMBOlJ-SPKbjEtr/view?usp=drive_link",

    },
    {
        category: "Light-Dark",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1JuhshBo3lY-Yfk9e6XvPPvKLMcBFAztD/view?usp=drive_link",

    },
    {
        category: "Eternity Endless",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1p9S0gk38greAvZdD-gkcsxq4gtkaqV3j/view?usp=drive_link",

    },
    {
        category: "Wood Collection",
        type: "Wood",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1R2LxD_lAVbeww2pmgosXGmN9JouI4KpV/view?usp=drive_link",

    },
    {
        category: "Wood Collection",
        type: "Wood",
        size: "20 X 120 MM",
        link: "https://drive.google.com/file/d/1BBYujiVbQxy0Wk1U23ZWAe6b1pHqIOW3/view?usp=drive_link",

    },
    {
        category: "Sanitary Ware",
        type: "Sanitary",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1HwSzugbIJ_yqMuaMZvjAVjLtAlLIllzA/view?usp=drive_link",

    }
];


export const flagsData = [
    { name: "Africa", image: africa },
    { name: "Alabania", image: albania },
    { name: "Algeria", image: algeria },
    { name: "Australia", image: australia },
    { name: "Bahrain", image: bahrain },
    { name: "Belgium", image: belgium },
    { name: "Guatemala", image: guatemala },
    { name: "Iraq", image: iraq },
    { name: "Ireland", image: ireland },
    { name: "Israel", image: israel },
    { name: "Kuwait", image: kuwait },
    { name: "Lebanon", image: lebanon },
    { name: "Libya", image: libya },
    { name: "Malta", image: malta },
    { name: "Mauritania", image: mauritania },
    { name: "Palestine", image: palestine },
    { name: "Peru", image: peru },
    { name: "Poland", image: poland },
    { name: "Romania", image: romania },
    { name: "Spain", image: spain },
    { name: "Switzerland", image: switzerland },
    { name: "Tunisia", image: tunisia },
    { name: "USA", image: usa },
    { name: "Yemen", image: yemen },
];


export default collectionItems;
export { porcelainTilesImage, massiveSlabImage, sanitaryImage };

