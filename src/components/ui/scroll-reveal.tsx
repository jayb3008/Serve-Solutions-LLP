
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  animation?: 'fade-in' | 'slide-in' | 'slide-up';
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  threshold = 0.1,
  animation = 'fade-in',
  delay = 0,
  className = '',
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in':
        return 'animate-slide-in';
      case 'slide-up':
        return 'animate-slide-up';
      default:
        return 'animate-fade-in';
    }
  };

  const getDelayStyle = () => {
    return {
      animationDelay: `${delay}ms`,
    };
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={getDelayStyle()}
    >
      {children}
    </div>
  );
};
