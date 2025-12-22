interface IconProps {
  className?: string;
}

export function BuildingIcon({ className = 'w-12 h-12' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" />
      <circle cx="12" cy="6" r="0.5" fill="currentColor" />
      <circle cx="18" cy="6" r="0.5" fill="currentColor" />
      <circle cx="6" cy="12" r="0.5" fill="currentColor" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      <circle cx="18" cy="12" r="0.5" fill="currentColor" />
      <circle cx="6" cy="18" r="0.5" fill="currentColor" />
      <circle cx="12" cy="18" r="0.5" fill="currentColor" />
      <circle cx="18" cy="18" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function SafetyIcon({ className = 'w-12 h-12' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 2L3 7V12C3 18 12 22 12 22S21 18 21 12V7L12 2Z" />
      <line x1="12" y1="6" x2="12" y2="14" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  );
}

export function QualityIcon({ className = 'w-12 h-12' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <polyline points="20 6 9 17 4 12" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function TimeIcon({ className = 'w-12 h-12' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ToolsIcon({ className = 'w-12 h-12' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M14.4 14.4L9.6 9.6M6 18C3 15 3 9 9 3C15 3 15 9 12 12" />
      <circle cx="18" cy="6" r="2" />
    </svg>
  );
}

export function CheckIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
