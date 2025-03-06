'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaMobileAlt, FaCommentDots, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden md:pt-40 md:pb-24 bg-gradient-to-br from-light to-gray-100 dark:from-dark dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Text Your Guide <br></br><span className="text-primary">Get Answers</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 lg:mx-0 dark:text-gray-300">
              No app downloads. Just send an SMS to get real-time answers about stages, schedules, food, facilities, and more at your event.
            </p>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="#contact" className="btn btn-primary">
                Text our Coachella Guide <FaPaperPlane className="ml-2" />
              </Link>
              <Link href="#what-is-eventguide" className="btn bg-white text-primary border border-primary hover:bg-gray-50 dark:bg-dark dark:text-primary-light dark:border-primary-light dark:hover:bg-gray-800">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              <p>Launching at Coachella 2025</p>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center w-full"
          >
            <div className="relative w-full max-w-xs mx-auto">
              
              {/* Mobile-only parking question bubble - positioned above the phone */}
              <div className="absolute -top-16 left-0 right-0 z-10 px-4 md:hidden">
                <div className="chat-container">
                  <div className="bg-[#1982FC] text-white rounded-2xl rounded-tr-sm p-4 shadow-lg w-full">
                    <p className="text-base font-medium text-center">Let&apos;s start planning my trip and setlist!</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Bubbles for desktop - hidden on mobile */}
              <div className="absolute -left-40 -bottom-12 z-10 w-96 hidden md:block">
                <div className="chat-container">
                  {/* First Question Bubble */}
                  <div className="mb-16 flex justify-end transform rotate-6">
                    <div className="bg-[#1982FC] text-white rounded-3xl rounded-tr-sm p-5 max-w-[90%] shadow-xl">
                      <p className="text-lg md:text-xl font-medium">Let&apos;s start planning my trip and setlist!</p>
                    </div>
                  </div>
                  
                  {/* Second Question Bubble */}
                  <div className="flex justify-end transform -rotate-3">
                    <div className="bg-[#1982FC] text-white rounded-3xl rounded-tr-sm p-5 max-w-[90%] shadow-xl">
                      <p className="text-lg md:text-xl font-medium">How long does it take to walk in from the yellow lot?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
