"use client";

import { ModeToggle } from "../components/ui/theme-toggle";
import { HeaderActions } from "../components/header-actions";
export default function Header() {
  return (
    <div className="bg-secondary text-secondary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl">Document Sharer</div>
        <div>
          <div className="flex gap-4">
            <ModeToggle />
            <HeaderActions />
          </div>
        </div>
      </div>
    </div>
  );
}
