import React from 'react';
import { Menu, ShoppingBag, Search, Sparkles, Layout } from 'lucide-react';

interface HeaderProps {
  onOpenNav: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onLogoClick: () => void;
  onOpenSearch?: () => void;
  appMode?: 'showcase' | 'live';
  onToggleAppMode?: (mode: 'showcase' | 'live') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNav,
  onOpenCart,
  cartCount,
  onLogoClick,
  onOpenSearch,
  appMode = 'showcase',
  onToggleAppMode
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#fcf9f8]/95 backdrop-blur-md border-b border-[#e5e2e1]/60 h-16 px-4 sm:px-6 flex items-center justify-between transition-all">
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenNav}
          className="text-[#2B5A64] hover:opacity-80 p-2 -ml-2 rounded-lg transition-all active:scale-95"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 stroke-[1.75]" />
        </button>

        {onToggleAppMode && (
          <div className="hidden md:flex items-center gap-1 bg-[#f0eded] p-1 rounded-lg border border-[#e5e2e1] text-xs font-mono-caps">
            <button
              onClick={() => onToggleAppMode('showcase')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                appMode === 'showcase'
                  ? 'bg-[#2B5A64] text-white font-bold shadow-sm'
                  : 'text-[#586061] hover:text-[#1c1b1b]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Showcase</span>
            </button>
            <button
              onClick={() => onToggleAppMode('live')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                appMode === 'live'
                  ? 'bg-[#2B5A64] text-white font-bold shadow-sm'
                  : 'text-[#586061] hover:text-[#1c1b1b]'
              }`}
            >
              <Layout className="w-3 h-3" />
              <span>Live App</span>
            </button>
          </div>
        )}
      </div>

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
        {onToggleAppMode && (
          <div className="md:hidden flex items-center bg-[#f0eded] p-1 rounded-lg border border-[#e5e2e1] text-[10px] font-mono-caps mr-1">
            <button
              onClick={() => onToggleAppMode(appMode === 'showcase' ? 'live' : 'showcase')}
              className="px-2 py-0.5 bg-[#2B5A64] text-white font-bold rounded flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{appMode === 'showcase' ? 'Live' : 'Showcase'}</span>
            </button>
          </div>
        )}

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

