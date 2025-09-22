import { motion } from 'framer-motion';

const AboutSection = () => {
  const education = [
    {
      institution: "Guru Nanak Institute of Technical Campus",
      period: "2022–2026",
      degree: "B.Tech in Computer Science and Engineering",
      grade: "CGPA: 8.02",
      logo: "/gni.jpg",
    },
    {
      institution: "Hyderabad Institute of Excellence",
      period: "2020–2022",
      degree: "Mathematics, Physics, and Chemistry",
      grade: "94%",
      logo: "/hie.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
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
              I am currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at <strong>Guru Nanak Institute of Technical Campus (2022–2026)</strong>, with a solid foundation in software engineering principles, system design, and full-stack development. My academic and project experience has strengthened my <strong>analytical, problem-solving, and development skills</strong>, enabling me to build scalable and high-performance applications.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I am proficient in <strong>front-end technologies</strong> such as HTML, CSS, JavaScript, and Angular, as well as <strong>back-end development</strong> using Spring Boot. I have hands-on experience with <strong>RESTful API design and MySQL database modeling</strong>, successfully building end-to-end applications with a focus on reliability and maintainability.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I have a keen interest in <strong>System Design</strong>, both <strong>High-Level Design (HLD)</strong> and <strong>Low-Level Design (LLD)</strong>. To enhance my problem-solving skills, I actively practice on platforms like <strong>LeetCode</strong> and <strong>GeeksforGeeks</strong>, having solved <strong>500+ DSA problems</strong> and achieved a <strong>top 10% ranking in LeetCode contests</strong>.
            </motion.p>

            <motion.p
              className="text-lg text-gray-200 leading-relaxed mb-10 mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Here’s a snapshot of my educational journey that shaped the foundation I’m standing on today:
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
