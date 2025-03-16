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
            <hr className="horizontal-line" />
        </div>
    );
};

const SecondSection = () => {
    return (
        <div className="second-section">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-content"
            >
                <h1 className="chat-title">Chat with</h1>
                <p className="chat-info">
                    AI Advising Coach – Ensuring Client Satisfaction & Answering All Your Training Questions!
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="question-bar"
            >
                <textarea
                    placeholder="What is your question about fitness?"
                    className="question-input"
                />
                <img src="/search-icon.png" alt="Search" className="question-icon" />
                <div className="semi-circle"></div> {/* Semi-circle element */}
            </motion.div>
            {/* Original Images */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="phone-container"
            >
                <img
                    src="/phone.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 top-shape1"
            >
                <img
                    src="/top-shape1.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 outer"
            >
                <img
                    src="/outer.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 inner"
            >
                <img
                    src="/inner.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 top-shape3"
            >
                <img
                    src="/top-shape3.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 middle-shape"
            >
                <img
                    src="/middle-shape.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 bottom-shape1"
            >
                <img
                    src="/bottom-shape1.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 bottom-shape2"
            >
                <img
                    src="/bottom-shape2.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="top-shape11"
            >
                <img
                    src="/top-shape1.png"
                    alt="Fitness Character"
                    className="top-shape11"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="outer1"
            >
                <img
                    src="/outer.png"
                    alt="Fitness Character"
                    className="outer1"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="inner1"
            >
                <img
                    src="/inner.png"
                    alt="Fitness Character"
                    className="inner1"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="top-shape31"
            >
                <img
                    src="/top-shape3.png"
                    alt="Fitness Character"
                    className="top-shape31"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="middle-shape1"
            >
                <img
                    src="/middle-shape.png"
                    alt="Fitness Character"
                    className="middle-shape1"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bottom-shape11"
            >
                <img
                    src="/bottom-shape1.png"
                    alt="Fitness Character"
                    className="bottom-shape11"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bottom-shape21"
            >
                <img
                    src="/bottom-shape2.png"
                    alt="Fitness Character"
                    className="bottom-shape21"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="underline"
            >
                <img
                    src="/underline.png"
                    alt="Fitness Character"
                    className="underline"
                />
            </motion.div>
            <hr className="horizontal2-line" />
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="underline1"
            >
                <img
                    src="/underline.png"
                    alt="Fitness Character"
                    className="underline1"
                />
            </motion.div>

        </div>
    );
};
const ThirdSection = () => {
    return (
        <div className="third-section">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-content"
            >
                <h1 className="chat-title">Live with</h1>
                <p className="chat-info">
                AI Advising Coach – Get Real-Time AI Feedback to Prevent Injuries & Maximize Performance!
                </p>
            </motion.div>
            {/* Original Images */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 top-shape1"
            >
                <img
                    src="/top-shape1.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 outer"
            >
                <img
                    src="/outer.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 inner"
            >
                <img
                    src="/inner.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 top-shape3"
            >
                <img
                    src="/top-shape3.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 middle-shape"
            >
                <img
                    src="/middle-shape.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 bottom-shape1"
            >
                <img
                    src="/bottom-shape1.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="image-container1 bottom-shape2"
            >
                <img
                    src="/bottom-shape2.png"
                    alt="Fitness Character"
                    className=""
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="top-shape11"
            >
                <img
                    src="/top-shape1.png"
                    alt="Fitness Character"
                    className="top-shape11"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="outer1"
            >
                <img
                    src="/outer.png"
                    alt="Fitness Character"
                    className="outer1"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="inner1"
            >
                <img
                    src="/inner.png"
                    alt="Fitness Character"
                    className="inner1"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="top-shape31"
            >
                <img
                    src="/top-shape3.png"
                    alt="Fitness Character"
                    className="top-shape31"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="middle-shape1"
            >
                <img
                    src="/middle-shape.png"
                    alt="Fitness Character"
                    className="middle-shape1"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bottom-shape11"
            >
                <img
                    src="/bottom-shape1.png"
                    alt="Fitness Character"
                    className="bottom-shape11"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bottom-shape21"
            >
                <img
                    src="/bottom-shape2.png"
                    alt="Fitness Character"
                    className="bottom-shape21"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="question1-bar"
            >
                <textarea
                    placeholder="Feedback about your performance"
                    className="question1-input"
                />
                <img
                    src="/video-design.png"
                    alt="Fitness Character"
                    className="video-design"
                />
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
            <SecondSection />
            <ThirdSection />
        </div>
    );
};

export default App;