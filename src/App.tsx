import React, { useState } from 'react';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailView } from './components/ProductDetailView';
import { CatalogView } from './components/CatalogView';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, CartItem, ColorOption } from './types';

export default function App() {
  // Navigation & Modal states
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // App view state
  const [currentView, setCurrentView] = useState<'detail' | 'catalog'>('detail');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]); // Ultimate Hoodie
  const [activeCategory, setActiveCategory] = useState<string>('Performance');

  // Shopping cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Pre-populate with Ultimate Hoodie for seamless visual preview matching design
    {
      product: PRODUCTS[0],
      selectedColor: PRODUCTS[0].colors[0],
      selectedSize: 'M',
      quantity: 1
    }
  ]);

  // Cart Handlers
  const handleAddToCart = (product: Product, size: string, color: ColorOption) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedSize === size && i.selectedColor.hex === color.hex
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
            quantity: 1
          }
        ];
      }
    });

    // Auto open cart drawer on add
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
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
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setCurrentView('catalog')}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-16">
        {currentView === 'detail' ? (
          <ProductDetailView
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onOpenSizeGuide={() => setSizeGuideOpen(true)}
            onSelectRelatedProduct={handleSelectProduct}
            allProducts={PRODUCTS}
          />
        ) : (
          <CatalogView
            products={PRODUCTS}
            selectedCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            onSelectProduct={handleSelectProduct}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
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

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        productTitle={selectedProduct.title}
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
