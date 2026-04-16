import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white px-6 pt-24 pb-16 font-sans relative overflow-hidden">
            <NavBar />
            
            <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

            <div className="relative z-10 max-w-5xl mx-auto space-y-20">

                <section className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I’m Mansi Raj</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        I am a detail-oriented Full-Stack Developer passionate about architecting scalable backend systems and high-performance web applications. I thrive on solving complex algorithmic challenges and am always ready to translate innovative ideas into production-ready solutions.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0">
                        <Link to="/skills">
                            <button className="w-48 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-900 text-white text-lg flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:from-red-600 hover:to-red-800 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:scale-105 transform transition-all duration-300 cursor-pointer relative overflow-hidden group px-4">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                                My Skills
                            </button>
                        </Link>

                        <Link to="/projects">
                            <button className="w-48 h-16 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white text-lg flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:from-blue-600 hover:to-blue-800 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:scale-105 transform transition-all duration-300 cursor-pointer relative overflow-hidden group px-4">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                                My Projects
                            </button>
                        </Link>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-center text-cyan-400">Education</h2>
                    <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition">
                            <h3 className="text-xl font-bold">Chandigarh University</h3>
                            <p className="text-cyan-300">Bachelor of Engineering in Computer Science & Engineering</p>
                            <p className="text-gray-400">Mohali, Punjab | 2021 – 2025</p>
                            <p className="text-gray-300 mt-2">Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, SDLC (Agile).</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition">
                            <h3 className="text-xl font-bold">Jawahar Navodaya Vidyalaya</h3>
                            <p className="text-cyan-300">Senior Secondary School (AISSCE) - Pure Science (PCM)</p>
                            <p className="text-gray-400">Deoghar, Jharkhand | 2019 – 2020</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition">
                            <h3 className="text-xl font-bold">Jawahar Navodaya Vidyalaya</h3>
                            <p className="text-cyan-300">Secondary School (AISSE)</p>
                            <p className="text-gray-400">Deoghar, Jharkhand | 2017 – 2018</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-center text-cyan-400">Achievements</h2>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 space-y-4 text-gray-300">
                        <div className="flex items-start">
                            <span className="text-cyan-400 mr-2">▹</span>
                            <p><strong>LeetCode Contest Rating:</strong> 1626 (Top percentile in Algorithmic Problem Solving).</p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-cyan-400 mr-2">▹</span>
                            <p><strong>Certificate of Excellence:</strong> Awarded for top 5% performance in Soft Skills by Chandigarh University.</p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-cyan-400 mr-2">▹</span>
                            <p><strong>Leadership:</strong> Served as School House Captain (2018-2019), leading student teams and organizing events.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;