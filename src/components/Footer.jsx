import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-dark-light py-8 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container-custom section-padding">
        <div className="text-center">
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © 2026 Shaik Nazeer 
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;