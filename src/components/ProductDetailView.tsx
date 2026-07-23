import React, { useState } from 'react';
import { ChevronDown, Check, Sparkles, Truck, ShieldCheck, RefreshCw, UserCheck, Info, Sparkle, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { Product, ColorOption, UserProfile } from '../types';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: ColorOption) => void;
  onOpenSizeGuide: () => void;
  onSelectRelatedProduct: (product: Product) => void;
  allProducts: Product[];
  uxMode: 'before' | 'after';
  userProfile: UserProfile;
  onOpenProfile: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onAddToCart,
  onOpenSizeGuide,
  onSelectRelatedProduct,
  allProducts,
  uxMode,
  userProfile,
  onOpenProfile
}) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    product.colors[0] || { name: 'Deep Teal', hex: '#2B5A64', image: product.heroImages[0] }
  );

  // Auto-recommendation logic for 'after' mode
  const recommendedSize = 'M'; // Calculated for 178cm / 72kg

  const [selectedSize, setSelectedSize] = useState<string>(
    uxMode === 'after' ? recommendedSize : 'M'
  );
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Accordion states
  const [openDescription, setOpenDescription] = useState(true);
  const [openDetails, setOpenDetails] = useState(false);
  const [openCare, setOpenCare] = useState(false);

  // Sync selected size if uxMode changes
  React.useEffect(() => {
    if (uxMode === 'after') {
      setSelectedSize(recommendedSize);
    }
  }, [uxMode]);

  // Update selected color when product changes
  React.useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(uxMode === 'after' ? recommendedSize : product.sizes[1] || product.sizes[0]);
    }
    setActiveImageIdx(0);
  }, [product, uxMode]);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 2);

  // Current main display image
  const displayImage = selectedColor.image || product.heroImages[activeImageIdx] || product.heroImages[0];

  return (
    <div className="w-full max-w-2xl mx-auto pb-16">
      {/* Hero Image Section */}
      <section className="relative w-full">
        <div className="aspect-[3/4] bg-[#F7F8F8] overflow-hidden relative shadow-sm border-b border-[#e5e2e1]">
          <img
            src={displayImage}
            alt={product.title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {product.isNewArrival && (
            <div className="absolute top-4 left-4 bg-[#2B5A64] text-white px-3 py-1 text-[10px] font-mono-caps uppercase tracking-widest font-bold flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" /> New Arrival
            </div>
          )}

          {/* After Mode - Smart Profile Badge on Hero */}
          {uxMode === 'after' && (
            <div className="absolute bottom-12 right-4 bg-white/90 backdrop-blur-md border border-[#2B5A64]/30 px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 text-xs">
              <UserCheck className="w-4 h-4 text-[#2B5A64]" />
              <div>
                <p className="font-mono-caps text-[10px] text-[#586061]">Welcome back, <strong className="text-[#1c1b1b]">{userProfile.name}</strong></p>
                <p className="font-mono-caps text-[9px] text-[#2B5A64] font-bold">Auto-Fit Profile Active</p>
              </div>
            </div>
          )}
        </div>

        {/* Carousel / Image pagination indicator dots matching design */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {product.heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIdx(idx)}
              className={`h-1 transition-all rounded-full ${
                activeImageIdx === idx ? 'w-8 bg-[#2B5A64]' : 'w-8 bg-[#c0c8ca]/70 hover:bg-[#2B5A64]/50'
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Information Section */}
      <section className="px-5 py-8 flex flex-col gap-6">
        <div>
          <span className="font-mono-caps text-xs text-[#2B5A64] uppercase tracking-[0.15em] mb-2 block font-semibold">
            {product.categoryTag}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1c1b1b] tracking-tight font-['Hanken_Grotesk'] uppercase">
            {product.title}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-[#586061] mt-2 font-['Hanken_Grotesk']">
            {product.currency} {product.price.toLocaleString()}.00
          </p>
        </div>

        {/* Color Swatches */}
        <div className="flex flex-col gap-3">
          <span className="font-mono-caps text-xs text-[#40484a] uppercase tracking-wider font-medium">
            COLOR: <strong className="text-[#1c1b1b]">{selectedColor.name}</strong>
          </span>
          <div className="flex gap-4 items-center">
            {product.colors.map((col) => {
              const isSelected = selectedColor.hex === col.hex;
              return (
                <button
                  key={col.hex}
                  onClick={() => setSelectedColor(col)}
                  className={`w-10 h-10 rounded-full p-0.5 transition-all relative ${
                    isSelected
                      ? 'ring-2 ring-[#2B5A64] ring-offset-2 ring-offset-[#fcf9f8] scale-105'
                      : 'border border-[#c0c8ca] hover:scale-105'
                  }`}
                  aria-label={`Select color ${col.name}`}
                >
                  <div
                    className="w-full h-full rounded-full shadow-inner"
                    style={{ backgroundColor: col.hex }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Size Selection Area - BEFORE vs AFTER DIFFERENCE */}
        <div className="flex flex-col gap-3">
          {/* AFTER MODE SMART RECOMMENDATION CARD */}
          {uxMode === 'after' ? (
            <div className="bg-[#2B5A64]/10 border border-[#2B5A64]/40 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#2B5A64] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-mono-caps text-xs font-bold text-[#2B5A64] uppercase tracking-wider block">
                      Recommended for {userProfile.name}: Size {recommendedSize}
                    </span>
                    <p className="text-xs text-[#1c1b1b] font-medium font-['Hanken_Grotesk'] mt-0.5">
                      98% Fit Match based on your saved body profile & past orders
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenProfile}
                  className="text-[11px] font-mono-caps text-[#2B5A64] underline hover:text-[#1c1b1b] font-bold shrink-0"
                >
                  Edit Profile
                </button>
              </div>

              {/* Specific reasoning details */}
              <div className="pt-2 border-t border-[#2B5A64]/20 grid grid-cols-2 gap-2 text-[11px] font-mono-caps text-[#40484a]">
                <div className="bg-white/80 p-2 rounded border border-[#e5e2e1]">
                  <span className="text-[#586061] block text-[10px]">Saved Profile</span>
                  <strong className="text-[#1c1b1b]">
                    {userProfile.heightCm}cm / {userProfile.weightKg}kg
                  </strong>
                </div>
                <div className="bg-white/80 p-2 rounded border border-[#e5e2e1]">
                  <span className="text-[#586061] block text-[10px]">Past Order Memory</span>
                  <strong className="text-[#1c1b1b]">
                    Elite Jogger in M (Fits Perfect)
                  </strong>
                </div>
              </div>
            </div>
          ) : (
            /* BEFORE MODE NOTICE BANNER */
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs font-mono-caps text-amber-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Standard Flow: Manual Size Selection &amp; Measurement Entry Required</span>
              </div>
            </div>
          )}

          {/* Size Header */}
          <div className="flex justify-between items-center mt-1">
            <span className="font-mono-caps text-xs text-[#40484a] uppercase tracking-wider font-medium flex items-center gap-2">
              SIZE SELECTION
              {uxMode === 'after' && (
                <span className="bg-emerald-100 text-emerald-800 text-[9px] px-2 py-0.5 rounded font-bold uppercase">
                  Auto-Selected
                </span>
              )}
            </span>

            <button
              onClick={onOpenSizeGuide}
              className="text-[#2B5A64] font-mono-caps text-xs underline underline-offset-4 hover:opacity-80 transition-opacity font-semibold flex items-center gap-1"
            >
              <span>SIZE GUIDE</span>
              {uxMode === 'before' && <span className="text-[10px] text-amber-700">(Manual Calculator)</span>}
            </button>
          </div>

          {/* Size Grid */}
          <div className="grid grid-cols-4 gap-2">
            {product.sizes.map((sz) => {
              const isSelected = selectedSize === sz;
              const isRecommended = uxMode === 'after' && sz === recommendedSize;

              return (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`h-14 flex flex-col items-center justify-center font-mono-caps text-xs uppercase transition-all rounded-sm relative ${
                    isSelected
                      ? 'border-2 border-[#2B5A64] bg-[#F7F8F8] font-bold text-[#1c1b1b] shadow-sm'
                      : 'border border-[#c0c8ca] text-[#40484a] hover:bg-[#F7F8F8] active:bg-[#f0eded]'
                  }`}
                >
                  <span className="text-sm">{sz}</span>
                  {isRecommended && (
                    <span className="text-[8px] bg-[#2B5A64] text-white px-1 py-0.5 rounded-xs mt-0.5 font-bold tracking-tight">
                      RECOMMENDED
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-2 flex flex-col gap-3">
          <button
            onClick={handleAdd}
            className={`w-full h-14 bg-[#2B5A64] text-white font-mono-caps text-xs tracking-[0.15em] uppercase font-bold hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 rounded-sm shadow-md ${
              addedAnimation ? 'bg-emerald-800' : ''
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-5 h-5" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <span>
                ADD TO CART {uxMode === 'after' && `(SIZE ${selectedSize})`}
              </span>
            )}
          </button>

          <p className="text-center font-mono-caps text-xs text-[#586061] tracking-wider uppercase">
            FREE SHIPPING ON ORDERS OVER RS. 5,000
          </p>
        </div>

        {/* Value props banner */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#e5e2e1] text-[11px] font-mono-caps text-[#586061] text-center">
          <div className="flex flex-col items-center gap-1">
            <Truck className="w-4 h-4 text-[#2B5A64]" />
            <span>Express Shipping</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <RefreshCw className="w-4 h-4 text-[#2B5A64]" />
            <span>30-Day Easy Returns</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#2B5A64]" />
            <span>Fit Guarantee</span>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="border-t border-[#c0c8ca]">
        {/* Description Accordion */}
        <div className="border-b border-[#c0c8ca]">
          <button
            onClick={() => setOpenDescription(!openDescription)}
            className="w-full flex justify-between items-center px-5 py-5 text-left cursor-pointer hover:bg-[#f0eded]/40 transition-colors"
          >
            <span className="font-mono-caps text-xs text-[#1c1b1b] uppercase tracking-widest font-bold">
              DESCRIPTION
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#586061] transition-transform duration-200 ${
                openDescription ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openDescription && (
            <div className="px-5 pb-6 text-sm text-[#40484a] leading-relaxed font-['Hanken_Grotesk']">
              {product.description}
            </div>
          )}
        </div>

        {/* Details & Fabric Accordion */}
        <div className="border-b border-[#c0c8ca]">
          <button
            onClick={() => setOpenDetails(!openDetails)}
            className="w-full flex justify-between items-center px-5 py-5 text-left cursor-pointer hover:bg-[#f0eded]/40 transition-colors"
          >
            <span className="font-mono-caps text-xs text-[#1c1b1b] uppercase tracking-widest font-bold">
              DETAILS & FABRIC
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#586061] transition-transform duration-200 ${
                openDetails ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openDetails && (
            <div className="px-5 pb-6 text-sm text-[#40484a] font-['Hanken_Grotesk']">
              <ul className="list-disc pl-5 space-y-2">
                {product.details.map((dt, i) => (
                  <li key={i}>{dt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Care & Maintenance */}
        <div className="border-b border-[#c0c8ca]">
          <button
            onClick={() => setOpenCare(!openCare)}
            className="w-full flex justify-between items-center px-5 py-5 text-left cursor-pointer hover:bg-[#f0eded]/40 transition-colors"
          >
            <span className="font-mono-caps text-xs text-[#1c1b1b] uppercase tracking-widest font-bold">
              CARE & MAINTENANCE
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#586061] transition-transform duration-200 ${
                openCare ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openCare && (
            <div className="px-5 pb-6 text-sm text-[#40484a] font-['Hanken_Grotesk']">
              <ul className="list-disc pl-5 space-y-2">
                {product.careInstructions ? (
                  product.careInstructions.map((ci, i) => <li key={i}>{ci}</li>)
                ) : (
                  <>
                    <li>Machine wash cold gentle cycle</li>
                    <li>Line dry in shade</li>
                    <li>Do not bleach or dry clean</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Recommendations Grid - YOU MAY ALSO LIKE */}
      <section className="py-12 px-5 bg-[#fcf9f8]">
        <h3 className="text-xl font-bold text-[#1c1b1b] mb-6 tracking-tight uppercase font-['Hanken_Grotesk']">
          YOU MAY ALSO LIKE
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                onSelectRelatedProduct(rel);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[#F7F8F8] overflow-hidden rounded-sm relative border border-[#e5e2e1]">
                <img
                  src={rel.colors[0]?.image || rel.heroImages[0]}
                  alt={rel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="font-mono-caps text-[11px] text-[#586061] uppercase tracking-wider">
                  {rel.categoryTag}
                </p>
                <h4 className="font-semibold text-sm text-[#1c1b1b] font-['Hanken_Grotesk'] uppercase mt-0.5 group-hover:text-[#2B5A64] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-sm text-[#40484a] font-['Hanken_Grotesk'] mt-0.5">
                  Rs. {rel.price.toLocaleString()}.00
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

