// src/app/page.tsx

import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
          <Image
            src="/profile.jpg" // Replace with your actual image path
            alt="Your Name"
            width={250} // Increased width for bigger size
            height={250} // Increased height for bigger size
            className="rounded-full object-cover border-4 border-teal-600" // Circular shape
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold text-teal-700">Welcome to My Portfolio!</h1> {/* Bigger heading */}
          <p className="mt-4 text-xl text-gray-700">
          Hello! My name is Sanwal Iqbal, and I am currently a first-year student. I have a strong interest in coding
          </p>
          <p className="mt-2 text-lg text-gray-600">
          and have worked extensively with TypeScript. I also have experience with HTML, CSS, TailwindCSS 
          </p>
          <p className="mt-2 text-lg text-gray-600">
          and JavaScript, which allows me to build dynamic and visually appealing web applications.
          </p>
          <p className="mt-2 text-lg text-gray-600">
          As I continue to grow my skills, I am excited to explore new technologies and enhance my coding abilities further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
