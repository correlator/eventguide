'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCommentDots, FaMobileAlt, FaBolt, FaMapMarkedAlt } from 'react-icons/fa';

const WhatIsEventGuide = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaCommentDots className="w-6 h-6 text-primary" />,
      title: 'Text to Ask',
      description: 'No apps to download. Just send an SMS with your question to get instant help.',
    },
    {
      icon: <FaMobileAlt className="w-6 h-6 text-primary" />,
      title: 'Works on Any Phone',
      description: 'If your phone can send a text message, you can use EventGuide.ai.',
    },
    {
      icon: <FaBolt className="w-6 h-6 text-primary" />,
      title: 'Instant Answers',
      description: "Get immediate responses, don't look for the info booth, or dig through your email.",
    },
    {
      icon: <FaMapMarkedAlt className="w-6 h-6 text-primary" />,
      title: 'Event-Specific Info',
      description: 'From parking and schedules to food vendors and facilities - we have got you covered.',
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="what-is-eventguide" className="section bg-white dark:bg-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={0}
            className="heading text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white"
          >
            What is <span className="text-primary">EventGuide</span>?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={1}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Your personal SMS assistant for large events like music festivals, conferences, and sporting events. 
            Just text your question, and get instant answers. 
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              custom={index + 2}
              className="p-6 bg-gray-50 rounded-xl dark:bg-gray-800"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsEventGuide; 
