import { useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdpotedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const adoptedPet = useState(null);
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <Router>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="mb-10 w-full bg-gradient-to-b p-7 text-center">
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
