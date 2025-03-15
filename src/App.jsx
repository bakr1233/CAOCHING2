import React from "react";
import { motion } from "framer-motion";
import "@fontsource/stalinist-one";
import "@fontsource/special-elite";
import "@fontsource/space-grotesk";
import "./styles.css";



const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="navbar"
        >
            <div className="text-xl font-bold flex items-center">
                <img src="/logo.png" alt="Coaching Logo" className="h-8 mr-2" />
                COACHING
            </div>
            <ul className="menu">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">COACH</a></li>
                <li><a href="#">SERVICES</a></li>
            </ul>
        </motion.nav>
    );
};

const SearchBar = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="search-bar"
            >
                <input
                    type="text"
                    placeholder="Start searching..."
                    className="search-input"
                />
                <img src="/search-icon.png" alt="Search" className="search-icon"/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="Search-shape"
            >
                <img
                    src="/Search-shape.png"
                    alt="Fitness Character"
                    className="Search-shape"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="shape"
            >
                <img
                    src="/diamond.png"
                    alt="Fitness Character"
                    className="shape"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="shape2"
            >
                <img
                    src="/polygon.png"
                    alt="Fitness Character"
                    className="shape2"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="shape3"
            >
                <img
                    src="/diamond.png"
                    alt="Fitness Character"
                    className="shape3"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="shape4"
            >
                <img
                    src="/polygon.png"
                    alt="Fitness Character"
                    className="shape4"
                />
            </motion.div>
        </div>
    );
};

const FitnessSection = () => {
    return (
        <section className="fitness-section">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-content"
            >
                <h1 className="fitness-title">FITNESS</h1>
                <p className="fitness-text">Welcome, Our website uses cutting-edge AI technology to analyze your sports movements with precision.
                    Whether you're an athlete looking to improve performance or a fitness enthusiast refining your technique,
                    our platform provides detailed insights and real-time feedback.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container"
            >
                <img
                    src="/character.png"
                    alt="Fitness Character"
                    className="fitness-image"
                />
            </motion.div>
        </section>
    );
};

const ChatButton = () => {
    return (
        <div>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="chat-button"
            >
                <img
                    src="/batman.png" // Path to your image
                    alt="Chat Icon"
                    className="chat-icon"
                />
            </motion.button>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="triangle-shape"
            >
                <img
                    src="/triangle.png"
                    alt="Shape"
                    className="triangle-shape"
                />
                <div className="chat-text">CHAT WITH US</div>
            </motion.div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <FitnessSection />
            <ChatButton />
        </div>
    );
};

export default App;