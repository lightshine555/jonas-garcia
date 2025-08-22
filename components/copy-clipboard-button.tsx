"use client";
import * as React from "react";

interface CopyClipboardButtonProps {
  value: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  title?: string;
}

export function CopyClipboardButton({
  value,
  label = "Copy",
  icon,
  className = "hover:text-foreground flex items-center cursor-pointer",
  title = "Copy to clipboard",
}: CopyClipboardButtonProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    if (typeof window !== "undefined") {
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(`${label} copied to clipboard!`);
      } else {
        const toast = document.createElement("div");
        toast.textContent = `${label} copied to clipboard!`;
        toast.style.position = "fixed";
        toast.style.bottom = "2rem";
        toast.style.right = "2rem";
        toast.style.background = "#222";
        toast.style.color = "#fff";
        toast.style.padding = "0.75rem 1.25rem";
        toast.style.borderRadius = "0.5rem";
        toast.style.fontSize = "1rem";
        toast.style.zIndex = "9999";
        toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.style.transition = "opacity 0.4s";
          toast.style.opacity = "0";
          setTimeout(() => document.body.removeChild(toast), 400);
        }, 1500);
      }
    }
  };
  return (
    <button
      type="button"
      className={className}
      onClick={handleCopy}
      title={title}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
}
