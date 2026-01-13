import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import CertificationsPage from "./pages/CertificationsPage";
import ClientsPage from "./pages/ClientsPage";
import GalleryPage from "./pages/GalleryPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
          <div className="text-center px-6">
            <h1 className="text-2xl font-light text-[#1a2744] mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">Please try refreshing the page.</p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="bg-[#22C55E] text-white px-6 py-2 rounded-full hover:bg-[#16A34A] transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Animated Routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  
  // Scroll to top on route change (except when hash is present)
  React.useEffect(() => {
    if (!location.hash) {
      // Use instant scroll to avoid blocking
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);
  
  // Handle hash scroll after navigation
  React.useEffect(() => {
    if (location.hash) {
      const scrollToHash = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
        }
      };
      
      // Wait for page to render before scrolling
      const timeout = setTimeout(scrollToHash, 100);
      return () => clearTimeout(timeout);
    }
  }, [location.hash, location.pathname]);
  
  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ minHeight: '100%' }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTop />
      </HashRouter>
    </div>
  );
}

export default App;
