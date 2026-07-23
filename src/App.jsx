import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import TrackRail from "./components/TrackRail";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// App.jsx just lays out the sections in order — each section
// manages its own state and logic internally, so this file stays
// short and readable.
export default function App() {
  return (
    <div className="min-h-screen">
      {/* fixed, non-interactive grain texture — defined once in
          index.css (.grain-overlay), sits above all sections */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <TrackRail />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
