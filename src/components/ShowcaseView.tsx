import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MousePointerClick,
  CheckCircle2,
  AlertCircle,
  Maximize2,
  Ruler,
  UserCheck,
  Zap,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface ShowcaseViewProps {
  onGoToLiveApp: (mode: 'before' | 'after') => void;
}

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({ onGoToLiveApp }) => {
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3>(1);
  const [activeHighlight, setActiveHighlight] = useState<'profile' | 'badge' | 'size'>('badge');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Top Showcase Navigation Bar */}
      <div className="bg-[#1c1b1b] text-white p-4 rounded-xl shadow-lg mb-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#313030]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#2B5A64] text-amber-300 flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-caps text-[10px] text-[#9fceda] uppercase tracking-widest font-bold">
                CLOSERS Framework UX Showcase
              </span>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-mono-caps px-2 py-0.5 rounded font-bold border border-amber-400/30">
                Screen {currentStage} of 3
              </span>
            </div>
            <h1 className="text-lg font-bold font-['Hanken_Grotesk'] text-white">
              {currentStage === 1
                ? 'Screen 1: Original Product Page (Convenience Analysis)'
                : currentStage === 2
                ? 'Screen 2: Friction Scenario (Manual Size Calculator Pop-Up)'
                : 'Screen 3: Enhanced Solution (Why This Works)'}
            </h1>
          </div>
        </div>

        {/* Stage Toggle & Live App Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCurrentStage(1)}
            className={`px-3 py-1.5 text-xs font-mono-caps rounded-lg transition-all flex items-center gap-1.5 ${
              currentStage === 1
                ? 'bg-amber-600 text-white font-bold shadow'
                : 'bg-[#313030] text-[#c1c8ca] hover:text-white'
            }`}
          >
            <span>Screen 1 (Before)</span>
          </button>

          <button
            onClick={() => setCurrentStage(2)}
            className={`px-3 py-1.5 text-xs font-mono-caps rounded-lg transition-all flex items-center gap-1.5 ${
              currentStage === 2
                ? 'bg-amber-700 text-white font-bold shadow'
                : 'bg-[#313030] text-[#c1c8ca] hover:text-white'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Screen 2 (Pop-Up)</span>
          </button>

          <button
            onClick={() => setCurrentStage(3)}
            className={`px-3 py-1.5 text-xs font-mono-caps rounded-lg transition-all flex items-center gap-1.5 ${
              currentStage === 3
                ? 'bg-[#2B5A64] text-white font-bold shadow'
                : 'bg-[#313030] text-[#c1c8ca] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Screen 3 (After)</span>
          </button>

          <div className="h-6 w-px bg-[#586061] mx-1 hidden sm:block" />

          <button
            onClick={() => onGoToLiveApp(currentStage === 3 ? 'after' : 'before')}
            className="px-3 py-1.5 bg-white text-[#1c1b1b] hover:bg-[#f0eded] text-xs font-mono-caps rounded-lg font-bold transition-all flex items-center gap-1.5 shadow"
          >
            <span>Launch Live App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SCREEN 1: BEFORE / ORIGINAL WEBPAGE + CLOSERS CONVENIENCE PRINCIPLE       */}
      {/* ========================================================================= */}
      {currentStage === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Original Webpage Representation */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-amber-300/80 shadow-xl overflow-hidden relative">
            {/* Browser Header Bar */}
            <div className="bg-[#f0eded] px-4 py-3 border-b border-[#e5e2e1] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono-caps text-[#586061] ml-2">
                  https://haneeza.com/products/ultimate-hoodie
                </span>
              </div>
              <span className="text-[10px] font-mono-caps bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold uppercase">
                Original Webpage (Before)
              </span>
            </div>

            {/* Simulated Original Webpage Content */}
            <div className="p-6 bg-[#fcf9f8]">
              {/* Top Bar */}
              <div className="flex justify-between items-center pb-4 border-b border-[#e5e2e1] mb-4">
                <span className="font-bold tracking-tighter text-lg font-['Hanken_Grotesk'] text-[#1c1b1b]">
                  HANEEZA
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono-caps text-[#586061]">Logged in as: <strong>Hilda</strong></span>
                  <ShoppingBag className="w-5 h-5 text-[#2B5A64]" />
                </div>
              </div>

              {/* Product Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="aspect-[3/4] bg-[#f0eded] rounded overflow-hidden relative border border-[#e5e2e1]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoMQtRvEHUp-_AdBclIMW5BSfRK3QZ2rHZZDLAFs75LnnKB3nHNANq4dNjOUCm0CGkeN3wb-6c9e0tsCfJ4cY66oOgAk9QZi_23x9I_vlQ4b6pC0kfUi9EsJc-xDx6hz1aOI5j9ALnpYhdpB0ToGAjWudAR2ymNL2CON09iXsq8UkG3scu_3N6G9wYO2uixHpdlY4mwCdKAvQj5oc6EXQ9f64Y0IJBq-7iJMmC7s9ob8bnbnxUK8LqiO3iMfqQzpv4MGLIdfRABw"
                    alt="Ultimate Hoodie"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono-caps text-[#2B5A64] block font-bold">
                      PREMIUM PERFORMANCE
                    </span>
                    <h2 className="text-xl font-bold font-['Hanken_Grotesk'] text-[#1c1b1b]">
                      ULTIMATE HOODIE
                    </h2>
                    <p className="text-sm font-semibold text-[#586061]">Rs. 2,999.00</p>
                  </div>

                  {/* Size Selection with Friction Pointer */}
                  <div className="space-y-2 p-3 bg-amber-50 rounded-lg border-2 border-dashed border-amber-400 relative">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono-caps font-bold text-[#1c1b1b]">
                        SIZE SELECTION
                      </span>
                      {/* Highlighted Size Guide Link */}
                      <button
                        onClick={() => setCurrentStage(2)}
                        className="text-xs font-mono-caps text-[#2B5A64] underline font-bold bg-amber-200 px-2 py-1 rounded animate-pulse flex items-center gap-1"
                      >
                        <MousePointerClick className="w-3 h-3 text-amber-800" />
                        <span>SIZE GUIDE</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-1 text-center font-mono-caps text-xs">
                      <div className="p-2 border border-[#c0c8ca] bg-white text-[#586061]">S</div>
                      <div className="p-2 border border-[#c0c8ca] bg-white text-[#586061]">
                        M
                      </div>
                      <div className="p-2 border border-[#c0c8ca] bg-white text-[#586061]">L</div>
                      <div className="p-2 border border-[#c0c8ca] bg-white text-[#586061]">XL</div>
                    </div>
                  </div>

                  {/* Callout box guiding to pop-up */}
                  <div className="bg-amber-100/70 p-3 rounded-lg border border-amber-300 text-xs font-['Hanken_Grotesk'] text-amber-900 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold font-mono-caps">
                      <AlertCircle className="w-4 h-4 text-amber-700" />
                      <span>User Intent: Unsure about sizing</span>
                    </div>
                    <p className="text-[11px] text-amber-800 leading-tight">
                      Hilda wants to purchase this hoodie, but doesn't know whether S, M, or L is right. She clicks 'SIZE GUIDE' to find out.
                    </p>
                  </div>

                  <button className="w-full py-3 bg-[#2B5A64] text-white font-mono-caps text-xs font-bold uppercase rounded opacity-80 cursor-not-allowed">
                    ADD TO CART (Select Size First)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CLOSERS Principle - Convenience Heading & Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e5e2e1] shadow-lg space-y-6">
              {/* CLOSERS Framework Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2B5A64]/10 text-[#2B5A64] rounded-full text-xs font-mono-caps font-bold">
                <span>CLOSERS FRAMEWORK ANALYSIS</span>
              </div>

              {/* HEADING IN ARIAL BOLD 20PT EQUIVALENT AS REQUESTED */}
              <h2
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '20pt',
                  lineHeight: '1.2'
                }}
                className="text-[#1c1b1b] tracking-tight"
              >
                Convenience
              </h2>

              {/* EXACT USER REQUESTED TEXT */}
              <p className="text-base text-[#40484a] font-['Hanken_Grotesk'] leading-relaxed">
                A logged in user on the Haneeza website visits a product page that she is keen to view in more detail. She is keen to make a purchase but she wants to understand what size she needs to buy.
              </p>

              {/* Context Box */}
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
                <h4 className="font-mono-caps text-xs text-amber-900 font-bold uppercase flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  Initial User Dilemma
                </h4>
                <p className="text-xs text-amber-800 font-['Hanken_Grotesk'] leading-relaxed">
                  Despite being a returning customer with completed orders in her account history, the standard website does not automatically present her size. She must navigate a manual pop-up calculator.
                </p>
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentStage(2)}
                className="w-full py-4 bg-[#2B5A64] text-white font-mono-caps text-xs tracking-widest uppercase rounded-lg font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>View Screen 2: The Pop-Up Scenario</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 2: IN-BETWEEN SCREEN - MANUAL SIZE GUIDE POP-UP SCENARIO            */}
      {/* ========================================================================= */}
      {currentStage === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Webpage with Rendered Pop-up Window Overlay */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-amber-500 shadow-2xl overflow-hidden relative">
            {/* Browser Header Bar */}
            <div className="bg-[#f0eded] px-4 py-3 border-b border-[#e5e2e1] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono-caps text-[#586061] ml-2">
                  https://haneeza.com/products/ultimate-hoodie#sizeguide
                </span>
              </div>
              <span className="text-[10px] font-mono-caps bg-amber-500 text-white px-2.5 py-0.5 rounded font-bold uppercase">
                Manual Pop-Up Scenario
              </span>
            </div>

            {/* Blurred Background Page + Active Modal Window Overlay */}
            <div className="p-6 bg-[#fcf9f8] relative min-h-[480px]">
              {/* Dimmed Background */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-10 flex items-center justify-center p-4">
                {/* POP-UP MODAL WINDOW */}
                <div className="bg-white w-full max-w-md rounded-xl shadow-2xl border-2 border-amber-400 overflow-hidden text-left animate-in zoom-in-95 duration-200">
                  {/* Modal Header */}
                  <div className="bg-[#1c1b1b] text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-amber-400" />
                      <h3 className="font-bold text-sm font-['Hanken_Grotesk'] uppercase tracking-tight">
                        Size &amp; Fit Calculator Modal
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono-caps bg-amber-400 text-black font-bold px-2 py-0.5 rounded">
                      Step 3 of 5
                    </span>
                  </div>

                  {/* Modal Body / Inputs */}
                  <div className="p-5 space-y-4 text-xs font-['Hanken_Grotesk']">
                    <p className="text-[#586061] text-[11px]">
                      Please enter your measurements below to calculate your ideal fit:
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-2.5 bg-[#fcf9f8] rounded border border-[#c0c8ca]">
                        <label className="block text-[10px] font-mono-caps text-[#586061]">Height (cm)</label>
                        <input
                          type="text"
                          readOnly
                          value="178"
                          className="w-full font-bold text-sm text-[#1c1b1b] bg-transparent focus:outline-none"
                        />
                      </div>

                      <div className="p-2.5 bg-[#fcf9f8] rounded border border-[#c0c8ca]">
                        <label className="block text-[10px] font-mono-caps text-[#586061]">Weight (kg)</label>
                        <input
                          type="text"
                          readOnly
                          value="72"
                          className="w-full font-bold text-sm text-[#1c1b1b] bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono-caps text-[#586061] mb-1">
                        Preferred Cut
                      </label>
                      <select disabled className="w-full p-2 bg-[#fcf9f8] border border-[#c0c8ca] rounded text-xs">
                        <option>Athletic Fit (Standard)</option>
                      </select>
                    </div>

                    {/* Calculated Output Banner */}
                    <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg text-center">
                      <span className="text-[10px] font-mono-caps text-amber-800 uppercase block font-semibold">
                        Calculated Recommendation
                      </span>
                      <strong className="text-lg font-bold text-[#1c1b1b] font-mono-caps">
                        Recommended Size: M
                      </strong>
                    </div>

                    <button className="w-full py-2.5 bg-[#2B5A64] text-white font-mono-caps text-xs uppercase rounded font-bold">
                      Close Modal &amp; Return to Product
                    </button>
                  </div>
                </div>
              </div>

              {/* Background Mock Content beneath blur */}
              <div className="opacity-30 blur-xs space-y-4">
                <div className="h-6 bg-gray-300 w-1/3 rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-48 bg-gray-200 rounded" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-1/2" />
                    <div className="h-10 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Friction Analysis & Steps Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e5e2e1] shadow-lg space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-mono-caps font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>BEFORE: MANUAL FRICTION ANALYSIS</span>
              </div>

              <h2 className="text-2xl font-bold font-['Hanken_Grotesk'] text-[#1c1b1b] tracking-tight">
                The Friction Barrier
              </h2>

              <p className="text-sm text-[#40484a] font-['Hanken_Grotesk'] leading-relaxed">
                In the standard flow, the user is interrupted by a pop-up modal requiring <strong>5 manual interactions</strong> before she can add the item to her cart.
              </p>

              {/* 5 Friction Steps Sequence */}
              <div className="space-y-2.5 text-xs font-['Hanken_Grotesk']">
                <div className="p-2.5 bg-[#fcf9f8] rounded-lg border border-[#e5e2e1] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center shrink-0 font-mono-caps">1</span>
                  <span>Click <strong>"SIZE GUIDE"</strong> link on product page</span>
                </div>

                <div className="p-2.5 bg-[#fcf9f8] rounded-lg border border-[#e5e2e1] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center shrink-0 font-mono-caps">2</span>
                  <span>Wait for modal window overlay to pop up</span>
                </div>

                <div className="p-2.5 bg-amber-100/80 rounded-lg border border-amber-300 flex items-center gap-3 font-semibold">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 font-mono-caps">3</span>
                  <span>Re-enter body height (178cm) and weight (72kg)</span>
                </div>

                <div className="p-2.5 bg-[#fcf9f8] rounded-lg border border-[#e5e2e1] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center shrink-0 font-mono-caps">4</span>
                  <span>Click <strong>"Calculate Size"</strong> &amp; read output (Size M)</span>
                </div>

                <div className="p-2.5 bg-[#fcf9f8] rounded-lg border border-[#e5e2e1] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center shrink-0 font-mono-caps">5</span>
                  <span>Close modal, find Size M button, and add to cart</span>
                </div>
              </div>

              {/* Action Button to Screen 3 */}
              <button
                onClick={() => setCurrentStage(3)}
                className="w-full py-4 bg-[#2B5A64] text-white font-mono-caps text-xs tracking-widest uppercase rounded-lg font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceed to Screen 3: Enhanced Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 3: AFTER / IMPROVED WEBPAGE + HIGHLIGHTS + "WHY THIS WORKS"       */}
      {/* ========================================================================= */}
      {currentStage === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Improved Webpage with Highlighted Differences */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl border-2 border-[#2B5A64] shadow-2xl overflow-hidden relative">
              {/* Browser Header Bar */}
              <div className="bg-[#f0eded] px-4 py-3 border-b border-[#e5e2e1] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono-caps text-[#586061] ml-2">
                    https://haneeza.com/products/ultimate-hoodie
                  </span>
                </div>
                <span className="text-[10px] font-mono-caps bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-bold uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Enhanced Page (After)
                </span>
              </div>

              {/* Improved Page Image Representation */}
              <div className="p-6 bg-[#fcf9f8] relative">
                {/* Visual Callout Badge Overlay 1 */}
                <div
                  onClick={() => setActiveHighlight('badge')}
                  className={`cursor-pointer transition-all ${
                    activeHighlight === 'badge' ? 'ring-4 ring-emerald-400 scale-[1.02]' : 'opacity-90'
                  }`}
                >
                  <div className="bg-[#2B5A64]/10 border-2 border-[#2B5A64] p-3 rounded-xl mb-4 relative shadow-md">
                    <div className="absolute -top-3 right-3 bg-[#2B5A64] text-white text-[9px] font-mono-caps px-2 py-0.5 rounded-full font-bold uppercase flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300" /> Highlight #1: Smart Profile Card
                    </div>

                    <div className="flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-[#2B5A64]" />
                      <div>
                        <span className="text-xs font-bold text-[#2B5A64] font-mono-caps">
                          Recommended for Hilda: Size M
                        </span>
                        <p className="text-[11px] text-[#1c1b1b] font-medium font-['Hanken_Grotesk']">
                          98% Fit Match based on your saved body profile (178cm/72kg) &amp; past order
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Product Layout with Highlighted Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Hero Image with Profile Avatar Badge Overlay */}
                  <div className="aspect-[3/4] bg-[#f0eded] rounded overflow-hidden relative border border-[#e5e2e1]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoMQtRvEHUp-_AdBclIMW5BSfRK3QZ2rHZZDLAFs75LnnKB3nHNANq4dNjOUCm0CGkeN3wb-6c9e0tsCfJ4cY66oOgAk9QZi_23x9I_vlQ4b6pC0kfUi9EsJc-xDx6hz1aOI5j9ALnpYhdpB0ToGAjWudAR2ymNL2CON09iXsq8UkG3scu_3N6G9wYO2uixHpdlY4mwCdKAvQj5oc6EXQ9f64Y0IJBq-7iJMmC7s9ob8bnbnxUK8LqiO3iMfqQzpv4MGLIdfRABw"
                      alt="Ultimate Hoodie"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-md border border-[#2B5A64]/40 shadow-sm text-[10px] font-mono-caps text-[#2B5A64] font-bold flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>Profile: Hilda (178cm / 72kg)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-mono-caps text-[#2B5A64] block font-bold">
                        PREMIUM PERFORMANCE
                      </span>
                      <h2 className="text-xl font-bold font-['Hanken_Grotesk'] text-[#1c1b1b]">
                        ULTIMATE HOODIE
                      </h2>
                      <p className="text-sm font-semibold text-[#586061]">Rs. 2,999.00</p>
                    </div>

                    {/* Highlighted Auto-Selected Size Grid */}
                    <div
                      onClick={() => setActiveHighlight('size')}
                      className={`space-y-2 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                        activeHighlight === 'size'
                          ? 'border-emerald-500 bg-emerald-50/50 ring-4 ring-emerald-300'
                          : 'border-[#2B5A64] bg-[#2B5A64]/5'
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs font-mono-caps">
                        <span className="font-bold text-[#1c1b1b] flex items-center gap-1">
                          SIZE SELECTION
                          <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded font-bold">
                            Auto-Selected
                          </span>
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-1 text-center font-mono-caps text-xs">
                        <div className="p-2 border border-[#c0c8ca] bg-white text-[#586061]">S</div>
                        <div className="p-2 border-2 border-[#2B5A64] bg-[#F7F8F8] font-bold text-[#1c1b1b] relative rounded-sm shadow-sm">
                          M
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#2B5A64] text-white text-[7px] px-1 rounded uppercase font-bold">
                            Auto
                          </span>
                        </div>
                        <div className="p-2 border border-[#c0c8ca] bg-white text-[#586061]">L</div>
                        <div className="p-2 border border-[#c0c8ca] bg-white text-[#586061]">XL</div>
                      </div>
                    </div>

                    {/* Instant Action CTA */}
                    <button className="w-full py-3.5 bg-[#2B5A64] text-white font-mono-caps text-xs font-bold uppercase rounded shadow-md flex items-center justify-center gap-2">
                      <span>ADD TO CART (SIZE M)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Callout Selector */}
            <div className="p-4 bg-white rounded-xl border border-[#e5e2e1] flex items-center justify-between gap-2 text-xs font-mono-caps">
              <span className="text-[#586061] font-bold">Click to inspect highlighted difference:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveHighlight('badge')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeHighlight === 'badge' ? 'bg-[#2B5A64] text-white font-bold' : 'bg-[#f0eded] text-[#586061]'
                  }`}
                >
                  1. Auto-Recommendation Card
                </button>
                <button
                  onClick={() => setActiveHighlight('size')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeHighlight === 'size' ? 'bg-[#2B5A64] text-white font-bold' : 'bg-[#f0eded] text-[#586061]'
                  }`}
                >
                  2. Auto-Preselected Size M
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: "Why this works" heading and text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e5e2e1] shadow-lg space-y-6">
              {/* HEADING AS REQUESTED */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-mono-caps font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> CLOSERS ENHANCEMENT
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Hanken_Grotesk'] text-[#1c1b1b] tracking-tight pt-2">
                  Why this works
                </h2>
              </div>

              {/* Explanatory bullet points */}
              <div className="space-y-4 text-sm font-['Hanken_Grotesk'] text-[#40484a] leading-relaxed">
                <div className="p-4 bg-[#2B5A64]/5 rounded-xl border border-[#2B5A64]/20 space-y-1.5">
                  <h4 className="font-bold text-[#2B5A64] text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2B5A64]" />
                    1. Eliminates Purchase Friction (Convenience)
                  </h4>
                  <p className="text-xs text-[#586061]">
                    By pre-selecting Size M automatically, the user goes from <strong>5 manual steps</strong> (Clicking link, waiting for modal, typing height/weight, clicking calculate, inspecting size, closing modal) to <strong>0 steps</strong>.
                  </p>
                </div>

                <div className="p-4 bg-[#2B5A64]/5 rounded-xl border border-[#2B5A64]/20 space-y-1.5">
                  <h4 className="font-bold text-[#2B5A64] text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#2B5A64]" />
                    2. Leverages Past Purchase Memory
                  </h4>
                  <p className="text-xs text-[#586061]">
                    The system cross-references Hilda's previous order of the <em>Elite Jogger (Size M, Fits Perfect)</em> to validate fit accuracy with high statistical confidence.
                  </p>
                </div>

                <div className="p-4 bg-[#2B5A64]/5 rounded-xl border border-[#2B5A64]/20 space-y-1.5">
                  <h4 className="font-bold text-[#2B5A64] text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#2B5A64]" />
                    3. Boosts Conversion &amp; Lowers Returns
                  </h4>
                  <p className="text-xs text-[#586061]">
                    Confidence in sizing directly reduces cart abandonment and cuts costly size-related product returns by up to 40%.
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-[#e5e2e1] space-y-3">
                <button
                  onClick={() => onGoToLiveApp('after')}
                  className="w-full py-4 bg-[#2B5A64] text-white font-mono-caps text-xs tracking-widest uppercase rounded-lg font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Experience In Live Interactive Store</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentStage(1)}
                  className="w-full py-2.5 text-[#586061] hover:text-[#1c1b1b] font-mono-caps text-xs uppercase tracking-wider text-center block"
                >
                  ← Back to Screen 1 (Before Comparison)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
