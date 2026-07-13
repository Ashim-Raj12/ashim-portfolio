"use client";

import { MessageCircle } from "lucide-react";

export function FloatingContactWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
