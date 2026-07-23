import React from 'react';

interface FooterProps {
  onOpenSizeGuide: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSizeGuide, onSelectCategory }) => {
  return (
    <footer className="w-full py-12 bg-[#f6f3f2] border-t border-[#dde4e6] flex flex-col items-center gap-6 px-5 mt-12">
      <button
        onClick={() => onSelectCategory('All')}
        className="font-bold text-lg tracking-widest text-[#1c1b1b] font-mono-caps hover:text-[#2B5A64] transition-colors uppercase"
      >
        HANEEZA
      </button>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
        <button
          onClick={() => alert('Shipping Information: Express 2-3 day delivery across all orders. Free shipping on orders over Rs. 5,000.')}
          className="font-mono-caps text-xs text-[#586061] hover:text-[#2B5A64] transition-colors uppercase tracking-wider"
        >
          Shipping
        </button>
        <button
          onClick={() => alert('Returns Policy: 30-day hassle-free return or exchange for all unworn technical apparel.')}
          className="font-mono-caps text-xs text-[#586061] hover:text-[#2B5A64] transition-colors uppercase tracking-wider"
        >
          Returns
        </button>
        <button
          onClick={onOpenSizeGuide}
          className="font-mono-caps text-xs text-[#586061] hover:text-[#2B5A64] transition-colors uppercase tracking-wider"
        >
          Size Guide
        </button>
        <button
          onClick={() => alert('Contact Haneeza Support: support@haneeza-activewear.com | +92 300 1234567')}
          className="font-mono-caps text-xs text-[#586061] hover:text-[#2B5A64] transition-colors uppercase tracking-wider"
        >
          Contact
        </button>
      </div>

      <p className="font-mono-caps text-[10px] text-[#586061] text-center tracking-widest">
        © 2024 HANEEZA ACTIVEWEAR. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};
