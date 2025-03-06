'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaComments, FaMobileAlt, FaBolt } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaRobot className="w-6 h-6 text-primary" />,
      title: 'AI-Powered Answers',
      description: 'Our advanced AI understands context and provides accurate, helpful responses to any event-related question.',
    },
    {
      icon: <FaComments className="w-6 h-6 text-primary" />,
      title: 'Natural Conversations',
      description: 'Ask questions in plain language just like you would to a friend or event staff member.',
    },
    {
      icon: <FaMobileAlt className="w-6 h-6 text-primary" />,
      title: 'Works on Any Phone',
      description: 'No app downloads required. If your phone can send SMS, you can use EventGuide.ai.',
    },
    {
      icon: <FaBolt className="w-6 h-6 text-primary" />,
      title: 'Instant Responses',
      description: 'Get answers in seconds, even in areas with poor data connectivity where apps might fail.',
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
    <section id="about" className="section bg-white dark:bg-dark">
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
            What is <span className="text-primary">EventGuide.ai</span>?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={1}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            EventGuide.ai is an SMS-based Q&A service that provides instant answers to every question
            attendees might have at conferences and festivals. From finding stages and food to getting
            schedule updates and artist information, we've got you covered with a simple text message.
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

export default About; 
