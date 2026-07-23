import React from 'react';
import { X, User, ShoppingBag, Ruler, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { UserProfile } from '../types';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  userProfile,
  onUpdateProfile,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#fcf9f8] rounded-xl shadow-2xl overflow-hidden border border-[#e5e2e1] z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 bg-white border-b border-[#e5e2e1]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2B5A64]/10 text-[#2B5A64] flex items-center justify-center font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1c1b1b] font-['Hanken_Grotesk'] uppercase tracking-tight">
                {userProfile.name}'s Fit Profile
              </h3>
              <p className="text-[11px] text-[#586061] font-mono-caps">
                Auto-Sizing & Past Purchase Memory
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#586061] hover:text-[#1c1b1b] hover:bg-[#f0eded] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Smart Recommendation Status Badge */}
          <div className="p-3.5 bg-[#2B5A64]/10 border border-[#2B5A64]/30 rounded-lg flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#2B5A64] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-[#2B5A64] font-mono-caps uppercase block">
                Auto-Recommendation Active
              </span>
              <p className="text-[#40484a] mt-0.5 leading-relaxed font-['Hanken_Grotesk']">
                Haneeza remembers your measurements and past sizing feedback to automatically pre-select your ideal fit on every product page.
              </p>
            </div>
          </div>

          {/* User Saved Body Measurements */}
          <div className="bg-white p-4 rounded-lg border border-[#e5e2e1] space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-mono-caps text-xs text-[#1c1b1b] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-[#2B5A64]" />
                Saved Body Measurements
              </h4>
              <span className="text-[10px] font-mono-caps bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-[#fcf9f8] rounded border border-[#e5e2e1]">
                <span className="block text-[10px] font-mono-caps text-[#586061]">Height</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <input
                    type="number"
                    value={userProfile.heightCm}
                    onChange={(e) =>
                      onUpdateProfile({
                        ...userProfile,
                        heightCm: Number(e.target.value),
                      })
                    }
                    className="w-16 font-bold text-sm text-[#1c1b1b] bg-transparent border-b border-[#2B5A64] focus:outline-none"
                  />
                  <span className="text-[10px] text-[#586061]">cm</span>
                </div>
              </div>

              <div className="p-2.5 bg-[#fcf9f8] rounded border border-[#e5e2e1]">
                <span className="block text-[10px] font-mono-caps text-[#586061]">Weight</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <input
                    type="number"
                    value={userProfile.weightKg}
                    onChange={(e) =>
                      onUpdateProfile({
                        ...userProfile,
                        weightKg: Number(e.target.value),
                      })
                    }
                    className="w-16 font-bold text-sm text-[#1c1b1b] bg-transparent border-b border-[#2B5A64] focus:outline-none"
                  />
                  <span className="text-[10px] text-[#586061]">kg</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono-caps text-[#586061] mb-1">
                Fit Preference
              </label>
              <select
                value={userProfile.fitPreference}
                onChange={(e) =>
                  onUpdateProfile({
                    ...userProfile,
                    fitPreference: e.target.value as any,
                  })
                }
                className="w-full text-xs font-mono-caps p-2 bg-[#fcf9f8] border border-[#c0c8ca] rounded focus:outline-none focus:border-[#2B5A64] text-[#1c1b1b]"
              >
                <option value="Athletic Fit">Athletic Fit (Slightly tapered)</option>
                <option value="Relaxed Fit">Relaxed Fit (Roomier cut)</option>
                <option value="Slim Fit">Slim Fit (Snug cut)</option>
              </select>
            </div>
          </div>

          {/* Past Purchase Sizing History */}
          <div className="bg-white p-4 rounded-lg border border-[#e5e2e1] space-y-3">
            <h4 className="font-mono-caps text-xs text-[#1c1b1b] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-[#2B5A64]" />
              Purchase & Fit History
            </h4>

            <div className="space-y-2.5">
              {userProfile.pastOrders.map((order, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#fcf9f8] rounded border border-[#e5e2e1] text-xs flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-[#1c1b1b] block">{order.productTitle}</span>
                    <span className="text-[10px] font-mono-caps text-[#586061]">
                      Size: <strong className="text-[#2B5A64]">{order.sizeBought}</strong> • Ordered {order.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-1 rounded text-[10px] font-mono-caps font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{order.fitFeedback}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 bg-[#2B5A64] text-white font-mono-caps text-xs uppercase tracking-widest rounded font-bold hover:opacity-90 transition-opacity"
          >
            Save & Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
