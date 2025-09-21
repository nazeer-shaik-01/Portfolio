import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: "DSA Practice (LeetCode)",
      icon: "🎯",
      description: "Solved 400+ Data Structures & Algorithms problems on LeetCode, strengthening problem-solving skills and deepening understanding of core computer science concepts.",
      stats: [
        { label: "Problems Solved", value: "400+" },
        { label: "Platform", value: "LeetCode" },
        { label: "Focus", value: "DSA & Problem Solving" }
      ]
    },
    {
      title: "Hackathon Finalist",
      icon: "🏆",
      description: "Reached the finals of a college-level hackathon, where our team of 3 members developed a working prototype in just 24 hours. The challenge was based on Smart Healthcare Solutions, focusing on building robust backend APIs and creating a static frontend integrated with the dynamic backend.",
      stats: [
        { label: "Team Size", value: "3 Members" },
        { label: "Duration", value: "24 Hours" },
        { label: "Role", value: "Backend & Integration" }
      ]
    },
    {
      title: "Teaching & Mentorship",
      icon: "👨‍🏫",
      description: "Guided and mentored junior students in mastering Data Structures, Java fundamentals, and problem-solving strategies. Conducted knowledge-sharing sessions and provided hands-on support, helping peers strengthen their coding foundations.",
      stats: [
        { label: "Focus Areas", value: "DSA & Java" },
        { label: "Impact", value: "Student Growth" },
        { label: "Format", value: "1:1 & Group Sessions" }
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-dark-light">
      <div className="container-custom section-padding">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-dark rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-800 hover:border-primary/30"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{achievement.icon}</span>
                <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {achievement.description}
              </p>

              <div className="grid grid-cols-1 gap-4">
                {achievement.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="bg-dark-light rounded-lg p-3 border border-gray-800"
                  >
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    <div className="text-primary font-medium">{stat.value}</div>
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

export default Achievements;