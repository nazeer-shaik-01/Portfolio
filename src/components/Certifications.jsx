import { useRef, useState, useEffect } from 'react'; // Import hooks

import GfgImage from '../assets/linkedin.png';  // GeeksforGeeks logo
import UmImage from '../assets/aws1.png';  // University of Michigan logo
//import StanfordImage from '../assets/stanford.png'; // Stanford University logo
import HackImage from '../assets/hacker.png'; // HackerRank logo
// import UcImage from '../assets/uc.png'; // UC San Diego logo
import GenAiPdf from '../assets/Generative AI_Certification.pdf';
import MlPdf from '../assets/MachineLearning_Certificate.pdf';
import HrImage from '../assets/Java_certifucation.png'
import SlImage from '../assets/sl.png'
import MysqlPdf from '../assets/MySql.Certification.pdf'
import SbImage from '../assets/SpringBoot_Certification.jpg'
import UcImage from '../assets/gl.png';


// Sample certifications data
const certifications = [
  {
    title: 'LinkedIn',
    description: 'Certified on completing **Generative AI** on LinkedIn.',
    url: GenAiPdf,
    image: GfgImage
  },
  {
    title: 'Amazon AWS',
    description: 'Certified on completing Machine Learning Terminology on Amazon AWS.',
    url: MlPdf,
    image: UmImage
  },
  {
    title: 'HackerRank',
    description: 'Certified on JAVA (Basics) on HackerRank.',
    url: HrImage,
    image: HackImage
  },
  {
    title: 'SimpliLearn',
    description: 'Certified on completing SQL on SimpliLearn.',
    url: MysqlPdf,
    image: SlImage
  },
  {
    title: 'GreatLearning',
    description: 'Certified on completing Spring Boot on GreatLearning.',
    url: SbImage,
    image: UcImage
  },
  // {
  //   title: 'Stanford University',
  //   description: 'Certified on completing the Machine Learning course on Coursera.',
  //   url: 'https://www.coursera.org/account/accomplishments/verify/3EW4P3QRV6V9',
  //   image: StanfordImage
  // },
  // Add more certifications as needed
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="Certifications"
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 ${
        isVisible ? 'animate-zoomIn' : ''
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-center space-x-6"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {cert.title}
                  </a>
                </h3>
                <p className="text-lg">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
