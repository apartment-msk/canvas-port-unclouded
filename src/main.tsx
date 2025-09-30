import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

// Force clear translation cache
if (typeof window !== 'undefined') {
  window.localStorage.removeItem('i18nextLng');
}

createRoot(document.getElementById("root")!).render(<App />);
