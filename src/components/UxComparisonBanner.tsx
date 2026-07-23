import React from 'react';
import { Sparkles, ArrowRight, MousePointerClick, CheckCircle2, Zap, ShieldAlert, Sliders } from 'lucide-react';

interface UxComparisonBannerProps {
  uxMode: 'before' | 'after';
  onToggleMode: (mode: 'before' | 'after') => void;
  onOpenProfile: () => void;
}

export const UxComparisonBanner: React.FC<UxComparisonBannerProps> = ({
  uxMode,
  onToggleMode,
  onOpenProfile,
}) => {
  return (
    <div className="w-full bg-[#1c1b1b] text-white border-b border-[#313030] shadow-md sticky top-16 z-30 transition-all">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left info badge */}
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-[#2B5A64] text-white shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-caps uppercase tracking-wider text-[#a1d0db]">
                UX Showcase Mode
              </span>
              <span
                className={`text-[9px] font-mono-caps font-bold px-2 py-0.5 rounded-full uppercase ${
                  uxMode === 'before'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                }`}
              >
                {uxMode === 'before' ? 'BEFORE: Manual Size Guide' : 'AFTER: Smart Auto-Recommend'}
              </span>
            </div>
            <p className="text-xs text-[#dae1e3] mt-0.5 font-['Hanken_Grotesk']">
              {uxMode === 'before'
                ? 'Standard flow: Click link → Open popup → Enter height/weight → Calculate → Select size'
                : 'Enhanced flow: Auto-detects profile (178cm/72kg) & past orders → Auto-selects Size M'}
            </p>
          </div>
        </div>

        {/* Right Toggle Switcher */}
        <div className="flex items-center gap-2 bg-[#313030] p-1 rounded-lg shrink-0 border border-[#586061]/50">
          <button
            onClick={() => onToggleMode('before')}
            className={`px-3 py-1.5 text-xs font-mono-caps rounded transition-all flex items-center gap-1.5 ${
              uxMode === 'before'
                ? 'bg-amber-600 text-white font-bold shadow'
                : 'text-[#c1c8ca] hover:text-white'
            }`}
          >
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>Before (Standard)</span>
          </button>

          <button
            onClick={() => onToggleMode('after')}
            className={`px-3 py-1.5 text-xs font-mono-caps rounded transition-all flex items-center gap-1.5 ${
              uxMode === 'after'
                ? 'bg-[#2B5A64] text-white font-bold shadow'
                : 'text-[#c1c8ca] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>After (Enhanced)</span>
          </button>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="bg-[#2B5A64]/30 border-t border-[#313030] py-1.5 px-4 text-[11px] font-mono-caps text-[#dae1e3]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span>
              <strong className="text-white">Steps to size: </strong>
              <span className={uxMode === 'before' ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                {uxMode === 'before' ? '5 Manual Steps' : '0 Steps (Automated)'}
              </span>
            </span>
            <span>
              <strong className="text-white">Profile Memory: </strong>
              <span className={uxMode === 'before' ? 'text-amber-400' : 'text-emerald-400 font-bold'}>
                {uxMode === 'before' ? 'None (re-enter each time)' : 'Hilda Han (178cm / 72kg)'}
              </span>
            </span>
          </div>

          {uxMode === 'after' && (
            <button
              onClick={onOpenProfile}
              className="text-[#9fceda] hover:text-white underline text-[10px] font-mono-caps flex items-center gap-1"
            >
              <Sliders className="w-3 h-3" />
              <span>View Hilda's Fit Profile & Order Memory</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
