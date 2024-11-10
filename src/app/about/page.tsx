// src/app/about/page.tsx

import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
          <Image
            src="/profile.jpg" // Replace with your actual image path
            alt="About Me"
            width={250} // Adjust size as needed
            height={250} // Adjust size as needed
            className="rounded-full object-cover border-4 border-teal-600" // Circular shape
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-teal-700">About Me</h1> {/* Heading size */}
          <p className="mt-4 text-xl text-gray-700">
            Hello! I am a dedicated web developer with a passion for creating interactive and user-friendly applications.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            I started my journey in the tech world by exploring various programming languages, and I quickly found my love for web development. 
            I believe in the power of code to bring ideas to life and solve real-world problems.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            My expertise lies in using frameworks like Next.js and React to build scalable and efficient web applications.
            I’m also continuously learning and improving my skills in backend technologies to become a more versatile developer.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Outside of coding, I enjoy collaborating with others on projects, attending tech meetups, and contributing to open-source initiatives.
            I thrive on challenges and am always looking for ways to push my limits and grow as a developer.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Thank you for visiting my portfolio! I’m excited to connect with fellow developers, potential collaborators, 
            and anyone who shares a passion for technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
