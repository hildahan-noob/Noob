import React, { useState } from 'react';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailView } from './components/ProductDetailView';
import { CatalogView } from './components/CatalogView';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { UxComparisonBanner } from './components/UxComparisonBanner';
import { UserProfileModal } from './components/UserProfileModal';
import { BeforeAfterSummaryModal } from './components/BeforeAfterSummaryModal';
import { ShowcaseView } from './components/ShowcaseView';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, CartItem, ColorOption, UserProfile } from './types';

export default function App() {
  // App Mode ('showcase' = presentation screens 1 & 2, 'live' = interactive store prototype)
  const [appMode, setAppMode] = useState<'showcase' | 'live'>('showcase');

  // UX Showcase Mode ('before' = manual size guide modal, 'after' = auto-fit recommendation based on profile & past purchases)
  const [uxMode, setUxMode] = useState<'before' | 'after'>('after');
  const [summaryModalOpen, setSummaryModalOpen] = useState(false);

  // User Profile State (Hilda Han)
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Hilda Han',
    email: 'hildahan@gmail.com',
    heightCm: 178,
    weightKg: 72,
    fitPreference: 'Athletic Fit',
    pastOrders: [
      {
        productTitle: 'ELITE JOGGER',
        sizeBought: 'M',
        fitFeedback: 'Fits Perfect',
        date: '12 June 2024',
      },
      {
        productTitle: 'CORE BASELAYER',
        sizeBought: 'M',
        fitFeedback: 'Fits Perfect',
        date: '28 January 2024',
      },
    ],
  });

  // Navigation & Modal states
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // App view state
  const [currentView, setCurrentView] = useState<'detail' | 'catalog'>('detail');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]); // Ultimate Hoodie
  const [activeCategory, setActiveCategory] = useState<string>('Performance');

  // Shopping cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedColor: PRODUCTS[0].colors[0],
      selectedSize: 'M',
      quantity: 1,
    },
  ]);

  // Cart Handlers
  const handleAddToCart = (product: Product, size: string, color: ColorOption) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) =>
          i.product.id === product.id &&
          i.selectedSize === size &&
          i.selectedColor.hex === color.hex
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedSize: size,
            selectedColor: color,
            quantity: 1,
          },
        ];
      }
    });

    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (
    productId: string,
    size: string,
    colorHex: string,
    delta: number
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor.hex === colorHex
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, size: string, colorHex: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor.hex === colorHex
          )
      )
    );
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setCurrentView('catalog');
    if (appMode === 'showcase') setAppMode('live');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
    if (appMode === 'showcase') setAppMode('live');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] flex flex-col antialiased selection:bg-[#2B5A64] selection:text-white">
      {/* Top Fixed Header */}
      <Header
        onOpenNav={() => setNavDrawerOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        cartCount={totalCartCount}
        onLogoClick={() => {
          setSelectedProduct(PRODUCTS[0]);
          setCurrentView('detail');
          setAppMode('showcase');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => {
          setCurrentView('catalog');
          setAppMode('live');
        }}
        appMode={appMode}
        onToggleAppMode={(mode) => setAppMode(mode)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-16">
        {appMode === 'showcase' ? (
          <ShowcaseView
            onGoToLiveApp={(targetUxMode) => {
              setUxMode(targetUxMode);
              setAppMode('live');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            {/* Sticky UX Comparison Control Banner in Live Mode */}
            <UxComparisonBanner
              uxMode={uxMode}
              onToggleMode={(mode) => setUxMode(mode)}
              onOpenProfile={() => setProfileModalOpen(true)}
            />

            {currentView === 'detail' ? (
              <ProductDetailView
                product={selectedProduct}
                onAddToCart={handleAddToCart}
                onOpenSizeGuide={() => setSizeGuideOpen(true)}
                onSelectRelatedProduct={handleSelectProduct}
                allProducts={PRODUCTS}
                uxMode={uxMode}
                userProfile={userProfile}
                onOpenProfile={() => setProfileModalOpen(true)}
              />
            ) : (
              <CatalogView
                products={PRODUCTS}
                selectedCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                onSelectProduct={handleSelectProduct}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenSizeGuide={() => {
          setSizeGuideOpen(true);
          if (appMode === 'showcase') setAppMode('live');
        }}
        onSelectCategory={handleCategorySelect}
      />

      {/* Slide-over Left Navigation Drawer */}
      <NavigationDrawer
        isOpen={navDrawerOpen}
        onClose={() => setNavDrawerOpen(false)}
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
        onViewAllProducts={() => {
          setActiveCategory('All');
          setCurrentView('catalog');
          setAppMode('live');
        }}
      />

      {/* Slide-over Right Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setCartDrawerOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Size Guide Modal (Used in 'Before' mode or manual review) */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        productTitle={selectedProduct.title}
      />

      {/* User Fit Profile Modal */}
      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        userProfile={userProfile}
        onUpdateProfile={(updated) => setUserProfile(updated)}
      />

      {/* Before & After UX Impact Showcase Modal */}
      <BeforeAfterSummaryModal
        isOpen={summaryModalOpen}
        onClose={() => setSummaryModalOpen(false)}
        onSelectMode={(mode) => {
          setUxMode(mode);
          setAppMode('live');
        }}
        currentMode={uxMode}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={() => {
          setCartItems([]);
          setCurrentView('detail');
          setSelectedProduct(PRODUCTS[0]);
        }}
      />
    </div>
  );
}


