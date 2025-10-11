import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
    // Ref for the main section to get its dimensions
    const sectionRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    
    // Refs for each card to be observed for animation
    const cardRefs = useRef([]);

    // Effect for handling resize and setting dimensions
    useEffect(() => {
        const updateDimensions = () => {
            if (sectionRef.current) {
                const { offsetWidth, offsetHeight } = sectionRef.current;
                setDimensions({ width: offsetWidth, height: offsetHeight });
            }
        };

        updateDimensions(); // Set initial dimensions
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    // Effect for handling animations
    useEffect(() => {
        const header = document.getElementById('skills-header');
        
        // --- Animate header on load ---
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(-20px)';
            header.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            setTimeout(() => {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }, 100);
        }

        // --- Animated Counter Function ---
        const animateCounter = (element) => {
            const target = parseInt(element.dataset.target, 10);
            if (isNaN(target) || target === 0) {
                element.innerText = (target || 0) + '%';
                return;
            };
             
            let current = 0;
            const duration = 1500; // ms
            const stepTime = Math.abs(Math.floor(duration / target));

            const timer = setInterval(() => {
                current += 1;
                element.innerText = current + '%';
                if (current === target) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        // --- Intersection Observer for scroll animations ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    const counters = entry.target.querySelectorAll('.skill-percentage');
                    counters.forEach(counter => {
                       if (!counter.classList.contains('animated')) {
                            animateCounter(counter);
                            counter.classList.add('animated');
                       }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Observe each card that has a ref
        cardRefs.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        // Cleanup observer on component unmount
        return () => {
            cardRefs.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    return (
        <section className="text-white min-h-screen antialiased" ref={sectionRef}>
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <header className="text-center mb-12" id="skills-header">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Technical <span className="text-indigo-400">Expertise</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: Languages & Databases */}
                    <div className="glass-card rounded-2xl p-6" ref={addToRefs}>
                        <div className="flex items-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            <h3 className="text-xl font-semibold text-gray-100">Languages & Databases</h3>
                        </div>
                        <div className="space-y-5">
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Java</span><span className="text-sm font-medium text-indigo-400 skill-percentage" data-target="95">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '95%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">SQL</span><span className="text-sm font-medium text-indigo-400 skill-percentage" data-target="92">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '92%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">HTML/CSS</span><span className="text-sm font-medium text-indigo-400 skill-percentage" data-target="88">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '88%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Technologies & Frameworks */}
                    <div className="glass-card rounded-2xl p-6" ref={addToRefs}>
                         <div className="flex items-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fuchsia-400"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                            <h3 className="text-xl font-semibold text-gray-100">Technologies & Frameworks</h3>
                        </div>
                        <div className="space-y-5">
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Spring Boot</span><span className="text-sm font-medium text-fuchsia-400 skill-percentage" data-target="92">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '92%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Angular</span><span className="text-sm font-medium text-fuchsia-400 skill-percentage" data-target="88">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '88%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Microservices</span><span className="text-sm font-medium text-fuchsia-400 skill-percentage" data-target="90">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '90%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">REST APIs</span><span className="text-sm font-medium text-fuchsia-400 skill-percentage" data-target="92">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '92%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Core Concepts */}
                    <div className="glass-card rounded-2xl p-6" ref={addToRefs}>
                        <div className="flex items-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M11 16s3-2 3-5-1-4-3-4-3 1-3 4 3 5 3 5z"></path><path d="M17.5 16.5c.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1l-2.1-2.1c-.6-.6-1.5-.6-2.1 0a1.5 1.5 0 0 0 0 2.1l2.1 2.1z"></path><path d="m12 22 3-3"></path><path d="m6.5 16.5c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1a1.5 1.5 0 0 0-2.1 0l-2.1 2.1z"></path><path d="m12 2-3 3"></path><path d="m3 3 3 3"></path><path d="M21 21 18 18"></path></svg>
                            <h3 className="text-xl font-semibold text-gray-100">Core Concepts</h3>
                        </div>
                        <div className="space-y-5">
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Collections Framework</span><span className="text-sm font-medium text-emerald-400 skill-percentage" data-target="90">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '90%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Data Structures & Algorithms</span><span className="text-sm font-medium text-emerald-400 skill-percentage" data-target="90">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '90%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Multithreading</span><span className="text-sm font-medium text-emerald-400 skill-percentage" data-target="85">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '85%' }}></div></div>
                            </div>
                             <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">DBMS</span><span className="text-sm font-medium text-emerald-400 skill-percentage" data-target="88">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '88%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">OOP</span><span className="text-sm font-medium text-emerald-400 skill-percentage" data-target="95">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '95%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Developer Tools */}
                    <div className="glass-card rounded-2xl p-6" ref={addToRefs}>
                        <div className="flex items-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                            <h3 className="text-xl font-semibold text-gray-100">Developer Tools</h3>
                        </div>
                         <div className="space-y-5">
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Git & GitHub</span><span className="text-sm font-medium text-amber-400 skill-percentage" data-target="95">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '95%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Postman</span><span className="text-sm font-medium text-amber-400 skill-percentage" data-target="90">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '90%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">IntelliJ IDEA</span><span className="text-sm font-medium text-amber-400 skill-percentage" data-target="88">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '88%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">VS Code</span><span className="text-sm font-medium text-amber-400 skill-percentage" data-target="85">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '85%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Software Design */}
                    <div className="glass-card rounded-2xl p-6" ref={addToRefs}>
                        <div className="flex items-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                            <h3 className="text-xl font-semibold text-gray-100">Software Design</h3>
                        </div>
                         <div className="space-y-5">
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Low-Level Design (LLD)</span><span className="text-sm font-medium text-rose-400 skill-percentage" data-target="85">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-rose-500 to-red-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '85%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">High-Level Design (HLD)</span><span className="text-sm font-medium text-rose-400 skill-percentage" data-target="82">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-rose-500 to-red-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '82%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">RESTful Architecture</span><span className="text-sm font-medium text-rose-400 skill-percentage" data-target="88">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-rose-500 to-red-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '88%' }}></div></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card 6: Soft Skills */}
                    <div className="glass-card rounded-2xl p-6" ref={addToRefs}>
                        <div className="flex items-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            <h3 className="text-xl font-semibold text-gray-100">Soft Skills</h3>
                        </div>
                         <div className="space-y-5">
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Problem-Solving</span><span className="text-sm font-medium text-sky-400 skill-percentage" data-target="95">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '95%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Analytical Thinking</span><span className="text-sm font-medium text-sky-400 skill-percentage" data-target="92">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '92%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Communication</span><span className="text-sm font-medium text-sky-400 skill-percentage" data-target="90">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '90%' }}></div></div>
                            </div>
                             <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Time Management</span><span className="text-sm font-medium text-sky-400 skill-percentage" data-target="88">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '88%' }}></div></div>
                            </div>
                            <div className="skill">
                                <div className="flex justify-between items-center mb-1"><span className="text-gray-300">Decision Making</span><span className="text-sm font-medium text-sky-400 skill-percentage" data-target="85">0%</span></div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2.5 rounded-full progress-bar-inner" style={{ width: '85%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

