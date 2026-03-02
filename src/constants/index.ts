import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";

export const NAV_LINKS = [
    { label: "Overview", href: "#hero" },
    { label: "Strategy", href: "#about" },
    { label: "Genesis", href: "#gallery" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Protocol", href: "#pokedex" },
];

export const STATS = [
    { label: "Total Asset Supply", value: "9,999", suffix: "UNITS" },
    { label: "Market Floor", value: "0.45", suffix: "ETH" },
    { label: "Active Holders", value: "4.2K", suffix: "WALLETS" },
];

export const PIKA_DATA = [
    {
        id: 1,
        name: "Aegis Pika V1",
        rarity: "Tier 1",
        type: "Electric / High-Voltage",
        stats: { velocity: 95, security: 80, integrity: 120 },
        image: nft1,
        description: "The primary asset class for the Pika ecosystem, designed for high-frequency data validation.",
    },
    {
        id: 2,
        name: "Lumina Pika V2",
        rarity: "Tier 2",
        type: "Electric / Optic",
        stats: { velocity: 85, security: 70, integrity: 110 },
        image: nft2,
        description: "Specialized for low-latency network nodes within the Neon protocol layers.",
    },
    {
        id: 3,
        name: "Titan Pika V3",
        rarity: "Tier 3",
        type: "Electric / Reinforced",
        stats: { velocity: 110, security: 100, integrity: 80 },
        image: nft3,
        description: "Engineered for maximum resilience during cross-chain liquidity events.",
    },
];

export const ROADMAP_STEPS = [
    {
        stage: "Phase 1",
        title: "Genesis Minting",
        description: "Initial distribution of 9,999 Pika assets to early adopters and contributors.",
        status: "Completed",
    },
    {
        stage: "Phase 2",
        title: "Protocol Integration",
        description: "Expansion of utility through the Pokedex interface and governance token distribution.",
        status: "In Progress",
    },
    {
        stage: "Phase 3",
        title: "Ecosystem Expansion",
        description: "Deployment of cross-chain compatibility and strategic partnerships for ecosystem growth.",
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
