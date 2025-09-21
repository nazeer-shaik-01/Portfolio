import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Azure Skynet Solutions Pvt. Ltd.",
      period: "March 2025 – May 2025",
      location: "Hyderabad",
      responsibilities: [
        "Built responsive web applications using real-world project requirements and modern frameworks.",
        "Applied best practices in frontend and backend development for scalable web solutions.",
        "Collaborated with team to debug issues and enhance UI/UX performance.",
        "Contributed actively to project goals through clean code and timely feature delivery."
      ]
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
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-400">
                      <p>{exp.location}</p>
                      <p>{exp.period}</p>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
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