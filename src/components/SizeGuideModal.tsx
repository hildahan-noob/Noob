import React, { useState } from 'react';
import { X, Ruler, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, productTitle }) => {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [userHeight, setUserHeight] = useState('178');
  const [userWeight, setUserWeight] = useState('72');
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  if (!isOpen) return null;

  const calculateSize = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(userWeight);
    if (isNaN(w)) return;
    if (w < 60) setRecommendedSize('S');
    else if (w < 75) setRecommendedSize('M');
    else if (w < 88) setRecommendedSize('L');
    else setRecommendedSize('XL');
  };

  const measurements = [
    { size: 'S', chest: unit === 'in' ? '36 - 38"' : '91 - 96 cm', waist: unit === 'in' ? '29 - 31"' : '74 - 79 cm', length: unit === 'in' ? '27"' : '68 cm' },
    { size: 'M', chest: unit === 'in' ? '39 - 41"' : '99 - 104 cm', waist: unit === 'in' ? '32 - 34"' : '81 - 86 cm', length: unit === 'in' ? '28"' : '71 cm' },
    { size: 'L', chest: unit === 'in' ? '42 - 44"' : '107 - 112 cm', waist: unit === 'in' ? '35 - 37"' : '89 - 94 cm', length: unit === 'in' ? '29"' : '74 cm' },
    { size: 'XL', chest: unit === 'in' ? '45 - 47"' : '114 - 119 cm', waist: unit === 'in' ? '38 - 40"' : '96 - 101 cm', length: unit === 'in' ? '30"' : '76 cm' },
  ];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#fcf9f8] rounded-xl shadow-2xl overflow-hidden border border-[#e5e2e1] z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 bg-white border-b border-[#e5e2e1]">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#2B5A64]" />
            <div>
              <h3 className="font-bold text-base text-[#1c1b1b] uppercase tracking-tight">
                SIZE GUIDE & MEASUREMENTS
              </h3>
              <p className="text-xs text-[#586061] font-mono-caps">{productTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#586061] hover:text-[#1c1b1b] hover:bg-[#f0eded] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Unit Toggle */}
          <div className="flex justify-between items-center bg-[#f0eded] p-1.5 rounded-lg">
            <span className="text-xs font-mono-caps text-[#586061] pl-2 font-medium">
              Measurement Units
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setUnit('in')}
                className={`px-3 py-1 text-xs font-mono-caps rounded transition-all ${
                  unit === 'in'
                    ? 'bg-[#2B5A64] text-white font-bold shadow-sm'
                    : 'text-[#586061] hover:text-[#1c1b1b]'
                }`}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 text-xs font-mono-caps rounded transition-all ${
                  unit === 'cm'
                    ? 'bg-[#2B5A64] text-white font-bold shadow-sm'
                    : 'text-[#586061] hover:text-[#1c1b1b]'
                }`}
              >
                Centimeters
              </button>
            </div>
          </div>

          {/* Measurements Table */}
          <div className="overflow-x-auto border border-[#e5e2e1] rounded-lg bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f0eded] text-[#1c1b1b] font-mono-caps uppercase">
                <tr>
                  <th className="p-3 border-b border-[#e5e2e1]">Size</th>
                  <th className="p-3 border-b border-[#e5e2e1]">Chest</th>
                  <th className="p-3 border-b border-[#e5e2e1]">Waist</th>
                  <th className="p-3 border-b border-[#e5e2e1]">Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e2e1] font-mono-caps text-[#40484a]">
                {measurements.map((m) => (
                  <tr
                    key={m.size}
                    className={`hover:bg-[#fcf9f8] ${
                      recommendedSize === m.size ? 'bg-[#2B5A64]/10 font-bold text-[#2B5A64]' : ''
                    }`}
                  >
                    <td className="p-3 font-bold text-[#1c1b1b] flex items-center gap-1">
                      {m.size}
                      {recommendedSize === m.size && (
                        <Check className="w-3.5 h-3.5 text-[#2B5A64]" />
                      )}
                    </td>
                    <td className="p-3">{m.chest}</td>
                    <td className="p-3">{m.waist}</td>
                    <td className="p-3">{m.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fit Calculator Quiz */}
          <div className="bg-white p-4 rounded-lg border border-[#e5e2e1] space-y-3">
            <h4 className="font-bold text-xs font-mono-caps text-[#1c1b1b] uppercase">
              Smart Size Calculator
            </h4>
            <form onSubmit={calculateSize} className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-mono-caps text-[#586061] mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={userHeight}
                  onChange={(e) => setUserHeight(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-[#c0c8ca] rounded bg-[#fcf9f8] focus:outline-none focus:border-[#2B5A64]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono-caps text-[#586061] mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={userWeight}
                  onChange={(e) => setUserWeight(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-[#c0c8ca] rounded bg-[#fcf9f8] focus:outline-none focus:border-[#2B5A64]"
                />
              </div>
              <button
                type="submit"
                className="col-span-2 py-2 bg-[#2B5A64] text-white font-mono-caps text-xs rounded uppercase font-semibold hover:opacity-90"
              >
                Calculate Recommended Size
              </button>
            </form>

            {recommendedSize && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-center">
                <p className="text-xs text-emerald-800">
                  Based on your height & weight, your ideal fit is size{' '}
                  <strong className="text-emerald-950 text-sm">{recommendedSize}</strong> (Athletic Fit)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
