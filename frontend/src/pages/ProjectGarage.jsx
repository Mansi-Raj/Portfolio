import React from 'react';
import NavBar from '../components/NavBar';

const ProjectGarage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white p-8 font-sans relative overflow-hidden">
            <div className="pt-14">
                <NavBar />
            </div>
            
            <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

            <div className="relative z-10 max-w-6xl mx-auto space-y-20">
                <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">Project Portfolio</h1>

                {/* Major Projects Section */}
                <section>
                    <h2 className="text-3xl text-green-300 mb-8 text-center border-b border-gray-700 pb-2">Featured Applications</h2>
                    <div className="space-y-8">
                        <ProjectCard
                            title="StudyMate(AI Study Assistant)"
                            role="Full Stack Developer"
                            link="https://github.com/Mansi-Raj/StudyMate"
                            details={[
                                "Architected StudyMate, a full-stack educational platform, seamlessly integrating a Spring Boot RESTful API with a responsive Angular front end.",
                                "Developed a core messaging module with dedicated chat controllers, services, and repositories to efficiently handle real-time user communication.",
                                "Containerized the application with Docker and Docker Compose, reducing local deployment time and ensuring 100% environment consistency."
                            ]}
                            tools="Java, Spring Boot, Maven, Angular, TypeScript, Tailwind CSS, Docker, Docker Compose."
                        />
                        <ProjectCard
                            title="Amazon Clone (Full Stack)"
                            role="Full Stack Developer"
                            link="https://github.com/Mansi-Raj/amazon-clone"
                            details={[
                                "Architected a highly responsive e-commerce platform with a decoupled client-server architecture.",
                                "Implemented a secure backend API using Spring Boot, handling token-based authentication (JWT) and persistent data management via MySQL.",
                                "Designed a modern, adaptive frontend using React 19 and React Router, utilizing Axios for seamless API communication and real-time state updates."
                            ]}
                            tools="React, Vite, Java, Spring Boot, MySQL, Spring Data JPA, JWT, REST API"
                        />
                        <ProjectCard
                            title="Personal Expense Tracker"
                            role="Full Stack Developer"
                            link="https://github.com/Mansi-Raj/ExpenseTracker"
                            details={[
                                "Built a comprehensive, decoupled expense tracking platform featuring a responsive client interface and a secure RESTful API server.",
                                "Implemented a secure Java/Spring Boot backend to handle complex financial logic, user data isolation, and dynamic PDF report generation using the OpenPDF library.",
                                "Developed an intuitive dashboard utilizing React-Chartjs-2 to analyze spending habits and Tailwind CSS to ensure a 100% adaptive layout across all devices."
                            ]}
                            tools="React, Tailwind CSS, Java, Spring Boot, Spring Data JPA, MySQL, JWT, OpenPDF, Chart.js"
                        />
                        <ProjectCard
                            title="2D Image-to-3D Model Renderer"
                            role="Python Developer (Group Project)"
                            link="https://github.com/Mansi-Raj/2d-image-to-3d-model"
                            details={[
                                "Created a depth-mapping algorithm converting grayscale images to precise 3D meshes using numpy-stl.",
                                "Utilized computational geometry for adaptive meshes and optimized triangulation.",
                                "Achieved efficient processing overhead reduction through memory-efficient data pipelines."
                            ]}
                            tools="Python, NumPy, Pillow, numpy-stl"
                        />
                    </div>
                </section>

                {/* Small Projects & Mini Apps Section */}
                <section>
                    <h2 className="text-3xl text-yellow-300 mt-16 mb-8 text-center border-b border-gray-700 pb-2">Small Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        <SmallProjectCard 
                            title="Weather App"
                            desc="A responsive weather application that fetches and displays live, real-time weather data from an external API."
                            link="https://github.com/Mansi-Raj/Weather-app"
                            demo="https://mansi-raj.github.io/Weather-app/"
                            tools="HTML, CSS, JavaScript"
                        />

                        <SmallProjectCard 
                            title="Automated SEO Report Generator"
                            desc="A Python-based backend tool that fetches SEO performance metrics from a MySQL database and compiles them into multi-page PDF reports."
                            link="https://github.com/Mansi-Raj/SEO-Report-Automation"
                            tools="Python, MySQL"
                        />

                        <SmallProjectCard 
                            title="Tic-Tac-Toe"
                            desc="A classic, interactive Tic-Tac-Toe web game featuring a responsive grid and win-state detection."
                            link="https://github.com/Mansi-Raj/Tic-Tac-Toe"
                            demo="https://mansi-raj.github.io/Tic-Tac-Toe/"
                            tools="HTML, CSS, JavaScript"
                        />

                        <SmallProjectCard 
                            title="Amazon Clone UI"
                            desc="A frontend-only e-commerce interface featuring dynamic cart calculations, delivery options, and interactive product grids."
                            link="https://github.com/Mansi-Raj/javascript"
                            tools="JS, HTML, CSS"
                        />

                        <SmallProjectCard 
                            title="Interactive To-Do List"
                            desc="A dynamic to-do list application featuring seamless DOM manipulation, add/delete functionality, and data tracking."
                            link="https://github.com/Mansi-Raj/javascript"
                            tools="JS, HTML, CSS"
                        />

                        <SmallProjectCard 
                            title="Rock Paper Scissors"
                            desc="An interactive browser-based game with automatic score tracking and persistent data storage using LocalStorage."
                            link="https://github.com/Mansi-Raj/javascript"
                            tools="JS, HTML, CSS"
                        />

                    </div>
                </section>
            </div>
        </div>
    );
};

// Component for Major Projects
const ProjectCard = ({ title, role, link, demo, details, tools }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition space-y-4">
            <div>
                <h3 className="text-2xl font-bold text-cyan-300">{title}</h3>
                <p className="italic text-gray-400">{role}</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                {details.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                ))}
            </ul>
            <p className="text-sm font-mono text-green-300 mt-4 bg-black/30 p-2 rounded inline-block">
                Tech Stack: {tools}
            </p>
            <div className="mt-6 flex space-x-4">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition"
                    >
                        View Source
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-400 transition"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

// Component for Small Projects
const SmallProjectCard = ({ title, desc, link, demo, tools }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition flex flex-col h-full">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
            <p className="text-gray-400 text-sm flex-grow mb-4">{desc}</p>
            <p className="text-xs font-mono text-green-300 mb-4 bg-black/30 p-2 rounded block">
                Tech: {tools}
            </p>
            <div className="mt-auto flex space-x-3">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1.5 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition"
                    >
                        Code
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1.5 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-400 transition"
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectGarage;