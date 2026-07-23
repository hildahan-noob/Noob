import React from 'react';
import { Menu, ShoppingBag, Search } from 'lucide-react';

interface HeaderProps {
  onOpenNav: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onLogoClick: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNav,
  onOpenCart,
  cartCount,
  onLogoClick,
  onOpenSearch
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#fcf9f8]/95 backdrop-blur-md border-b border-[#e5e2e1]/60 h-16 px-5 flex items-center justify-between transition-all">
      <button
        onClick={onOpenNav}
        className="text-[#2B5A64] hover:opacity-80 p-2 -ml-2 rounded-lg transition-all active:scale-95"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 stroke-[1.75]" />
      </button>

      <button
        onClick={onLogoClick}
        className="text-center group flex flex-col items-center"
      >
        <span className="font-bold text-2xl tracking-tighter text-[#1c1b1b] font-['Hanken_Grotesk'] leading-none group-hover:text-[#2B5A64] transition-colors">
          HANEEZA
        </span>
        <span className="font-mono-caps text-[9px] tracking-[0.25em] text-[#586061] mt-0.5 uppercase">
          Activewear
        </span>
      </button>

      <div className="flex items-center gap-1">
        {onOpenSearch && (
          <button
            onClick={onOpenSearch}
            className="text-[#2B5A64] hover:opacity-80 p-2 rounded-lg transition-all active:scale-95"
            aria-label="Search items"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>
        )}

        <button
          onClick={onOpenCart}
          className="relative text-[#2B5A64] hover:opacity-80 p-2 -mr-2 rounded-lg transition-all active:scale-95"
          aria-label="View Shopping Bag"
        >
          <ShoppingBag className="w-6 h-6 stroke-[1.75]" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 w-5 h-5 bg-[#2B5A64] text-white text-[10px] font-mono-caps font-bold rounded-full flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
