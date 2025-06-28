import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes";
import store from "./store";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/sonner";
import Page_Loading from "./pages/Page_Loading";
import GlobalInitializer from "./components/GlobalInitializer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalInitializer />
      <Suspense fallback={<Page_Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
      <Toaster />
    </Provider>
  </StrictMode>,
);
