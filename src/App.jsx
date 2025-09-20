import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Components/Homepage/Home";
import WhatsAppButton from "./Components/WhatsappButtonNew/WhatsAppButton";
import Navbar from "./Components/NavBar/Navbar";
import Produts from "./Components/Products/Produts";
import SingleProduct from "./Components/Products/SingleProduct";
import "./App.css";
import About from "./Components/OtherComponents/About/About";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";

// Loading Component
const LoadingSpinner = () => (
  <motion.div
    className="page-loading"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="loading-spinner"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      style={{
        width: 40,
        height: 40,
        border: "3px solid #f3f3f3",
        borderTop: "3px solid #e63b3b",
        borderRadius: "50%",
      }}
    />
  </motion.div>
);

// Advanced Page Transition Component
const PageTransition = ({ children, routeType = "default" }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const transitions = {
    default: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
    slide: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
      transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.1 },
      transition: { type: "spring", duration: 0.6, bounce: 0.2 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
      transition: { type: "spring", duration: 0.7, bounce: 0.1 },
    },
  };

  const config = transitions[routeType] || transitions.default;

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingSpinner />}</AnimatePresence>

      <motion.div
        className="page-transition-container"
        initial={config.initial}
        animate={config.animate}
        exit={config.exit}
        transition={config.transition}
        style={{ width: "100%" }}
        onAnimationComplete={() => setIsLoading(false)}
      >
        <div className="page-content">{children}</div>
      </motion.div>
    </>
  );
};

// Animated Routes Component with different animations per route
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition routeType="fade">
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition routeType="slide">
              <Produts />
            </PageTransition>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PageTransition routeType="scale">
              <SingleProduct />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition routeType="slideUp">
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/services/:serviceId"
          element={
            <PageTransition routeType="fade">
              <ServiceDetail />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <WhatsAppButton />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
