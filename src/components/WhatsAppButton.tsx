import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "905000000000"; // Buraya gerçek numara gelecek
  const message = encodeURIComponent("Merhaba, bilgi almak istiyorum.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        WhatsApp Destek
      </span>
    </a>
  );
}
