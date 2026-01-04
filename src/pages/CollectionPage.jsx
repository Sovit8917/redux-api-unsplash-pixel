import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

function CollectionPage() {
  const collection = useSelector(s => s.collection.items);

  if (collection.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-400">
          No Saved Media 😢
        </h1>
        <p className="text-gray-500">
          Start bookmarking your favorites
        </p>
      </div>
    );
  }

  return (
    <div className="px-12 py-10 grid gap-8 grid-cols-5">
      {collection.map(item => (
        <CollectionCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CollectionPage