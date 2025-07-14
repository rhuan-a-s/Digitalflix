import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import '../index.css';
import LoginPage from "./components/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<App />} />
        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
