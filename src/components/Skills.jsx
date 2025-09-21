import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "Angular.js"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Spring Boot", "MySQL", "SQL"]
    },
    {
      title: "Languages",
      icon: "💻",
      skills: ["Java", "C"]
    },
    {
      title: "Tools",
      icon: "�️",
      skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman"]
    },
    {
      title: "Core Concepts",
      icon: "🔬",
      skills: ["Data Structures & Algorithms", "Software Design", "RESTful Web Services"]
    },
    {
      title: "Professional Skills",
      icon: "✨",
      skills: ["Problem Solving", "Team Collaboration", "Project Management"]
    }
  ];

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

  return (
    <section id="skills" className="py-20 bg-dark-light">
      <div className="container-custom section-padding">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-dark rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-800 hover:border-primary/30 group"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-dark-light rounded-full px-4 py-2 border border-gray-800 hover:border-primary/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-primary text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
