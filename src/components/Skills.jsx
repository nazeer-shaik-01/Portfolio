import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Angular.js"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["SpringBoot", "MySql"],
      icon: "⚙️"
    },
    {
      title: "Languages",
      skills: ["Java", "C"],
      icon: "💻"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "intelIJ"],
      icon: "🛠️"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md mx-auto bg-dark rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-800 hover:border-primary/30 group"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -10 }}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-primary transition">
                  {category.title}
                </h3>

                <div className="flex flex-col items-center gap-3 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-5 py-2 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 transition-all duration-200 hover:bg-primary hover:text-white w-full max-w-[250px] text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
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
