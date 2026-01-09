import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(true);

  const phoneNumber = "905352563877";
  const message = encodeURIComponent("Merhaba, bilgi almak istiyorum.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* KONUSMA BALONU */}
      {showBubble && (
        <div className="absolute bottom-full right-0 mb-4 max-w-sm">
          <div className="relative bg-white text-black px-4 py-3 rounded-xl shadow-xl">

            {/* KAPAT BUTONU */}
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 bg-zinc-900 text-white rounded-full p-1 hover:scale-110 transition-transform"
              aria-label="Balonu kapat"
            >
              <X size={14} />
            </button>

            <p className="text-sm font-medium leading-snug">
              Hayalinizdeki projeleri gerçeğe dönüştürmek için bizimle iletişime geçin.
            </p>

            {/* BALON OKU (TAIL) */}
            <div className="absolute right-6 -bottom-2 w-4 h-4 bg-white rotate-45 shadow-md" />
          </div>
        </div>
      )}

      {/* WHATSAPP BUTONU */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <MessageCircle size={32} fill="currentColor" />

        {/* HOVER TOOLTIP */}
        <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
          WhatsApp Destek
        </span>
      </a>
    </div>
  );
}
