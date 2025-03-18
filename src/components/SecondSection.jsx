import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAIResponse } from '../services/openaiService';

const SecondSection = () => {
    // Chat state
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    
    // Video state
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [feedback, setFeedback] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [cameraActive, setCameraActive] = useState(false);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'video'

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = async () => {
        if (!question.trim()) return;
        
        setLoading(true);
        try {
            const response = await getAIResponse(question);
            setAnswer(response);
        } catch (error) {
            console.error('Error:', error);
            setAnswer('Sorry, there was an error processing your request.');
        } finally {
            setLoading(false);
        }
    };

    const startCamera = async () => {
        try {
            console.log("Starting camera...");
            setError('');
            
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error("Your browser doesn't support camera access");
            }
            
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { width: 640, height: 480 } 
            });
            
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.onloadedmetadata = () => {
                    videoRef.current.play();
                    setCameraActive(true);
                    console.log("Camera started successfully");
                };
            }
        } catch (err) {
            console.error("Error accessing camera:", err);
            setError(`Camera access error: ${err.message}`);
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
            setCameraActive(false);
            console.log("Camera stopped");
        }
    };

    const analyzePose = async () => {
        if (!videoRef.current || !cameraActive) {
            setError("Camera must be active to analyze pose");
            return;
        }

        try {
            setIsAnalyzing(true);
            setError('');
            console.log("Analyzing pose...");
            
            // Take a screenshot from the video
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            
            // Convert to base64 (optional - for visualization)
            // const screenshot = canvas.toDataURL('image/jpeg');
            
            // Simulate analysis with OpenAI
            const prompt = "I'm performing a fitness exercise. Based on form analysis, provide feedback on my technique, potential improvements, and injury prevention tips.";
            
            try {
                const response = await getAIResponse(prompt);
                setFeedback(response);
            } catch (error) {
                console.error('Error getting AI feedback:', error);
                setFeedback('Sorry, there was an error analyzing your form.');
            }
            
        } catch (err) {
            console.error("Error analyzing pose:", err);
            setError(`Analysis error: ${err.message}`);
        } finally {
            setIsAnalyzing(false);
        }
    };

    useEffect(() => {
        // Cleanup function to stop camera when component unmounts
        return () => {
            stopCamera();
        };
    }, []);

    return (
        <div id="chat-section" className="second-section">
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
                
                {/* Tab Navigation */}
                <div className="tab-navigation">
                    <button 
                        className={`tab-button ${activeTab === 'chat' ? 'active' : ''}`}
                        onClick={() => setActiveTab('chat')}
                    >
                        Chat with AI
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'video' ? 'active' : ''}`}
                        onClick={() => setActiveTab('video')}
                    >
                        Video Analysis
                    </button>
                </div>
            </motion.div>
            
            {/* Chat Interface */}
            {activeTab === 'chat' && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="question-bar"
                    >
                        <textarea
                            placeholder="What is your question about fitness?"
                            className="question-input"
                            value={question}
                            onChange={handleQuestionChange}
                        />
                        <div 
                            className="semi-circle"
                            onClick={handleSubmit}
                            style={{ cursor: 'pointer' }}
                        ></div>
                        <img 
                            src="/search-icon.png" 
                            alt="Search" 
                            className="question-icon" 
                            onClick={handleSubmit}
                            style={{ cursor: 'pointer' }}
                        />
                    </motion.div>
                    
                    {/* AI Response Section */}
                    {(loading || answer) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="ai-response-container"
                        >
                            {loading ? (
                                <p className="loading-text">Thinking...</p>
                            ) : (
                                <div className="ai-response">
                                    <h3>AI Coach Response:</h3>
                                    <p>{answer}</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </>
            )}
            
            {/* Video Analysis Interface */}
            {activeTab === 'video' && (
                <div className="video-container">
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="camera-feed"
                    />
                    <canvas ref={canvasRef} className="pose-canvas" />
                    
                    {error && <div className="error-message">{error}</div>}
                    
                    <div className="video-controls">
                        <button 
                            onClick={cameraActive ? stopCamera : startCamera}
                            className="start-camera-btn"
                        >
                            {cameraActive ? 'Stop Camera' : 'Start Camera'}
                        </button>
                        
                        <button
                            onClick={analyzePose}
                            className="analyze-btn"
                            disabled={isAnalyzing || !cameraActive}
                        >
                            {isAnalyzing ? 'Analyzing...' : 'Analyze Form'}
                        </button>
                    </div>
                    
                    {feedback && (
                        <div className="feedback-container">
                            <h3>AI Form Analysis:</h3>
                            <p>{feedback}</p>
                        </div>
                    )}
                </div>
            )}
            
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

export default SecondSection; 