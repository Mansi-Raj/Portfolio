import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const skillCategories = {
    'Languages & Problem Solving': [
        { name: 'Java', description: 'Core & Advance Java for robust backend systems.' },
        { name: 'DSA', description: 'Strong grasp of Data Structures and Algorithms for optimized coding.' },
        { name: 'Python', description: 'Basic scripting and data manipulation.' },
        { name: 'JavaScript', description: 'Dynamic behavior and logic for interactive web applications.' }
    ],
    'Backend & APIs': [
        { name: 'Spring Boot', description: 'Building secure, production-grade REST APIs.' },
        { name: 'JDBC', description: 'Java Database Connectivity for efficient database communication.' },
        { name: 'RESTful APIs', description: 'Designing scalable APIs using RESTful principles.' },
        { name: 'Microservices', description: 'Architecting decoupled, highly available backend environments.' },
        { name: 'Maven', description: 'Project management and dependency resolution.' }
    ],
    'Frontend Web Development': [
        { name: 'React.js', description: 'Component-based frontend framework for building dynamic UIs.' },
        { name: 'HTML5', description: 'Standard markup for structuring web pages.' },
        { name: 'CSS3', description: 'Styling the web with responsive and adaptive designs.' }
    ],
    'Databases & Cloud': [
        { name: 'MySQL', description: 'Relational DB management and optimization.' },
        { name: 'AWS', description: 'Cloud infrastructure using EC2, S3, RDS, and IAM.' },
        { name: 'Git & GitHub', description: 'Version control system for tracking code changes collaboratively.' }
    ],
    'Interpersonal Skills': [
        { name: 'Analytical Problem Solving', description: 'Breaking down complex technical challenges.' },
        { name: 'Teamwork', description: 'Collaborative mindset for efficient group development.' },
        { name: 'Adaptability', description: 'Quick learner who adjusts fast to new frameworks and tools.' }
    ]
};

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 overflow-hidden">
            <div className="pt-14">
                <NavBar />
            </div>
            
            <div
                className="absolute inset-0 bg-[url('/textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none"
            />

            <div className="relative z-10 max-w-6xl mx-auto space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400">
                    Technical Toolkit
                </h1>

                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="space-y-4">
                        <h2 className="text-2xl text-indigo-300 border-b border-gray-700 pb-2">{category}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="relative bg-white/10 p-4 rounded-lg border border-gray-700 shadow-md cursor-pointer hover:bg-cyan-900/20 hover:border-cyan-400 transition duration-300"
                                    onMouseEnter={() => setActiveSkill(skill)}
                                    onMouseLeave={() => setActiveSkill(null)}
                                >
                                    <p className="text-lg font-semibold text-center">{skill.name}</p>
                                    {activeSkill?.name === skill.name && (
                                        <div className="relative w-full flex justify-center">
                                            <div className="absolute z-20 top-full left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-gray-800 p-3 rounded-md border border-cyan-400 shadow-xl text-sm text-cyan-200 break-words overflow-hidden">
                                                {skill.description}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;