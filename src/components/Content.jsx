import React from "react";

function Content() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Discover Stunning Media ✨
        </h1>

        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Search high-quality photos, videos, and GIFs from across the web. Save
          your favorites and build your personal collection.
        </p>

        {/* Visual hint cards */}
        <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-3 max-w-4xl w-full">
          <div className="home-card">📸 Photos</div>
          <div className="home-card">🎬 Videos</div>
          <div className="home-card">🎞️ GIFs</div>
        </div>

        <p className="mt-10 text-gray-500 italic">
          Start by typing something above 👆
        </p>
      </div>
    </div>
  );
}

export default Content;
