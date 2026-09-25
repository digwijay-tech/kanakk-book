"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

interface SignupFormProps {
  onNavigateLogin?: () => void;
}

export function SignupForm({ onNavigateLogin }: SignupFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // You can also save the user's name to a database or user profile here
      console.log("Signup successful!");
      router.push("/home");
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black">Kanakk Book</h2>
        <p className="mt-2 text-sm text-gray-600 font-medium">Create an account to get started</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 text-red-700 font-bold rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-black mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all font-medium text-black placeholder:text-gray-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-black mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all font-medium text-black placeholder:text-gray-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-black mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all font-medium text-black placeholder:text-gray-500"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-black text-white font-bold rounded-md hover:bg-gray-800 active:translate-y-1 active:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all border-2 border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      
      <div className="mt-8 text-center text-sm">
        <span className="text-gray-600 font-medium">Already have an account? </span>
        <button 
          onClick={onNavigateLogin}
          className="font-bold text-black hover:underline decoration-2 underline-offset-4 bg-transparent border-none cursor-pointer"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
