import { useRef, useState, useEffect } from 'react';
import LinkedInImage from '../assets/linkedin.png';
import GitHubImage from '../assets/github.png';
import MailImage from '../assets/mail.png';
// import ResumePDF from '../assets/Resume1.pdf';
import LeetCodeImage from '../assets/LeetCode.png';
import GeeksforGeeksImage from '../assets/gfg.png';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
            I am currently pursuing a B.Tech at Guru Nanak Institute of Technical Campus, with a strong foundation in software development and system design. I have experience in front-end and back-end technologies, including HTML, CSS, JavaScript, Angular, and Spring Boot. My expertise extends to API integration, databases, JPA, and designing high-level and low-level architectures.

I am passionate about problem-solving and have solved over 500 problems on LeetCode and GeeksforGeeks, achieving a contest rating in the top 10% on LeetCode. Additionally, I have worked on a project focused on an online banking system, showcasing my ability to build scalable and efficient applications.

With a keen interest in continuous learning and development, I am always exploring new technologies to enhance my skills and contribute to impactful projects.

            </p>
            {/* <p className="text-lg mb-8 text-justify">
              My achievements include securing first prize in a college coding competition among 500 participants and 
              earning certifications such as Python for Everybody (Coursera) and Data Structures & Algorithms in Python 
              (GeeksforGeeks). I have solved over 800 coding challenges across platforms like LeetCode, GFG, and HackerRank.
            </p> */}
            <div className="flex justify-center items-center space-x-6 my-8">
              <a href="https://www.linkedin.com/in/nazeershaik049/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={LinkedInImage} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="https://github.com/nazeer-shaik-01" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={GitHubImage} alt="GitHub" className="w-10 h-10 filter brightness-100 dark:brightness-100" />
              </a>
              <a href="mailto:mailto:nazeershaik1312@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={MailImage} alt="Email" className="w-10 h-10" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/shaiknazeerbaba/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={GeeksforGeeksImage} alt="GeeksforGeeks" className="w-10 h-10" />
              </a>
              <a href="https://leetcode.com/u/nazeershaik049/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={LeetCodeImage} alt="LeetCode" className="w-10 h-10" />
              </a>
              <a href="https://drive.google.com/file/d/1eArb9uRQ1qZW6oWlXW5DQSysWsCkaXby/view" target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
                View Resume
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
