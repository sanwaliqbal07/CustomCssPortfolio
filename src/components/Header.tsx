// src/components/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-teal-400 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-teal-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-teal-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-white hover:text-teal-300 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-teal-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
