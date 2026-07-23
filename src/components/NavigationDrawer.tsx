import React from 'react';
import { X, Sparkles, Dumbbell, Sun, Briefcase, Leaf, ChevronRight, Search } from 'lucide-react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onViewAllProducts: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  activeCategory,
  onSelectCategory,
  onViewAllProducts
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'New Arrivals', name: 'New Arrivals', icon: Sparkles },
    { id: 'Performance', name: 'Performance', icon: Dumbbell },
    { id: 'Lifestyle', name: 'Lifestyle', icon: Sun },
    { id: 'Accessories', name: 'Accessories', icon: Briefcase },
    { id: 'Sustainability', name: 'Sustainability', icon: Leaf },
  ];

  return (
    <div className="fixed inset-0 z-[70] flex">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Slide-out drawer panel */}
      <aside className="relative w-80 max-w-[85vw] bg-[#fcf9f8] h-full shadow-2xl flex flex-col p-6 z-10 animate-in slide-in-from-left duration-300 border-r border-[#e5e2e1]">
        {/* Header inside drawer */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#e5e2e1]">
          <div>
            <h2 className="font-bold text-2xl tracking-tighter text-[#1c1b1b] font-['Hanken_Grotesk']">
              HANEEZA
            </h2>
            <p className="text-[10px] font-mono-caps text-[#586061] tracking-widest uppercase">
              Performance Apparel
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#586061] hover:text-[#1c1b1b] hover:bg-[#f0eded] rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#71787b]" />
          <input
            type="text"
            placeholder="Search hoodies, joggers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#f0eded] border border-[#c0c8ca] rounded text-[#1c1b1b] placeholder:text-[#71787b] focus:outline-none focus:border-[#2B5A64]"
          />
        </div>

        {/* Navigation items */}
        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onClose();
                }}
                className={`flex items-center justify-between p-3 rounded text-left text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2B5A64]/10 text-[#2B5A64] font-semibold border-l-4 border-[#2B5A64]'
                    : 'text-[#586061] hover:bg-[#f0eded] hover:text-[#1c1b1b]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#2B5A64]' : 'text-[#71787b]'}`} />
                  <span>{cat.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#c0c8ca]" />
              </button>
            );
          })}

          <div className="my-4 border-t border-[#e5e2e1]" />

          <button
            onClick={() => {
              onViewAllProducts();
              onClose();
            }}
            className="w-full py-3 bg-[#2B5A64] text-white text-xs font-mono-caps tracking-widest uppercase rounded hover:opacity-90 transition-opacity text-center font-bold"
          >
            Explore All Products
          </button>
        </nav>

        {/* Footer in drawer */}
        <div className="pt-4 border-t border-[#e5e2e1] text-xs text-[#586061] space-y-2 font-mono-caps">
          <div className="flex justify-between">
            <span>Free Shipping</span>
            <span className="text-[#2B5A64]">Orders &gt; Rs. 5,000</span>
          </div>
          <div className="flex justify-between">
            <span>Support</span>
            <span className="underline cursor-pointer">Contact Us</span>
          </div>
        </div>
      </aside>
    </div>
  );
};
