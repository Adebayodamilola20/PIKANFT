import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";

export const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Collection", href: "#gallery" },
    { label: "Evolution", href: "#roadmap" },
    { label: "Pokedex", href: "#pokedex" },
];

export const STATS = [
    { label: "Total Supply", value: "9,999", suffix: "PIKAS" },
    { label: "Floor Price", value: "0.45", suffix: "ETH" },
    { label: "Holders", value: "4.2K", suffix: "USERS" },
];

export const PIKA_DATA = [
    {
        id: 1,
        name: "Cyber Pika #001",
        rarity: "Legendary",
        type: "Electric/Cyber",
        stats: { attack: 95, defense: 80, speed: 120 },
        image: nft1, // Placeholder, will use generated images later
        description: "The first generation of cyber-enhanced Pikas. Built for high-speed data transmission.",
    },
    {
        id: 2,
        name: "Neon Pika #042",
        rarity: "Epic",
        type: "Electric/Neon",
        stats: { attack: 85, defense: 70, speed: 110 },
        image: nft2,
        description: "Enhanced with neon lighting for stealth operations in the dark city streets.",
    },
    {
        id: 3,
        name: "Mecha Pika #133",
        rarity: "Rare",
        type: "Electric/Steel",
        stats: { attack: 110, defense: 100, speed: 80 },
        image: nft3,
        description: "A heavy-duty Pika armored with reinforced steel plating for frontline battles.",
    },
];

export const ROADMAP_STEPS = [
    {
        stage: "Stage 1",
        title: "The Awakening",
        description: "Initial release of 9,999 PikaNFTs. Community formation and initial drop.",
        status: "Completed",
    },
    {
        stage: "Stage 2",
        title: "Evolution Protocol",
        description: "Launch of the Pokedex and breeding mechanics. Evolve your PikaNFT into more powerful forms.",
        status: "In Progress",
    },
    {
        stage: "Stage 3",
        title: "Battle Arena",
        description: "Competitive P2E battle arena launch. Cross-chain integration and global tournaments.",
        status: "Future",
    },
];

export const ABOUT_CARDS = [
    {
        title: "Digital Handheld Logic",
        description: "Every Pika is a unique piece of digital history, living on the blockchain.",
        icon: "Layout",
    },
    {
        title: "Evolutionary Design",
        description: "Our NFTs evolve based on community interaction and battle outcomes.",
        icon: "Layers",
    },
    {
        title: "Community Driven",
        description: "The Pika-Community decides the future of the ecosystem through DAO voting.",
        icon: "Users",
    },
];
