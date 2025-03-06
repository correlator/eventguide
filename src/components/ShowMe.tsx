'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMusic, FaBuilding, FaPaperPlane } from 'react-icons/fa';

type Conversation = {
  question: string;
  answer: string;
};

type ConversationCategory = {
  title: string;
  icon: React.ReactNode;
  conversations: Conversation[];
};

const ShowMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<'festivals' | 'conferences'>('festivals');
  const [visibleConversations, setVisibleConversations] = useState<Conversation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const conversationCategories: Record<'festivals' | 'conferences', ConversationCategory> = {
    festivals: {
      title: 'Music Festivals',
      icon: <FaMusic className="w-5 h-5" />,
      conversations: [
        {
          question: "How long is it going to take for me to park and get in?",
          answer: "Parking and entry can take 20-40 minutes depending on traffic. Plan ahead and arrive early, the second entrance in the back is usually less crowded!"
        },
        {
          question: "What are the tram's hours?",
          answer: "The tram runs from 10 AM to 2 AM daily during the festival, and pickup is at the arch outside the main entrance. Shall I text you a map?"
        },
        {
          question: "Where can I buy healthy food?",
          answer: "Check out NashBows Acai, and SpaceFruit LLC. They are both in the main food court by mountain sculpture. Do you need a map?"
        }
      ]
    },
    conferences: {
      title: 'Conferences',
      icon: <FaBuilding className="w-5 h-5" />,
      conversations: [
        {
          question: "I just met someone from ScreenSavvy who said they're giving a talk, but I forgot their name. When is their talk?",
          answer: "Lisa Tran from ScreenSavvy is on a panel discussion \"The future of video displays\" tomorrow at 1pm in Conference room C"
        },
        {
          question: "I need to upgrade our projector system and I'm in the north wing. What vendors should I meet?",
          answer: "In the North Wing, you can visit: Visinary displays in Booth N-120, if you're also looking for audio to compliment your projector system upgrade, visit SonicWaveAudio in Booth N-101."
        },
        {
          question: "What time does the lounge open?",
          answer: "The lounge opens at 9 AM and stays open until 5 PM. Hors d'oeuvres are first come first serve."
        }
      ]
    }
  };

  // Add conversations one by one with a delay
  useEffect(() => {
    setVisibleConversations([]);
    setCurrentIndex(0);
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex <= conversationCategories[activeTab].conversations.length) {
          setVisibleConversations(conversationCategories[activeTab].conversations.slice(0, nextIndex));
          return nextIndex;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, [activeTab]);

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
    <section id="show-me" className="section bg-gray-50 dark:bg-gray-900">
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
            See It In <span className="text-primary">Action</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={1}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Here are some real examples of how EventGuide.ai answers questions at events.
            Just text and get instant, helpful responses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side: Text and Tab Navigation */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={2}
            className="flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Real Questions, <span className="text-primary">Instant Answers</span>
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              EventGuide.ai provides accurate, contextual responses to attendee questions in real-time. 
              No matter how specific or complex the question, our AI delivers helpful information instantly.
            </p>
            
            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="inline-flex p-1 bg-gray-200 rounded-full dark:bg-gray-800">
                <button
                  onClick={() => setActiveTab('festivals')}
                  className={`flex items-center px-6 py-3 text-sm font-medium rounded-full transition-all ${
                    activeTab === 'festivals'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:text-primary dark:text-gray-300'
                  }`}
                >
                  <FaMusic className="mr-2" />
                  Music Festivals
                </button>
                <button
                  onClick={() => setActiveTab('conferences')}
                  className={`flex items-center px-6 py-3 text-sm font-medium rounded-full transition-all ${
                    activeTab === 'conferences'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:text-primary dark:text-gray-300'
                  }`}
                >
                  <FaBuilding className="mr-2" />
                  Conferences
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                {conversationCategories[activeTab].title} Features:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Real-time schedule updates</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Location-specific information</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Instant access via SMS</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Right Side: Phone with Scrolling Conversations */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={3}
            className="flex justify-center"
          >
            <div className="phone-mockup w-full aspect-[9/19] max-w-[320px] bg-white dark:bg-gray-800 shadow-2xl">
              {/* Phone Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-[2.5rem] flex items-center justify-between px-6">
                <div className="text-white text-xs">9:41</div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                  <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                  <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                </div>
              </div>
              
              <div className="absolute inset-0 p-4 overflow-hidden">
                {/* SMS App Header */}
                <div className="bg-gray-100 rounded-2xl h-full flex flex-col">
                  <div className="bg-primary p-3 rounded-t-2xl text-white">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="font-bold">EG</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold">EventGuide.ai</div>
                        <div className="text-xs opacity-80">SMS • Now</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* SMS Conversation */}
                  <div className="flex-1 p-3 overflow-y-auto bg-gray-100">
                    <div className="text-center text-xs text-gray-500 mb-2">Today, 3:15 PM</div>
                    
                    {/* Welcome Message */}
                    <div className="flex justify-start mb-4">
                      <div className="bg-[#E9E9EB] text-black rounded-2xl rounded-tl-sm p-3 max-w-[80%] shadow-md">
                        <p className="text-sm">👋 Welcome to EventGuide.ai! Ask me anything about the {activeTab === 'festivals' ? 'festival' : 'conference'}.</p>
                      </div>
                    </div>
                    
                    {/* Dynamic Conversations */}
                    {visibleConversations.map((convo, index) => (
                      <div key={index} className="mb-4">
                        {/* Question Bubble */}
                        <div className="flex justify-end mb-2">
                          <div className="bg-[#1982FC] text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] shadow-md">
                            <p className="text-sm">{convo.question}</p>
                          </div>
                        </div>
                        
                        {/* Answer Bubble */}
                        <div className="flex justify-start">
                          <div className="bg-[#E9E9EB] text-black rounded-2xl rounded-tl-sm p-3 max-w-[80%] shadow-md">
                            <p className="text-sm">{convo.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Message Input */}
                  <div className="p-3 border-t border-gray-200 bg-white rounded-b-2xl">
                    <div className="flex items-center bg-gray-100 rounded-full p-2">
                      <input 
                        type="text" 
                        className="flex-1 bg-transparent outline-none px-3 text-sm" 
                        placeholder="Message EventGuide.ai..." 
                        disabled 
                      />
                      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
                        <FaPaperPlane size={14} />
                      </button>
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

export default ShowMe; 
