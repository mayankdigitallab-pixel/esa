import { siteConfig, whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello ESA, I want to enquire about your coaching classes")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.46 1.74 6.4l-1.86 6.4 6.56-1.72c1.86 1.02 3.96 1.56 6.36 1.56 7.07 0 12.8-5.73 12.8-12.8s-5.73-12.64-12.8-12.64zm0 23.36c-2.06 0-4.06-.54-5.82-1.58l-.42-.24-3.88 1.02 1.04-3.78-.27-.42c-1.14-1.8-1.74-3.88-1.74-6.04 0-6.18 5.04-11.2 11.2-11.2s11.2 5.02 11.2 11.2-5.04 11.2-11.2 11.2zm6.14-8.39c-.34-.17-2-.99-2.32-1.1-.31-.11-.54-.17-.77.17-.23.34-.89 1.1-1.09 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.66-.56-.57-.77-.58l-.66-.01c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.31 1.4 3.54c.17.23 2.42 3.69 5.86 5.18.82.35 1.46.56 1.96.72.82.26 1.56.22 2.15.13.66-.1 2-.82 2.29-1.6.28-.78.28-1.45.2-1.6-.09-.14-.31-.23-.65-.4z" />
      </svg>
    </a>
  );
}
