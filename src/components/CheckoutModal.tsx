import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Truck, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Hilda Han',
    email: 'hildahan@gmail.com',
    address: '42 Activewear Drive, Block 5',
    city: 'Lahore',
    postalCode: '54000',
    phone: '+92 300 1234567',
    paymentMethod: 'card'
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 250;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleFinish = () => {
    onOrderComplete();
    setStep('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#fcf9f8] rounded-xl shadow-2xl overflow-hidden border border-[#e5e2e1] z-10 animate-in zoom-in-95 duration-200">
        {step === 'details' ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-white border-b border-[#e5e2e1]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2B5A64]" />
                <h3 className="font-bold text-base text-[#1c1b1b] font-['Hanken_Grotesk'] tracking-tight uppercase">
                  SECURE CHECKOUT
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#586061] hover:text-[#1c1b1b] rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {/* Order summary pill */}
              <div className="p-3 bg-white rounded-lg border border-[#e5e2e1] flex justify-between items-center text-xs font-mono-caps">
                <div>
                  <span className="text-[#586061]">Items ({items.length}): </span>
                  <strong className="text-[#1c1b1b]">Rs. {subtotal.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-[#586061]">Total: </span>
                  <strong className="text-[#2B5A64] text-sm">Rs. {total.toLocaleString()}</strong>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="space-y-3">
                <h4 className="font-mono-caps text-xs text-[#1c1b1b] font-bold uppercase tracking-wider">
                  Shipping Address
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="col-span-2">
                    <label className="block text-[#586061] mb-1 font-mono-caps">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#c0c8ca] rounded focus:border-[#2B5A64] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#586061] mb-1 font-mono-caps">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#c0c8ca] rounded focus:border-[#2B5A64] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#586061] mb-1 font-mono-caps">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#c0c8ca] rounded focus:border-[#2B5A64] focus:outline-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[#586061] mb-1 font-mono-caps">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#c0c8ca] rounded focus:border-[#2B5A64] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#586061] mb-1 font-mono-caps">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#c0c8ca] rounded focus:border-[#2B5A64] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#586061] mb-1 font-mono-caps">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#c0c8ca] rounded focus:border-[#2B5A64] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono-caps text-xs text-[#1c1b1b] font-bold uppercase tracking-wider">
                  Payment Options
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label
                    className={`p-3 rounded-lg border flex items-center gap-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#2B5A64] bg-[#2B5A64]/5 font-semibold text-[#2B5A64]'
                        : 'border-[#c0c8ca] bg-white text-[#586061]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="text-[#2B5A64]"
                    />
                    <CreditCard className="w-4 h-4" />
                    <span>Credit / Debit Card</span>
                  </label>

                  <label
                    className={`p-3 rounded-lg border flex items-center gap-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#2B5A64] bg-[#2B5A64]/5 font-semibold text-[#2B5A64]'
                        : 'border-[#c0c8ca] bg-white text-[#586061]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="text-[#2B5A64]"
                    />
                    <Truck className="w-4 h-4" />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#2B5A64] text-white font-mono-caps text-xs tracking-widest uppercase rounded font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 mt-4 shadow-md"
              >
                <span>Complete Order - Rs. {total.toLocaleString()}.00</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2]" />
            </div>

            <div>
              <span className="text-xs font-mono-caps text-[#2B5A64] uppercase font-bold tracking-widest">
                ORDER #HNZ-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h3 className="text-2xl font-bold text-[#1c1b1b] font-['Hanken_Grotesk'] mt-1">
                Thank You For Your Order!
              </h3>
              <p className="text-xs text-[#586061] mt-2 max-w-sm mx-auto leading-relaxed">
                We've sent a confirmation email to <strong>{formData.email}</strong>. Your performance activewear is being prepared for express dispatch.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-[#e5e2e1] text-xs font-mono-caps text-left space-y-1 text-[#40484a]">
              <div className="flex justify-between">
                <span>Shipping To:</span>
                <span className="font-semibold text-[#1c1b1b]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery:</span>
                <span className="font-semibold text-[#2B5A64]">2 - 3 Business Days</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 bg-[#2B5A64] text-white font-mono-caps text-xs uppercase tracking-widest rounded font-bold hover:opacity-90 transition-opacity"
            >
              Back to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
