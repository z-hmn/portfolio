import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel: string;
}

export default function Modal({ isOpen, onClose, children, ariaLabel }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    lastFocused.current = document.activeElement;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        ref={containerRef}
        className="relative bg-white max-w-4xl w-[92vw] rounded-xl shadow-2xl overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
}


