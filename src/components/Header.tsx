'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaCommentDots } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'What is EventGuide', href: '#what-is-eventguide' },
    { name: 'Show Me', href: '#show-me' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'For Event Producers', href: '#for-producers' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-dark/90 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <FaCommentDots className="text-primary mr-2" size={24} />
            <span className="text-xl font-bold md:text-2xl">
              Event<span className="text-primary">Guide</span>
              <span className="text-secondary">.ai</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-light"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-gray-600 md:hidden dark:text-gray-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark border-t dark:border-gray-800"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-light"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 
