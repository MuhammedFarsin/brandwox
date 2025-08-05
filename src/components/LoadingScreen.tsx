import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [textStep, setTextStep] = useState(0);

  const loadingTexts = [
    "Initializing creativity...",
    "Crafting digital experiences...",
    "Building your vision...",
    "Preparing excellence...",
    "Almost ready..."
  ];

  useEffect(() => {
    // Text animation timer
    const textTimer = setInterval(() => {
      setTextStep(prev => (prev + 1) % loadingTexts.length);
    }, 1000);

    // Progress timer
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          clearInterval(textTimer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative text-center max-w-md mx-auto px-6">
        {/* Main Brand Animation */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent bg-300% animate-[gradient-shift_3s_ease-in-out_infinite]">
                  Brand
                </span>
              </span>
              <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent bg-300% animate-[gradient-shift_3s_ease-in-out_infinite_0.5s]">
                  wox
                </span>
              </span>
            </h1>
            
            {/* Glowing line effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-[glow-line_2s_ease-in-out_infinite]"></div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mt-4 font-medium animate-[fadeInUp_0.8s_ease-out_0.4s_both] tracking-wider">
            Digital Solutions
          </p>
        </div>
        
        {/* Animated Progress Section */}
        <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-80 max-w-full h-1 bg-muted/50 rounded-full overflow-hidden shadow-inner mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-pulse opacity-75"></div>
                <div className="absolute right-0 top-0 h-full w-4 bg-white/30 rounded-full blur-sm"></div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground/70 mt-2 font-mono">
              {Math.round(progress)}%
            </div>
          </div>
          
          {/* Animated Loading Text */}
          <div className="h-6 flex items-center justify-center">
            <p 
              key={textStep}
              className="text-sm text-muted-foreground font-medium animate-[textFade_1s_ease-in-out] tracking-wide"
            >
              {loadingTexts[textStep]}
            </p>
          </div>
        </div>
        
        {/* Floating dots animation */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;