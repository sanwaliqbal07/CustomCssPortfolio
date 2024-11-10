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
            I&apos;m a passionate developer ready to take on new challenges and projects.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            With a strong foundation in web development, I specialize in creating dynamic and user-friendly websites.
            I am proficient in technologies such as JavaScript, React, and Next.js. 
          </p>
          <p className="mt-2 text-lg text-gray-600">
            My goal is to build applications that not only look great but also provide seamless experiences for users.
            I&apos;m constantly learning and exploring new tools to enhance my skills and bring innovative ideas to life.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            In my spare time, I enjoy collaborating on open-source projects, participating in hackathons, 
            and contributing to the developer community. Let&apos;s connect and explore opportunities together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
