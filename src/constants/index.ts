import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import pj1 from "@/assets/pj1.png";
import pj2 from "@/assets/pj2.png";
import pj3 from "@/assets/png3.png";

export const NAV_LINKS = [
    { label: "Overview", href: "#hero" },
    { label: "Strategy", href: "#about" },
    { label: "Genesis", href: "#gallery" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Protocol", href: "#pokedex" },
];

export const STATS = [
    { label: "Total Asset Supply", value: "⚡ Limited pikas", suffix: "" },
    { label: "Market Floor", value: "⚡️ Mint Details Soon", suffix: "" },
    { label: "Join the Spark ⚡️", value: "Every Pika holder becomes part of something special. 💛", suffix: "" },
];

export const PIKA_DATA = [
    {
        id: 1,
        name: "Pika ",
        rarity: "Tier 1",
        type: "Electric / High-Voltage",
        stats: { velocity: 95, security: 80, integrity: 120 },
        image: pj1,
        description: "The primary asset class for the Pika ecosystem, designed for high-frequency data validation.",
    },
    {
        id: 2,
        name: "Piku",
        rarity: "Tier 2",
        type: "Electric / Optic",
        stats: { velocity: 85, security: 70, integrity: 110 },
        image: pj2,
        description: "Specialized for low-latency network nodes within the Neon protocol layers.",
    },
    {
        id: 3,
        name: " Piki",
        rarity: "Tier 3",
        type: "Electric / Reinforced",
        stats: { velocity: 110, security: 100, integrity: 80 },
        image: pj3,
        description: "Engineered for maximum resilience during cross-chain liquidity events.",
    },
];

export const ROADMAP_STEPS = [
    {
        stage: "Phase 1",
        title: "The Spark",
        description: "Launch the Genesis collection, build and welcome our early community, gather feedback from holders, and improve the website & mint experience.",
        status: "Completed",
    },
    {
        stage: "Phase 2",
        title: "Grow Together",
        description: "Community events & fun challenges, holder-only perks (digital access & surprises), behind-the-scenes development updates, and collaborations with small creators.",
        status: "In Progress",
    },
    {
        stage: "Phase 3",
        title: "Evolve Responsibly",
        description: "Evaluate long-term sustainability, explore partnerships that align with the brand, continue improving utility based on community input, and provide transparent updates on progress & challenges.",
        status: "Future",
    },
];

export const ABOUT_CARDS = [
    {
        title: "On-Chain Probity",
        description: "Every Pika asset is verified on the blockchain, ensuring absolute scarcity and ownership.",
        icon: "Shield",
    },
    {
        title: "Adaptive Utility",
        description: "Assets are designed to integrate with future protocol modules and governance structures.",
        icon: "Layers",
    },
    {
        title: "Governance Driven",
        description: "Strategic decisions are governed by the collective community through decentralized voting.",
        icon: "Target",
    },
];
