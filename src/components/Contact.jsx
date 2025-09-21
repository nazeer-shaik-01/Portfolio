import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-backend-nine-phi.vercel.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(`Thanks for contacting me, ${formData.name || 'friend'}!`, {
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #3B82F6'
          },
          iconTheme: {
            primary: '#3B82F6',
            secondary: '#fff'
          }
        });

        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Oops! Something went wrong.");
      }
    } catch (error) {
      toast.error("Server error! Try again later.");
      console.error(error);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "nazeer.dev@hotmail.com",
      link: "mailto:nazeer.dev@hotmail.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/nazeershaik049/",
      link: "https://www.linkedin.com/in/nazeershaik049/"
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "https://github.com/nazeer-shaik-01",
      link: "https://github.com/nazeer-shaik-01"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container-custom section-padding">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            className="bg-dark-light rounded-xl p-8 border border-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <motion.h3
                className="text-3xl font-semibold text-white mb-6 mt-9"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Let's Connect
              </motion.h3>
              <motion.p
                className="text-gray-300 text-lg mb-8 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                I'm always interested in hearing about new opportunities and interesting projects.
                Feel free to reach out if you'd like to collaborate or just say hello!
              </motion.p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 bg-dark-light rounded-lg hover:bg-dark-lighter transition-all duration-200 border border-gray-800 hover:border-primary/30 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-md">{info.label}</p>
                    <p className="text-white group-hover:text-primary transition-colors duration-200">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
