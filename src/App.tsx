import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import { MapView } from "./components/Map";

import { APIProvider } from "@vis.gl/react-google-maps";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // ✅ DOĞRU YER
  console.log(
    "API KEY:",
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  );

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />

            {/* 🔴 GOOGLE MAPS BURADA YÜKLENİR */}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            </APIProvider>

            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
