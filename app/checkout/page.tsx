'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface PaymentAccount {
  title: string;
  accountNumber: string;
  accountTitle: string;
  instructions: string;
  iban?: string;
  tillId?: string;
  qrImage?: string;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planKey = searchParams.get('plan') || 'cold-outreach';

  const [selectedMethod, setSelectedMethod] = useState<'jazzcash' | 'bank' | 'nayapay'>('jazzcash');
  const [trxId, setTrxId] = useState('');
  const [senderNumber, setSenderNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const planDetails: Record<string, { name: string; price: string; desc: string }> = {
    'cold-outreach': {
      name: 'Cold Outreach Engine',
      price: 'PKR 9,599',
      desc: 'Local lead finder, verified email extraction, and automated cold email setup.',
    },
    'full-swarm': {
      name: 'Ad Inspector & Full Swarm',
      price: 'PKR 16,499',
      desc: 'Complete AI Swarm with Meta/Google/TikTok ads scanner & site flaw auditor.',
    },
    'custom-offer': {
      name: 'Custom Offer Engine',
      price: 'Custom Quote',
      desc: 'Tailor-made autonomous agent pipeline built specifically for your agency.',
    },
  };

  const currentPlan = planDetails[planKey] || planDetails['cold-outreach'];

  const paymentAccounts: Record<string, PaymentAccount> = {
    jazzcash: {
      title: 'JazzCash Business Account & QR',
      accountNumber: '0348-2927952',
      accountTitle: 'Rai Marketing Agency',
      instructions: 'Scan QR code via JazzCash app or send exact amount to business account and enter TRX ID below.',
      qrImage: '/jazzcashqrcode.jpeg',
    },
    bank: {
      title: 'Meezan Bank Transfer & QR',
      accountNumber: '0101 0101 0101 01',
      iban: 'PK00MEZN00010101010101',
      tillId: '150036454',
      accountTitle: 'Rai Marketing Agency',
      instructions: 'Scan bank QR or transfer via Raast/IBFT and upload the confirmation receipt.',
      qrImage: '/aikbankqrcode.jpeg',
    },
    nayapay: {
      title: 'NayaPay / SadaPay',
      accountNumber: '0316 6025651',
      accountTitle: 'Shafqat Abbas',
      instructions: 'Send amount directly via NayaPay or SadaPay mobile wallet.',
    },
  };

  const activeAccount = paymentAccounts[selectedMethod];

  const handleSubmitProof = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#080511] text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
          <Link href="/#pricing" className="text-xs text-slate-400 hover:text-purple-400 flex items-center space-x-2 transition">
            <span>&larr; Back to Pricing</span>
          </Link>
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-xs">
              CE
            </span>
            <span className="font-extrabold text-sm tracking-tight text-white">ClientEngine AI</span>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-emerald-500/40 text-center max-w-2xl mx-auto backdrop-blur-xl shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-6 text-emerald-400 text-2xl">
              <i className="fa-solid fa-check"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Payment Submitted!</h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Thank you! Our engineering team at <strong className="text-white">Rai Marketing Agency</strong> is verifying your transaction ID (<span className="text-purple-400 font-mono">{trxId}</span>).
            </p>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 mb-8 text-left space-y-2">
              <div className="flex justify-between"><span>Selected Plan:</span> <span className="text-white font-bold">{currentPlan.name}</span></div>
              <div className="flex justify-between"><span>Amount Paid:</span> <span className="text-emerald-400 font-bold">{currentPlan.price}</span></div>
              <div className="flex justify-between"><span>Activation Time:</span> <span className="text-purple-300 font-mono">15 - 30 Minutes</span></div>
            </div>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs transition shadow-lg shadow-purple-600/30 cursor-pointer"
            >
              Go To Client Dashboard &rarr;
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  Account Activation Checkout
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-4 mb-2">{currentPlan.name}</h1>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{currentPlan.desc}</p>
                
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div>
                    <div className="text-[11px] text-slate-400">Total Investment</div>
                    <div className="text-xs text-emerald-400 font-mono">One-Time Lifetime Access</div>
                  </div>
                  <div className="text-2xl font-extrabold text-white">{currentPlan.price}</div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl space-y-4">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Select Payment Method</h2>
                
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod('jazzcash')}
                    className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer ${
                      selectedMethod === 'jazzcash'
                        ? 'border-purple-500 bg-purple-500/10 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <i className="fa-solid fa-mobile-screen-button text-base text-amber-400"></i>
                    <span>JazzCash</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod('bank')}
                    className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer ${
                      selectedMethod === 'bank'
                        ? 'border-purple-500 bg-purple-500/10 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <i className="fa-solid fa-building-columns text-base text-cyan-400"></i>
                    <span>Bank Transfer</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod('nayapay')}
                    className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer ${
                      selectedMethod === 'nayapay'
                        ? 'border-purple-500 bg-purple-500/10 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <i className="fa-solid fa-credit-card text-base text-indigo-400"></i>
                    <span>NayaPay</span>
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/90 border border-purple-500/30 space-y-3 mt-4">
                  <div className="text-xs font-bold text-purple-300">{activeAccount.title}</div>
                  
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-slate-300">
                      <span>Account Title:</span>
                      <span className="text-white font-bold">{activeAccount.accountTitle}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Account / Mobile No:</span>
                      <span className="text-emerald-400 font-bold">{activeAccount.accountNumber}</span>
                    </div>
                    {activeAccount.tillId && (
                      <div className="flex justify-between text-slate-300">
                        <span>Account Till ID:</span>
                        <span className="text-amber-400 font-bold">{activeAccount.tillId}</span>
                      </div>
                    )}
                    {activeAccount.iban && (
                      <div className="flex justify-between text-slate-300">
                        <span>IBAN:</span>
                        <span className="text-cyan-300 text-[11px]">{activeAccount.iban}</span>
                      </div>
                    )}
                  </div>

                  {activeAccount.qrImage && (
                    <div className="pt-4 pb-2 flex flex-col items-center justify-center border-t border-slate-800/80">
                      <div className="w-72 h-72 sm:w-80 sm:h-80 bg-white rounded-2xl p-4 flex items-center justify-center shadow-xl mb-3 relative overflow-hidden">
                        <img 
                          src={activeAccount.qrImage} 
                          alt="Payment QR Code" 
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                      <span className="text-xs text-slate-300 font-mono font-semibold">Scan QR via App (Extra Large View)</span>
                    </div>
                  )}

                  <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 leading-relaxed">
                    {activeAccount.instructions}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl shadow-2xl">
                <h3 className="text-base font-bold text-white mb-1">Verify Your Payment</h3>
                <p className="text-xs text-slate-400 mb-6">Enter your transaction details to activate your account instant access.</p>

                <form onSubmit={handleSubmitProof} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Sender Mobile / Account Number</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 03001234567"
                      value={senderNumber}
                      onChange={(e) => setSenderNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Transaction ID / TRX ID</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 98765432101"
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Attach Receipt (Optional)</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-400 text-xs focus:outline-none file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:bg-purple-600/20 file:text-purple-300 cursor-pointer"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs transition shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Verifying TRX...</span>
                      ) : (
                        <>
                          <span>Submit Payment Proof</span>
                          <span>&rarr;</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 text-center">
                    <p className="text-[11px] text-slate-400">
                      Need help? Chat via WhatsApp: <br />
                      <a href="https://wa.me/923166025651" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">
                        +92 316 6025651
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080511] text-white flex items-center justify-center text-xs font-mono">Loading Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
