import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import NFTGallery from "./components/NFTGallery";
import Roadmap from "./sections/Roadmap";
import Pokedex from "./sections/Pokedex";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <Loader onComplete={() => setIsLoading(false)} />;
    }

    return (
        <div className="bg-background min-h-screen">
            <Layout>
                <Navbar />
                <Hero />
                <About />
                <NFTGallery />
                <Roadmap />
                <Pokedex />
                <Contact />
                <Footer />
            </Layout>
        </div>
    );
}

export default App;
