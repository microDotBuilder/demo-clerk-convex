"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">Welcome to Clerk!</h1>
          <p className="text-lg">
            Sign in to get started. You can create a new account or sign in with
            an existing one.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 bg-red-400 border-solid border-2 rounded-sm border-red-500 w-[4rem] hover:bg-purple-500 hover:border-purple-600 transition-colors">
            <SignInButton />
          </div>
        </div>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <h1 className="text-4xl font-bold">Welcome back!</h1>
      </Authenticated>
    </div>
  );
}
