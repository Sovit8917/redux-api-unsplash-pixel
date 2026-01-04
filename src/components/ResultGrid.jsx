import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto, fetchVideo, fetchGIF } from "../api/mediaApi";
import {
  setQuery,
  setActiveTab,
  setError,
  setResults,
  setLoading,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

function ResultGrid() {
  const dispath = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if(!query) return
    const getData = async () => {
      try {
        dispath(setLoading())
              let data=[]
      if (activeTab == "photo") {
        let response = await fetchPhoto(query);
        data = response.results.map((item)=>({
          id:item.id,
          type:'photo',
          title:item.alt_description,
          thumbnail:item.urls.small,
          src:item.urls.full,
          url:item.links.html

        }))
      }

      if (activeTab == "video") {
        let response = await fetchVideo(query);
        data = response.videos.map((item)=>({
          id:item.id,
          type:'video',
          title:item.user.name || 'video',
          thumbnail:item.image,
          src: item.video_files[0].link,
          url:item.url
        }))
      }

      if (activeTab == "gif") {
        let response = await fetchGIF(query);
          data = response.results.map((item)=>({
          id:item.id,
          type:'gif',
          title:item.title || 'GIF',
          thumbnail:item.media_formats.tinygif.url,
          src: item.media_formats.gif.url,
          url:item.url
          }))
      }
      
      dispath(setResults(data))
      } catch (err) {
        dispath(setError(err.message))
      }
    };

    getData();
  }, [query, activeTab,dispath]);

if (loading)
  return (
    <p className="text-center text-lg animate-pulse py-20">
      Loading results...
    </p>
  );

if (error)
  return (
    <p className="text-center text-red-400 py-20">
      Something went wrong 😢
    </p>
  );

  return (
    <div className="
  grid gap-8 px-12 py-10
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
">
  {results.map((item) => (
    <ResultCard key={item.id} item={item} />
  ))}
</div>

  );
}

export default ResultGrid;
