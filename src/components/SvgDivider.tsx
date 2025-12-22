interface SvgDividerProps {
  variant?: 'wave' | 'angle' | 'curve';
  flip?: boolean;
  className?: string;
}

export function SvgDivider({ variant = 'angle', flip = false, className = '' }: SvgDividerProps) {
  const baseClass = `w-full h-16 md:h-24 ${className}`;
  
  if (variant === 'angle') {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={baseClass}
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path
          d="M0,0 L1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-background"
        />
      </svg>
    );
  }

  if (variant === 'wave') {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={baseClass}
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path
          d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-background"
        />
      </svg>
    );
  }

  if (variant === 'curve') {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={baseClass}
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path
          d="M0,30 Q600,90 1200,30 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-background"
        />
      </svg>
    );
  }

  return null;
}
