import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "SkyLink-Booking-Portal",
      description: "A full-stack airline reservation system with admin and user interfaces.",
      detailedDescription: "SkyLink-Booking-Portal is a complete flight booking system built with Spring Boot and Angular. It allows users to search, book, and manage flights, while administrators can manage airports, aircraft, and flight schedules. Security is enforced with JWT-based authentication and role-based access control.",
      tech: ["Spring Boot", "Angular", "JWT Authentication", "MySQL", "REST APIs"],
      features: [
        "Flight search and booking",
        "User authentication with roles",
        "Admin panel for managing airports, aircraft, and flights",
        "Booking history and management"
      ],
      image: "/AirLine.jpg",
      live: false,
      github: "https://github.com/nazeer-shaik-01/SkyLink-Booking-Portal"
    },
    {
      title: "Lost-and-Found-System",
      description: "A web platform for managing lost and found items in a college campus.",
      detailedDescription: "This system allows students and staff to report lost and found items, submit claims, and track item recovery. Built with Spring Boot, Angular, and MySQL, it features secure role-based access, admin approval for claims, and image upload functionality for items.",
      tech: ["Spring Boot", "Angular", "MySQL", "File Upload", "REST APIs"],
      features: [
        "Report lost or found items with images",
        "Claim management and verification",
        "Admin approval or denial of claims",
        "Secure login with role-based access"
      ],
      image: "/Loss&Found.jpg",
      live: false,
      github: "https://github.com/nazeer-shaik-01/Lost-and-Found-System-for-College"
    },
    {
      title: "Blog System",
      description: "A modern blogging platform for content creation and management.",
      detailedDescription: "The Blog System is a full-stack web application for creating, managing, and interacting with blog posts. Built using Spring Boot for the backend and Angular for the frontend, it supports user authentication, post creation, editing, commenting, liking, and search functionality. It also tracks post views and likes, and maintains all data securely in a relational database.",
      tech: ["Spring Boot", "Angular", "REST APIs", "JPA/Hibernate", "MySQL"],
      features: [
        "User authentication system",
        "Create, edit, and manage blog posts",
        "Comment functionality linked to posts",
        "Like posts and track view counts",
        "Search posts by keywords",
        "Admin content management and moderation"
      ],
      image: "/BlogSystem.png",
      live: false,
      github: "https://github.com/nazeer-shaik-01/blogSystem"
    },
    {
      title: "Online-Banking-System",
      description: "Secure online banking system for account and transaction management.",
      detailedDescription: "The Online Banking System is a web-based platform for managing bank accounts and transactions securely. Built with Spring Boot for the backend and Angular for the frontend, it provides REST APIs for account creation, deposits, withdrawals, balance tracking, and account updates. Each account has a unique 10-digit ID, and transactions are validated to prevent overdrafts. The system ensures persistent data storage, scalability, and safe user operations.",
      tech: ["Spring Boot", "Angular", "REST APIs", "JPA/Hibernate", "MySQL"],
      features: [
        "Secure user authentication",
        "Create and manage bank accounts",
        "Deposit and withdraw funds",
        "Balance tracking and transaction history",
        "Data validation to prevent negative balances",
        "Persistent storage with relational database"
      ],
      image: "/BankingSystem.jpg",
      live: false,
      github: "https://github.com/nazeer-shaik-01/Online-Banking-System"
    }
  ];

  const filteredProjects = projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } }
  };

  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
  const allProjectsVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.3 } }
  };

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
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="relative bg-dark border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-dark-light hover:bg-dark-lighter rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
              </div>

              <div className="p-8">
                <motion.h2 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </motion.h2>

                <motion.p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.detailedDescription}
                </motion.p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
                    >
                      View Live
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-200 flex items-center gap-2"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
