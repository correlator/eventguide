import { FaCommentDots } from 'react-icons/fa';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

const Logo = ({ className = '', iconSize = 24, textSize = 'text-xl md:text-2xl' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2 text-primary">
        <FaCommentDots size={iconSize} />
      </div>
      <span className={`font-bold ${textSize}`}>
        Event<span className="text-primary">Guide</span>
        <span className="text-secondary">.ai</span>
      </span>
    </div>
  );
};

export default Logo;
