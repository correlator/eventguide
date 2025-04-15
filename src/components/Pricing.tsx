'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaCommentDots, FaArrowRight, FaBuilding } from 'react-icons/fa';
import Link from 'next/link';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publicFeatures = [
    "Unlimited questions during your event",
    "Real-time, accurate answers",
    "Works with any phone that can send SMS",
    "No app downloads required",
    "Instant access after purchase"
  ];

  const privateFeatures = [
    "Custom knowledge base for your event",
    "Branded experience for attendees",
    "Analytics dashboard",
    "Priority support",
    "Custom integrations available"
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
    <section id="pricing" className="section bg-white dark:bg-dark">
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
            Simple <span className="text-primary">Pricing</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={1}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Choose the option that works best for your needs. No hidden fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Public Events Option */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={2}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-primary to-primary-dark">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full"></div>
              
              <div className="relative p-6 text-center text-white">
                <div className="flex items-center justify-center mb-3">
                  <FaCommentDots className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">Public Events</h3>
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl font-extrabold">$9.99</span>
                  <span className="text-lg ml-2">for 100 messages</span>
                </div>
                
                <p className="mb-4 text-sm">
                  Ask all your questions at public festivals and conferences &ndash; affordable and easy!
                </p>
                
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full py-2 px-4 text-sm font-medium text-primary bg-white rounded-full hover:bg-gray-100 transition-colors"
                >
                  Text to subscribe to events <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
              <h4 className="font-semibold text-base mb-3 text-gray-900 dark:text-white">What&apos;s included:</h4>
              <ul className="space-y-2">
                {publicFeatures.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                    custom={index + 3}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <FaCheck className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Private Events Option */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={3}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-secondary to-secondary-dark">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full"></div>
              
              <div className="relative p-6 text-center text-white">
                <div className="flex items-center justify-center mb-3">
                  <FaBuilding className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">Private Events</h3>
                </div>
                
                <div className="mb-2">
                  <span className="text-2xl font-bold">Custom Pricing</span>
                </div>
                
                <p className="mb-4 text-sm">
                  Hire EventGuide for your next event with a tailored solution for your attendees.
                </p>
                
                <Link 
                  href="mailto:sales@eventguide.ai" 
                  className="inline-flex items-center justify-center w-full py-2 px-4 text-sm font-medium text-secondary bg-white rounded-full hover:bg-gray-100 transition-colors"
                >
                  Text our BDR Guide <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
              <h4 className="font-semibold text-base mb-3 text-gray-900 dark:text-white">What&apos;s included:</h4>
              <ul className="space-y-2">
                {privateFeatures.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                    custom={index + 8}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-2 mt-0.5">
                      <FaCheck className="w-3 h-3 text-secondary" />
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 
