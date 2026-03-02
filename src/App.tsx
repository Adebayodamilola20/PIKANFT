import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./sections/About";
import NFTGallery from "./components/NFTGallery";
import Roadmap from "./sections/Roadmap";
import Pokedex from "./sections/Pokedex";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="bg-background min-h-screen">
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <Loader key="loader" onComplete={() => setIsLoading(false)} />
                ) : (
                    <Layout key="main">
                        <Navbar />
                        <Hero />
                        <StatsBar />
                        <About />
                        <NFTGallery />
                        <Roadmap />
                        <Pokedex />
                        <Contact />
                        <Footer />
                    </Layout>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
