import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface CatalogViewProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectProduct: (p: Product) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low'>('featured');

  const categories = ['All', 'Performance', 'New Arrivals', 'Lifestyle', 'Accessories', 'Sustainability'];

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      p.category === selectedCategory ||
      (selectedCategory === 'New Arrivals' && p.isNewArrival);

    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.categoryTag.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'low-high') return a.price - b.price;
    if (sortBy === 'high-low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-5 py-6 space-y-6">
      {/* Category Banner */}
      <div className="border-b border-[#e5e2e1] pb-4">
        <span className="font-mono-caps text-xs text-[#2B5A64] uppercase tracking-widest block font-bold">
          HANEEZA COLLECTION
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1b1b] uppercase font-['Hanken_Grotesk'] tracking-tight mt-1">
          {selectedCategory === 'All' ? 'All Activewear & Gear' : selectedCategory}
        </h2>
        <p className="text-xs text-[#586061] mt-1 font-mono-caps">
          Showing {sortedProducts.length} high-performance technical items
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 text-xs font-mono-caps uppercase whitespace-nowrap rounded-sm transition-all ${
              selectedCategory === cat
                ? 'bg-[#2B5A64] text-white font-bold shadow-sm'
                : 'bg-[#f0eded] text-[#586061] hover:text-[#1c1b1b]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search and Sort Row */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#71787b]" />
          <input
            type="text"
            placeholder="Search activewear..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#c0c8ca] rounded focus:outline-none focus:border-[#2B5A64]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs font-mono-caps">
          <SlidersHorizontal className="w-4 h-4 text-[#586061]" />
          <span className="text-[#586061]">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-[#c0c8ca] rounded px-3 py-1.5 focus:outline-none focus:border-[#2B5A64] text-[#1c1b1b]"
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {sortedProducts.length === 0 ? (
        <div className="py-16 text-center text-[#586061]">
          <p className="text-sm">No items found matching your filter.</p>
          <button
            onClick={() => {
              onSelectCategory('All');
              setSearchTerm('');
            }}
            className="mt-3 px-4 py-2 bg-[#2B5A64] text-white text-xs font-mono-caps rounded uppercase font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {sortedProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="flex flex-col gap-2 group cursor-pointer bg-white p-2 rounded border border-[#e5e2e1] hover:shadow-md transition-all"
            >
              <div className="aspect-[3/4] bg-[#F7F8F8] overflow-hidden rounded-sm relative">
                <img
                  src={prod.colors[0]?.image || prod.heroImages[0]}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {prod.isNewArrival && (
                  <span className="absolute top-2 left-2 bg-[#2B5A64] text-white px-2 py-0.5 text-[9px] font-mono-caps uppercase font-bold">
                    NEW
                  </span>
                )}
              </div>

              <div>
                <p className="font-mono-caps text-[10px] text-[#586061] uppercase tracking-wider">
                  {prod.categoryTag}
                </p>
                <h3 className="font-bold text-sm text-[#1c1b1b] font-['Hanken_Grotesk'] uppercase mt-0.5 group-hover:text-[#2B5A64] transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs font-semibold text-[#2B5A64] font-['Hanken_Grotesk'] mt-0.5">
                  Rs. {prod.price.toLocaleString()}.00
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
