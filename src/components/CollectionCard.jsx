import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";
import { removeToToast } from "../redux/features/collectionSlice";

function CollectionCard({ item }) {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToToast());
  };
  return (
    <div
      className="
    relative
    overflow-hidden
    rounded-2xl
    bg-black
    shadow-lg
    hover:shadow-2xl
    transition-all duration-300
    group
  "
    >
      <a href={item.url} className="block h-72">
        {item.type === "photo" && (
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          />
        )}

        {item.type === "video" && (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          />
        )}

        {item.type === "gif" && (
          <img
            src={item.src}
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          />
        )}
      </a>

      {/* Bookmark */}
      <button
        onClick={() => {
          removeFromCollection(item);
        }}
        className="
      absolute top-3 right-3
      bg-black/60 backdrop-blur
      p-2 rounded-full
      hover:bg-blue-600
      transition
    "
      >
        Remove
      </button>

      {/* Title Overlay */}
      <div
        className="
      absolute bottom-0 left-0 right-0
      px-4 py-3
      text-sm font-semibold
      bg-linear-to-t from-black/90 via-black/50 to-transparent
      line-clamp-2
    "
      >
        {item.title}
      </div>
    </div>
  );
}

export default CollectionCard;
