import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Game DevUtopia Club - Member",
      period: "2024-Present",
      location: "PICT's Game Dev Club",
      description: "Active member contributing to game development projects and learning new technologies.",
      icon: "🎮"
    },
    {
      title: "Impetus & Concepts 2025 - Organizing Team",
      period: "2024",
      location: "PICT",
      description: "Handled tech event logistics and promotions for the annual technical festival.",
      icon: "📅"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -33 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-light">
      <div className="container-custom section-padding">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary">Experience</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-dark rounded-xl p-6 hover:bg-dark-lighter transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-gray-800 hover:border-primary/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-primary font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 mb-3">{exp.location}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;