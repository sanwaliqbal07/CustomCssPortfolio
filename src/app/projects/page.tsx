// src/app/projects/page.tsx

import Image from 'next/image';

const Projects = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
          <Image
            src="/profile.jpg" // Replace with your actual image path
            alt="Projects"
            width={250} // Adjust size as needed
            height={250} // Adjust size as needed
            className="rounded-full object-cover border-4 border-teal-600" // Circular shape
          />
        </div>

        {/* Projects Details Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-teal-700">My Projects</h1> {/* Heading size */}
          <p className="mt-4 text-xl text-gray-700">
            Here are some of the projects I’ve been working on. Each project showcases my skills and creativity.
          </p>

          <div className="mt-6 space-y-4">
            {/* Project Item 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-600">
              <h2 className="text-2xl font-semibold text-teal-700">A Weather App</h2>
              <p className="text-gray-600">
                A simple Weather App used to see Weather condition easily.
              </p>
            </div>

            {/* Project Item 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-600">
              <h2 className="text-2xl font-semibold text-teal-700">Clock</h2>
              <p className="text-gray-600">
                A Simple and easy App To See Time.
              </p>
            </div>

            {/* Project Item 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-600">
              <h2 className="text-2xl font-semibold text-teal-700">Audio Player App</h2>
              <p className="text-gray-600">
              as i said in above equation that 2+2 = idk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
