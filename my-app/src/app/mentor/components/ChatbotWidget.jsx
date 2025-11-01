"use client";

export default function ChatbotWidget() {
  return (
    <div className="flex flex-col w-full h-[420px] lg:h-[520px] justify-start items-stretch border-2 border-[#FD8F02] rounded-2xl bg-white shadow-md overflow-hidden">
      <iframe
        src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/11/01/10/20251101103205-NNXEIEGC.json&_gl=1*53pqd*_gcl_au*MTQ3Mjg5ODA1Ny4xNzYxOTkzMTE1*_ga*MTIwNDEyMDYzOC4xNzYxOTkyOTUy*_ga_HKHSWES9V9*czE3NjE5OTI5NTIkbzEkZzEkdDE3NjE5OTM0MDIkajYwJGwwJGgxMDc0NTQ1MDEz"
        className="w-full h-full rounded-xl"
        title="RiseVerse Chatbot"
        allow="microphone; camera"
      ></iframe>
    </div>
  );
}
