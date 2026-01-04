import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

function ResultCard({ item }) {
  const dispatch = useDispatch();

  const handleAddToCollection = (e) => {
    e.preventDefault();      // 🔴 stop <a> redirect
    e.stopPropagation();     // 🔴 stop bubbling
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative block overflow-hidden rounded-2xl
        bg-black shadow-xl
        hover:scale-[1.03] transition duration-300
        group
      "
    >
      {/* Media */}
      {item.type !== "video" ? (
        <img
          src={item.src}
          alt={item.title}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      ) : (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Bookmark */}
      <button
        onClick={handleAddToCollection}
        className="
          absolute top-4 right-4 z-10
          p-3 rounded-full
          bg-black/60 backdrop-blur
          hover:bg-blue-600 transition
        "
      >
        <FontAwesomeIcon icon={faBookmark} />
      </button>

      {/* Title */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-10
          px-4 py-3
          text-sm font-semibold
          line-clamp-2
        "
      >
        {item.title || "Untitled"}
      </div>
    </a>
  );
}

export default ResultCard;
