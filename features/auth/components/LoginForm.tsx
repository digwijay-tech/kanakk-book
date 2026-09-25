"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

import { useRouter } from "next/navigation";

interface LoginFormProps {
  onNavigateSignup?: () => void;
}

export function LoginForm({ onNavigateSignup }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      router.push("/home");
    } catch (err: any) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black">Kanakk Book</h2>
        <p className="mt-2 text-sm text-gray-600 font-medium">Sign in to track your expenses</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 text-red-700 font-bold rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      
      <div className="mt-8 text-center text-sm">
        <span className="text-gray-600 font-medium">Don't have an account? </span>
        <button 
          onClick={onNavigateSignup}
          type="button"
          className="font-bold text-black hover:underline decoration-2 underline-offset-4 bg-transparent border-none cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
