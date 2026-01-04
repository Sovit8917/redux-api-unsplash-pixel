import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import NavBar from "./components/NavBar";
  import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f14] via-[#111827] to-black text-white">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>

      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={2000}
        toastClassName="bg-black/80 backdrop-blur text-white rounded-xl"
      />
    </div>
  );
}
export default App;

