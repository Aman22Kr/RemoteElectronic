import React from 'react';

interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  aspectSquare?: boolean;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'Remote Setup & IR Pairing Demonstration',
  subtitle = 'Video playback placeholder frame',
  aspectSquare = true
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Blank square space as requested */}
      <div 
        className={`w-full ${aspectSquare ? 'aspect-square max-w-[420px]' : 'aspect-video'} bg-slate-900/5 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-6 text-center transition-all hover:bg-slate-900/10`}
        aria-label="Video space placeholder"
      >
        {/* Intentionally blank square space as specifically requested by user */}
        <div className="w-16 h-16 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-3">
          <div className="w-6 h-6 border-2 border-slate-400 rounded-sm" />
        </div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="text-xs text-slate-500 mt-1 max-w-xs">{subtitle}</p>
      </div>
    </div>
  );
};
