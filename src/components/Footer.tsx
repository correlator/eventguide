import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">EventGuide<span className="text-secondary">.ai</span></span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Powered by</span>
            <Link href="https://gravity.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Image 
                src="/gravity.png" 
                alt="Gravity" 
                width={100} 
                height={30} 
                className="h-6 w-auto object-contain" 
              />
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} EventGuide.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
