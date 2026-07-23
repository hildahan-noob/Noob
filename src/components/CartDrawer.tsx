import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Truck, ArrowRight, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, colorHex: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string, colorHex: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoCode, setPromoCode] = React.useState('');
  const [promoApplied, setPromoApplied] = React.useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 5000;
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 250;
  const total = subtotal - discount + shipping;

  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HANEEZA10' || promoCode.trim().length > 2) {
      setPromoApplied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Cart drawer panel */}
      <aside className="relative w-full max-w-md bg-[#fcf9f8] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#e5e2e1]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#e5e2e1] bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2B5A64]" />
            <h2 className="font-bold text-lg text-[#1c1b1b] font-['Hanken_Grotesk'] tracking-tight">
              SHOPPING BAG
            </h2>
            <span className="text-xs font-mono-caps text-[#586061]">
              ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#586061] hover:text-[#1c1b1b] hover:bg-[#f0eded] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-[#2B5A64]/5 px-5 py-3 border-b border-[#e5e2e1]">
          <div className="flex items-center gap-2 text-xs font-mono-caps mb-1.5 text-[#2B5A64]">
            <Truck className="w-4 h-4 shrink-0" />
            {remainingForFreeShipping <= 0 ? (
              <span className="font-bold text-emerald-700">You qualify for FREE Shipping!</span>
            ) : (
              <span>
                Add <strong className="text-[#1c1b1b]">Rs. {remainingForFreeShipping.toLocaleString()}</strong> for FREE shipping
              </span>
            )}
          </div>
          <div className="w-full bg-[#c0c8ca]/40 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#2B5A64] h-full transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#f0eded] flex items-center justify-center mb-4 text-[#71787b]">
                <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-[#1c1b1b] mb-1">Your bag is empty</h3>
              <p className="text-xs text-[#586061] max-w-xs mb-6">
                Discover our high-performance technical apparel and gear.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#2B5A64] text-white text-xs font-mono-caps uppercase tracking-widest rounded hover:opacity-90"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.hex}-${idx}`}
                className="flex gap-4 p-3 bg-white rounded-lg border border-[#e5e2e1] shadow-sm relative group"
              >
                <img
                  src={item.selectedColor.image || item.product.heroImages[0]}
                  alt={item.product.title}
                  className="w-20 h-24 object-cover rounded bg-[#F7F8F8] shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start pr-6">
                      <h4 className="font-bold text-sm text-[#1c1b1b] uppercase tracking-tight">
                        {item.product.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#586061] font-mono-caps mt-1">
                      Color: {item.selectedColor.name} | Size: {item.selectedSize}
                    </p>
                    <p className="text-sm font-semibold text-[#2B5A64] mt-1">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}.00
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#f0eded]">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#c0c8ca] rounded bg-[#fcf9f8]">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor.hex,
                            -1
                          )
                        }
                        className="p-1 text-[#586061] hover:text-[#1c1b1b] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-mono-caps font-semibold text-[#1c1b1b]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor.hex,
                            1
                          )
                        }
                        className="p-1 text-[#586061] hover:text-[#1c1b1b] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Trash remove button */}
                    <button
                      onClick={() =>
                        onRemoveItem(item.product.id, item.selectedSize, item.selectedColor.hex)
                      }
                      className="text-[#71787b] hover:text-red-600 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-[#e5e2e1] space-y-3">
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (e.g. HANEEZA10)"
                value={promoCode}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={promoApplied}
                className="flex-1 px-3 py-1.5 text-xs border border-[#c0c8ca] rounded focus:outline-none focus:border-[#2B5A64] disabled:bg-[#f0eded]"
              />
              <button
                type="submit"
                disabled={promoApplied}
                className="px-3 py-1.5 bg-[#586061] text-white text-xs font-mono-caps rounded hover:bg-[#1c1b1b] transition-colors disabled:bg-emerald-700"
              >
                {promoApplied ? <Check className="w-4 h-4" /> : 'Apply'}
              </button>
            </form>

            <div className="space-y-1.5 text-xs text-[#586061] font-mono-caps pt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}.00</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount (10%)</span>
                  <span>- Rs. {discount.toLocaleString()}.00</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `Rs. ${shipping}.00`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1c1b1b] pt-2 border-t border-[#e5e2e1]">
                <span>Total</span>
                <span className="text-[#2B5A64]">Rs. {total.toLocaleString()}.00</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-4 bg-[#2B5A64] text-white font-mono-caps text-xs tracking-widest uppercase rounded font-semibold hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
