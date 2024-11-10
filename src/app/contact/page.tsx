// src/app/contact/page.tsx

import Image from 'next/image';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
          <Image
            src="/profile.jpg" // Replace with your actual image path
            alt="Contact"
            width={250} // Adjust size as needed
            height={250} // Adjust size as needed
            className="rounded-full object-cover border-4 border-teal-600" // Circular shape
          />
        </div>

        {/* Contact Form Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-teal-700">Contact Me</h1> {/* Heading size */}
          <p className="mt-4 text-xl text-gray-700">
            I&apos;d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi,
            feel free to reach out!
          </p>
          <form className="mt-6">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-teal-600 rounded-lg p-2 mb-4"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-teal-600 rounded-lg p-2 mb-4"
                required
              />
              <textarea
                placeholder="Your Message"
                className="border border-teal-600 rounded-lg p-2 mb-4"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
