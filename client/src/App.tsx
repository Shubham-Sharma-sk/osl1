import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import ServiceDetail from "@/pages/ServiceDetail";
import Contact from "@/pages/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import CookiesPolicy from "@/pages/CookiesPolicy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:id" component={ServiceDetail} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/cookies-policy" component={CookiesPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize theme on app load
  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem("theme");
    
    // If no preference is saved, check system preference
    if (!savedTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    } else {
      // Apply saved theme
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="transition-colors duration-300">
        <Router />
        <ThemeToggle />
      </div>
    </QueryClientProvider>
  );
}

export default App;
