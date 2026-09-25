"use client";

import { useState } from "react";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { SignupForm } from "@/features/auth/components/SignupForm";

export default function Home() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 font-sans p-4 selection:bg-black selection:text-white">
      <main className="w-full max-w-md">
        {mode === "login" ? (
          <LoginForm onNavigateSignup={() => setMode("signup")} />
        ) : (
          <SignupForm onNavigateLogin={() => setMode("login")} />
        )}
      </main>
    </div>
  );
}
