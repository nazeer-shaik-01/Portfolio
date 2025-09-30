import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 Languages & Databases",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      skills: [
        { name: "Java", level: 95 },
        { name: "SQL", level: 92 },
        { name: "HTML/CSS", level: 88 },
      ],
    },
    {
      title: "⚡ Technologies & Frameworks",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      skills: [
        { name: "Spring Boot", level: 92 },
        { name: "Angular", level: 88 },
        { name: "Microservices", level: 90 },
        { name: "REST APIs", level: 92 },
      ],
    },
    {
      title: "🔄 Core Concepts",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      skills: [
        { name: "Collections Framework", level: 90 },
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Multithreading", level: 85 },
        { name: "DBMS", level: 88 },
        { name: "OOP", level: 95 },
      ],
    },
    {
      title: "🔧 Developer Tools",
      color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Postman", level: 90 },
        { name: "IntelliJ IDEA", level: 88 },
        { name: "VS Code", level: 85 },
      ],
    },
    {
      title: "📐 Software Design",
      color: "bg-gradient-to-r from-pink-500 to-pink-600",
      skills: [
        { name: "Low-Level Design (LLD)", level: 85 },
        { name: "High-Level Design (HLD)", level: 82 },
        { name: "RESTful Architecture", level: 88 },
      ],
    },
    {
      title: "🤝 Soft Skills",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      skills: [
        { name: "Problem-Solving", level: 95 },
        { name: "Analytical Thinking", level: 92 },
        { name: "Communication", level: 90 },
        { name: "Time Management", level: 88 },
        { name: "Decision Making", level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        width: { duration: 1, ease: "easeOut" },
        opacity: { duration: 0.3 },
      },
    }),
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };


  return (
    <section id="skills" className="py-24 bg-dark">
      <div className="container-custom section-padding mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical <span className="text-primary">Expertise</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col border border-transparent hover:border-primary/30"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1.5 text-gray-300 font-medium">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-primary font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full ${category.color} shadow-md`}
                        custom={skill.level}
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

