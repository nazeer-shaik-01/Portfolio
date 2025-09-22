import { motion } from 'framer-motion';

const AboutSection = () => {
  const education = [
    {
      institution: "Guru Nanak Institutions Technical Campus",
      period: "2022-2026",
      degree: "B. Tech in Computer Science and Engineering ",
      grade: "CGPA: 8.02",
      logo: "/gni.jpg", // College logo
    },
    {
      institution: "Hyderabad Institute of Excellence",
      period: "2020-2022",
      degree: "Mathematics, Physics, and Chemistry",
      grade: "94%",
      logo: "/hie.jpg", // College logo
    },
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

  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-left">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <motion.div
            className="bg-dark-lighter rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              I am currently pursuing a B.Tech in Computer Science at Guru Nanak Institute of Technical Campus. With a solid foundation in software engineering principles and system design, I have built strong analytical and development skills that support my journey toward becoming a well-rounded full-stack developer.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I am proficient in front-end technologies like HTML, CSS, JavaScript, and Angular, as well as backend development using Spring Boot. My experience includes RESTful API integration, MySQL database design, and using Java Persistence API (JPA) for ORM-based operations. I also have hands-on experience in building end-to-end applications with a focus on scalability and performance.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I have a keen interest in System Design, both High-Level Design (HLD) and Low-Level Design (LLD). My problem-solving skills are sharpened through consistent practice on LeetCode and GeeksforGeeks, where I've solved over 500+ data structures and algorithms (DSA) problems and secured a top 10% rating in contests on LeetCode.
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-200 leading-relaxed mb-10 text-left mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Here's a snapshot of my educational journey that shaped the foundation I'm standing on today:
            </motion.p>
            <motion.div
              className="space-y-6 text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-dark rounded-xl p-5 hover:bg-dark transition-all duration-300 border border-gray-800 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                        <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                        <span className="text-primary font-medium">{edu.period}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                        <p className="text-gray-300">{edu.degree}</p>
                        <span className="text-gray-400 font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
