import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      <Navbar />

      <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 glow-text">
          Hi, I'm Mansi Raj
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-cyan-400">
          Full-Stack Developer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 font-light text-indigo-200">
          A detail-oriented Full-Stack Developer passionate about architecting scalable backend systems and high-performance web applications. I thrive on solving complex algorithmic challenges and am always ready to translate innovative ideas into production-ready solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-300 transition duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-full shadow-lg hover:bg-white/10 transition duration-300"
          >
            About Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1qYkxxg5Ynhho9HB7t8q5R13RzJ3Lb2U_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-full shadow-lg hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Resume
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;