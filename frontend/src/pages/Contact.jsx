import React from 'react';
import NavBar from '../components/NavBar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white px-6 py-12 relative overflow-hidden">
            <div className="pt-14">
                <NavBar />
            </div>
            
            <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 z-0" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                <h1 className="text-5xl font-bold text-center text-cyan-400">Contact Me</h1>
                <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
                   Whether you're looking to collaborate on an innovative project, discuss scalable architectures, or explore how my technical expertise can drive value for your engineering team, my inbox is always open. Let's connect!
                </p>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    <a
                        href="mailto:mansi.raj.jnv@gmail.com"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:bg-white/20 transition"
                    >
                        <h2 className="text-xl font-semibold">✉️ Email</h2>
                        <p className="mt-2 text-gray-300 text-sm">mansi.raj.jnv@gmail.com</p>
                    </a>
                    <a
                        href="tel:+919508402657"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:bg-white/20 transition"
                    >
                        <h2 className="text-xl font-semibold">📞 Phone</h2>
                        <p className="mt-2 text-gray-300 text-sm">+91-9508402657</p>
                    </a>
                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:bg-white/20 transition">
                        <h2 className="text-xl font-semibold">📍 Location</h2>
                        <p className="mt-2 text-gray-300 text-sm">Deoghar, Jharkhand, India</p>
                    </div>
                    
                    <a
                        href="https://www.linkedin.com/in/mansiraj01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:bg-white/20 transition flex flex-col items-center"
                    >
                        <h2 className="inline-flex items-center text-xl font-semibold gap-2">
                            <FaLinkedin className="w-6 h-6 text-blue-500" /> LinkedIn
                        </h2>
                        <p className="mt-2 text-gray-300 text-sm">/in/mansiraj01</p>
                    </a>
                    <a
                        href="https://github.com/Mansi-Raj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:bg-white/20 transition flex flex-col items-center"
                    >
                        <h2 className="inline-flex items-center text-xl font-semibold gap-2">
                            <FaGithub className="w-6 h-6" /> GitHub
                        </h2>
                        <p className="mt-2 text-gray-300 text-sm">/Mansi-Raj</p>
                    </a>
                    <a
                        href="https://leetcode.com/MansiRaj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:bg-white/20 transition flex flex-col items-center"
                    >
                        <h2 className="inline-flex items-center text-xl font-semibold gap-2">
                            <SiLeetcode className="w-6 h-6 text-yellow-500" /> LeetCode
                        </h2>
                        <p className="mt-2 text-gray-300 text-sm">/MansiRaj</p>
                    </a>
                </section>

                <section className="pt-8">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-cyan-400">Send a Message</h2>
                    <form
                        action="https://formspree.io/f/mgvklzgq"
                        method="POST"
                        className="space-y-4 max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700"
                    >
                        <label className="block">
                            <span className="text-white">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-1 block w-full p-3 bg-black/50 border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition"
                            />
                        </label>
                        <label className="block">
                            <span className="text-white">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-1 block w-full p-3 bg-black/50 border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition"
                            />
                        </label>
                        <label className="block">
                            <span className="text-white">Message</span>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                className="mt-1 block w-full p-3 bg-black/50 border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition"
                            />
                        </label>
                        <button
                            type="submit"
                            className="w-full py-4 mt-4 bg-cyan-500 hover:bg-cyan-400 rounded-md text-black font-bold text-lg transition shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;