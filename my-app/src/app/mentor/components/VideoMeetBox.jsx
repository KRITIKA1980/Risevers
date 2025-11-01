"use client";

export default function VideoMeetBox() {
  return (
    <div className="flex flex-col w-full h-[420px] lg:h-[520px] justify-center items-center border border-gray-300 rounded-lg bg-white p-4">
      <p className="text-gray-700 mb-3">Start or join a meeting</p>
      <a
        href="https://meet.google.com/new"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FD8F02] text-white px-4 py-2 rounded-lg hover:bg-[#e57f00] transition"
      >
        Create Google Meet
      </a>
    </div>
  );
}
