"use client";

const SchemeCard = ({ scheme }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      {/* Thumbnail / Video */}
      <div className="relative w-full h-48">
        {scheme.videoUrl ? (
          <iframe
            width="100%"
            height="100%"
            src={scheme.videoUrl.replace("watch?v=", "embed/")}
            title={scheme.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={scheme.thumbnail}
            alt={scheme.name}
            className="w-full h-48 object-cover"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#1c2e57]">{scheme.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{scheme.description}</p>
        <a
          href={scheme.link}
          className="inline-block mt-4 text-[#1c2e57] font-medium hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default SchemeCard;