"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

export default function HomePage() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans selection:bg-black selection:text-white">
      <header className="border-b-2 border-black p-4 flex justify-between items-center bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-black tracking-tight">Kanakk Book</h1>
        <button 
          onClick={handleSignOut}
          className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-100 transition-colors border-2 border-black active:translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
        >
          Sign Out
        </button>
      </header>
      
      <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
        <section className="p-8 bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl font-bold mb-2 text-gray-600 uppercase tracking-widest text-sm">Total Balance</h2>
          <p className="text-5xl md:text-6xl font-black">$0.00</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <h3 className="text-sm font-bold mb-2 text-gray-600 uppercase tracking-widest">Income</h3>
            <p className="text-3xl font-black text-black">+$0.00</p>
          </div>
          <div className="p-6 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <h3 className="text-sm font-bold mb-2 text-gray-600 uppercase tracking-widest">Expenses</h3>
            <p className="text-3xl font-black text-black">-$0.00</p>
          </div>
        </section>
        
        <section className="pt-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Transactions</h2>
            <button className="px-4 py-2 bg-black text-white font-bold rounded-md hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all active:translate-y-1">
              + Add New
            </button>
          </div>
          
          <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mb-4 bg-gray-50">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-lg font-bold text-gray-500">No transactions yet.</p>
              <p className="text-sm font-medium text-gray-400 mt-1">Start tracking your expenses by adding a new one.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
