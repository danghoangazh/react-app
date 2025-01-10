import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout.tsx";
import { Provider } from "@/components/ui/provider";
import FilmPage from "./pages/FilmPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about/*" element={<About />} />
            <Route path="movies" element={<FilmPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
