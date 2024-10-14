"use client";

import { ModeToggle } from "../components/ui/theme-toggle";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
export default function Header() {
  return (
    <div className="bg-secondary text-secondary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl">Document Sharer</div>
        <div>
          <ModeToggle />
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <div className="flex gap-6">
              <UserButton />
            </div>
          </Authenticated>
        </div>
      </div>
    </div>
  );
}
