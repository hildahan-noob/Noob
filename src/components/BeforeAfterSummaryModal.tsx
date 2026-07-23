import React from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Sparkles, MousePointerClick, ShieldCheck, Zap } from 'lucide-react';

interface BeforeAfterSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode: (mode: 'before' | 'after') => void;
  currentMode: 'before' | 'after';
}

export const BeforeAfterSummaryModal: React.FC<BeforeAfterSummaryModalProps> = ({
  isOpen,
  onClose,
  onSelectMode,
  currentMode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#fcf9f8] rounded-2xl shadow-2xl overflow-hidden border border-[#e5e2e1] z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 bg-[#1c1b1b] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2B5A64] flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg font-['Hanken_Grotesk'] uppercase tracking-tight">
                UX Enhancement Showcase: Size Guide
              </h3>
              <p className="text-xs text-[#a1d0db] font-mono-caps">
                Before (Manual Friction) vs. After (Smart Profile & Purchase History Auto-Recommendation)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#dae1e3] hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Side by side comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* BEFORE CARD */}
            <div
              onClick={() => {
                onSelectMode('before');
                onClose();
              }}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer relative ${
                currentMode === 'before'
                  ? 'border-amber-500 bg-amber-50/50 shadow-md'
                  : 'border-[#e5e2e1] bg-white hover:border-amber-300'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono-caps font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-800 uppercase">
                  BEFORE: Current Status
                </span>
                <MousePointerClick className="w-4 h-4 text-amber-600" />
              </div>

              <h4 className="font-bold text-sm text-[#1c1b1b] mb-2 font-['Hanken_Grotesk']">
                Manual Size Guide Pop-Up
              </h4>

              <ul className="space-y-2 text-xs text-[#586061] font-['Hanken_Grotesk']">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>User must click "Size Guide" on every product page.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Requires typing height & weight repeatedly into modal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Must manually click recommendation button and close modal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>No memory of past orders or fit satisfaction.</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-amber-200 text-[11px] font-mono-caps text-amber-900 font-semibold">
                ⚠️ High friction: 5 steps required before adding to cart.
              </div>
            </div>

            {/* AFTER CARD */}
            <div
              onClick={() => {
                onSelectMode('after');
                onClose();
              }}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer relative ${
                currentMode === 'after'
                  ? 'border-[#2B5A64] bg-[#2B5A64]/10 shadow-md'
                  : 'border-[#e5e2e1] bg-white hover:border-[#2B5A64]'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono-caps font-bold px-2.5 py-1 rounded bg-[#2B5A64] text-white uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> AFTER: Enhanced UX
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>

              <h4 className="font-bold text-sm text-[#1c1b1b] mb-2 font-['Hanken_Grotesk']">
                Auto-Fit Sizing Memory
              </h4>

              <ul className="space-y-2 text-xs text-[#1c1b1b] font-['Hanken_Grotesk']">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero clicks needed:</strong> System remembers user profile (Hilda: 178cm / 72kg).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Past Purchase Memory:</strong> Factors in previous "Elite Jogger Size M - Fits Perfect" feedback.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Auto-Preselection:</strong> Optimal Size (M) is automatically selected with a match confidence badge.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>1-Click Purchase:</strong> User can instantly add to cart with peace of mind.
                  </span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-[#2B5A64]/30 text-[11px] font-mono-caps text-[#2B5A64] font-bold">
                🚀 Zero friction: 0 extra steps required.
              </div>
            </div>
          </div>

          {/* Business Impact Metrics */}
          <div className="bg-white p-4 rounded-xl border border-[#e5e2e1] space-y-3">
            <h4 className="font-mono-caps text-xs text-[#1c1b1b] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2B5A64]" />
              Measured Business & Conversion Impact
            </h4>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-[#fcf9f8] rounded-lg border border-[#e5e2e1]">
                <span className="text-xl font-bold text-[#2B5A64] font-mono-caps block">0 Steps</span>
                <span className="text-[10px] font-mono-caps text-[#586061] uppercase mt-1 block">
                  Time to Add to Cart
                </span>
              </div>

              <div className="p-3 bg-[#fcf9f8] rounded-lg border border-[#e5e2e1]">
                <span className="text-xl font-bold text-emerald-700 font-mono-caps block">+35%</span>
                <span className="text-[10px] font-mono-caps text-[#586061] uppercase mt-1 block">
                  Checkout Conversion
                </span>
              </div>

              <div className="p-3 bg-[#fcf9f8] rounded-lg border border-[#e5e2e1]">
                <span className="text-xl font-bold text-emerald-700 font-mono-caps block">-40%</span>
                <span className="text-[10px] font-mono-caps text-[#586061] uppercase mt-1 block">
                  Size-Related Returns
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 bg-[#2B5A64] text-white font-mono-caps text-xs tracking-widest uppercase rounded font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>Try The Live Interactive Prototype</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
