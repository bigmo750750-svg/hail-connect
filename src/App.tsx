import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Public pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobApplication from "./pages/JobApplication";
import TrackApplication from "./pages/TrackApplication";
import Contact from "./pages/Contact";

// Employee pages
import Login from "./pages/employee/Login";
import Dashboard from "./pages/employee/Dashboard";
import ApplicationDetails from "./pages/employee/ApplicationDetails";
import Reports from "./pages/employee/Reports";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Public routes with Navbar and Footer */}
              <Route
                path="/*"
                element={
                  <>
                    <Navbar />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/jobs" element={<Jobs />} />
                        <Route path="/apply" element={<JobApplication />} />
                        <Route path="/track" element={<TrackApplication />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />

              {/* Employee routes without Footer (internal system) */}
              <Route path="/employee/login" element={<Login />} />
              <Route
                path="/employee/*"
                element={
                  <>
                    <Navbar />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/application/:id" element={<ApplicationDetails />} />
                        <Route path="/reports" element={<Reports />} />
                      </Routes>
                    </main>
                  </>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
