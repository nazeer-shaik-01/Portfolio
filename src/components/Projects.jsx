import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: "HerbiVerse",
      description: "Interactive Herbal Learning Hub with 2D/3D models for educational purposes.",
      detailedDescription: "HerbiVerse is a comprehensive educational platform that combines traditional herbal knowledge with modern web technologies. The application features interactive 2D and 3D models of various herbs, allowing users to explore their properties, uses, and benefits in an immersive environment. Built with React and Three.js, it provides an engaging learning experience for students and enthusiasts of herbal medicine.",
      tech: ["React", "Tailwind", "Node", "Express", "Three.js", "MongoDB"],
      domain: "3D/Educational",
      features: [
        "Interactive 3D herb models with detailed animations",
        "Educational insights with plant care tips, benefits, and usage",
        "Comprehensive herb database with search functionality",
        "Educational modules, care tips, and medicinal uses"
      ],
      image: "/herbiverse.jpg",
      live: "https://herbiverse.vercel.app/",
      github: "https://github.com/HimeshLaddha/Herbiverse"
    },
    {
      title: "QuickStay",
      description: "Hotel booking system with role-based authentication (Currently under development).",
      detailedDescription: "QuickStay is a comprehensive hotel booking platform designed to streamline the reservation process for both guests and hotel administrators. The system features role-based authentication, allowing different access levels for customers, hotel staff, and administrators. Currently in development, it aims to provide a complete solution for hotel management and booking.",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
      domain: "Full-Stack",
      features: [
        "Role-based login system for guests and admins",
        "Room listings with availability tracking",
        "Admin dashboard to manage hotels, bookings, and users",
        "Search and filter functionality for users",
        "Planned Stripe integration for secure payments"
      ],
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: "https://hotel-booking-frontend-pink-delta.vercel.app/",
      github: "https://github.com/HimeshLaddha/Hotel_Booking"
    },
    {
      title: "QuickChat",
      description: "Real-time chat application with image sharing capabilities and modern UI.",
      detailedDescription: "QuickChat is a modern real-time messaging application built with the MERN stack and Socket.io. It enables users to communicate instantly with features like image sharing, typing indicators, and message status updates. The application focuses on providing a seamless chat experience with a clean, intuitive interface.",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB", "Socket.io"],
      domain: "Full-Stack",
      features: [
        "Instant real-time communication using WebSockets",
        "Image sharing with inline previews",
        "Secure user authentication and session management",
        "Minimal, modern UI",
        "Responsive chat interface"
      ],
      image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: "https://chat-app-weld-five-80.vercel.app/",
      github: "https://github.com/HimeshLaddha/Chat_App"
    },
    {
      title: "PassOp",
      description: "Basic password manager built with encryption and a clean UI.",
      detailedDescription: "PassOp is a simple password management application that allows users to securely store and manage their login credentials. Built using the MERN stack, it focuses on basic functionality like saving passwords, organizing them by category, and ensuring data is encrypted using built-in Node.js crypto modules. It's an ideal starter project to demonstrate secure data handling and user authentication.",
      tech: ["MERN stack"],
      domain: "MERN-Stack",
      features: [
        "Secure password storage with basic encryption",
        "Simple UI to add, view, and delete passwords",
        "Category-wise password organization",
        "Copy-to-clipboard functionality for convenience"
      ],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: false,
      github: "https://github.com/HimeshLaddha/Password_Manager"
    },
    {
      title: "To Do List",
      description: "A productivity app for managing daily tasks and projects.",
      detailedDescription: "A comprehensive task management application that helps users organize their daily activities and projects. Features include task categorization, priority levels, due dates, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      domain: "MERN-Stack",
      features: [
        "Task categorization",
        "Every task is created with a unique identifier, ensuring clean operations like edit/delete.",
        "Users can toggle completion status for better task tracking.",
        "Show/Hide Completed Task"
      ],
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=500",
      live: false,
      github: "https://github.com/HimeshLaddha/Todo_List"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design and animations.",
      detailedDescription: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark theme, and comprehensive sections showcasing skills, projects, and experience.",
      tech: ["React", "Tailwind", "Framer Motion"],
      domain: "Frontend",
      features: [
        "Responsive design with mobile-first approach",
        "Smooth animations and micro-interactions",
        "Dark theme with blue accents",
        "Contact form integration"
      ],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: "https://himesh-portfolio-delta.vercel.app/",
      github: "https://github.com/HimeshLaddha/portfolio"
    }
  ];

  // Get unique domains for filter options
  const domains = ['All', ...new Set(projects.map(project => project.domain))];

  // Filter projects based on selected domain
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.domain === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const allProjectsVariants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.3
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Show only first 4 projects in the main view
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container-custom section-padding">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-light rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-800 hover:border-primary/30 group cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 bg-dark/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-primary text-sm font-medium">{project.domain}</span>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4 line-clamp-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </motion.div>

                <motion.div
                  className="text-primary text-sm font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Click to view details →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowAllProjects(true)}
            className="px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-dark border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-dark-light hover:bg-dark-lighter rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-dark/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-primary text-sm font-medium">{selectedProject.domain}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h2
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedProject.title}
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.detailedDescription}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Live</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-200 flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Code</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All Projects Modal */}
      <AnimatePresence>
        {showAllProjects && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setShowAllProjects(false)}
            />

            {/* All Projects Content */}
            <motion.div
              className="relative bg-dark border border-gray-800 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              variants={allProjectsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="sticky top-0 bg-dark border-b border-gray-800 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">All Projects</h2>
                  <p className="text-gray-400">
                    Showing {filteredProjects.length} of {projects.length} projects
                  </p>
                </div>
                <button
                  onClick={() => setShowAllProjects(false)}
                  className="bg-dark-light hover:bg-dark-lighter rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Filter Section */}
              <motion.div
                className="p-6 border-b border-gray-800"
                variants={filterVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="text-gray-300 font-medium mr-2">Filter by domain:</span>
                  {domains.map((domain) => (
                    <motion.button
                      key={domain}
                      onClick={() => setSelectedFilter(domain)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedFilter === domain
                          ? 'bg-primary text-white shadow-lg shadow-primary/25'
                          : 'bg-dark-light text-gray-300 hover:bg-dark-lighter hover:text-white border border-gray-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {domain}
                      {domain !== 'All' && (
                        <span className="ml-2 text-xs opacity-75">
                          ({projects.filter(p => p.domain === domain).length})
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Projects Grid */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFilter}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={`${project.title}-${selectedFilter}`}
                        className="bg-dark-light rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-800 hover:border-primary/30 group cursor-pointer"
                        variants={cardVariants}
                        whileHover={{ scale: 1.03, y: -5 }}
                        onClick={() => {
                          setShowAllProjects(false);
                          setSelectedProject(project);
                        }}
                        layout
                      >
                        <div className="relative overflow-hidden">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                          <div className="absolute top-3 right-3 bg-primary/20 backdrop-blur-sm rounded-full p-1.5">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <div className="absolute top-3 left-3 bg-dark/60 backdrop-blur-sm rounded-full px-2 py-1">
                            <span className="text-primary text-xs font-medium">{project.domain}</span>
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>

                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tech.slice(0, 2).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 2 && (
                              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                                +{project.tech.length - 2}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-primary text-xs font-medium">View Details</span>
                            <div className="flex gap-2">
                              {project.live && (
                                <div className="w-2 h-2 bg-green-500 rounded-full" title="Live Demo Available"></div>
                              )}
                              <div className="w-2 h-2 bg-blue-500 rounded-full" title="Source Code Available"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* No Results Message */}
                {filteredProjects.length === 0 && (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-gray-400 text-lg mb-2">No projects found</div>
                    <div className="text-gray-500 text-sm">Try selecting a different domain filter</div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;