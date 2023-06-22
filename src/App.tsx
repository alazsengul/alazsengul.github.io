import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import metadata from "./assets/_metadata";

export default function App() {
  const posts = metadata;
  return (
    <div className="p-4 bg-gray-50 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {Object.entries(posts).map(([id, post]) => (
            <Route key={id} path={post.path} element={post.page} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
