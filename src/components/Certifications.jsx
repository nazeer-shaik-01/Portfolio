import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI",
      issuer: "LinkedIn",
      date: "December 2024",
      file: "/GenAI_Certification.pdf",
      logo: "/linkedin.svg", // Logo path
    },
    {
      title: "AWS Machine Learning",
      issuer: "Amazon Web Services",
      date: "November 2024",
      file: "/ML_Certification.pdf",
      logo: "/aws.svg", // Logo path
    },
    {
      title: "Java Certification",
      issuer: "Hackerrank",
      date: "November 2024",
      file: "/JavaCertification.pdf",
      logo: "/hackerrank.svg", // Logo path
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Scaler Academy",
      date: "September 2023",
      file: "/DSA_Certification.jpg",
      logo: "/scaler.svg", // Logo path
    },
    {
      title: "GitHub Certification",
      issuer: "Geekster",
      date: "September 2024",
      file: "/Git_Certification.pdf",
      logo: "/github.svg", // Logo path
    },
    {
      title: "Spring Framework Certification",
      issuer: "Great Learning",
      date: "November 2024",
      file: "/Spring_Certification.jpg",
      logo: "/spring.svg", // Logo path
    },
    {
      title: "MySQL Certification",
      issuer: "SimpliLearn",
      date: "June 2024",
      file: "/MySqlCertification.pdf",
      logo: "/mysql.svg", // Logo path
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-[#111111] text-white">
      <div className="container-custom section-padding">
        <h2 className="text-3xl font-bold mb-10 text-blue-400">Certifications</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="p-5 border border-gray-800 rounded-2xl bg-gray-900/40 shadow-md hover:shadow-lg hover:border-blue-500 transition transform hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                {/* Logo and Title Section */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {cert.title}
                  </h3>
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:text-blue-500 font-medium"
              >
                View Certificate →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;