import './App.css'
import Header from "./components/layout/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import HappyCus from "./pages/HappyCus";
import Team from "./pages/Team";
import PeopleSay from "./pages/PeopleSay";
import ContactUs from "./pages/ContactUs";
import LatestBlog from "./pages/LatestBlog";
import Footer from "./pages/Footor";
import Home from "./pages/Home";
import CursorDot from "./pages/CursorDot";
import ServicesDetails from "./sections/services/ServicesDetails";
import BlogDetails from "./pages/BlogDetails";
import ProjectDetails from "./pages/ProjectDetails";
import TeamDetails from "./pages/TeamDetails";
import Faq from "./pages/Faq";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import GenericPage from "./pages/GenericPage";

function MainHome() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Faq />
      <HappyCus />
      <Team />
      <PeopleSay />
      <ContactUs />
      <LatestBlog />
      <Footer />
    </>
  );
}

import PricingPage from "./pages/PricingPage";
import CalculatorPage from "./pages/CalculatorPage";
import BlogArchivePage from "./pages/BlogArchivePage";
import CorporateDemo from "./pages/CorporateDemo";
import FinancialDemo from "./pages/FinancialDemo";
import MarketingDemo from "./pages/MarketingDemo";
import HealthDemo from "./pages/HealthDemo";
import ITSolutionDemo from "./pages/ITSolutionDemo";

// Wrapper for pages that are normally sections
function PageWrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <CursorDot />
      <Routes>
        {/* Main Home */}
        <Route path="/" element={<MainHome />} />

        {/* Existing Standalone Pages */}
        <Route path="/service/:id" element={<ServicesDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/team/:id" element={<TeamDetails />} />

        {/* Home Demos */}
        <Route path="/corporate-demo" element={<CorporateDemo />} />
        <Route path="/financial-demo" element={<FinancialDemo />} />
        <Route path="/marketing-demo" element={<MarketingDemo />} />
        <Route path="/health-demo" element={<HealthDemo />} />
        <Route path="/it-solution-demo" element={<ITSolutionDemo />} />
        <Route path="/business-solutions-demo" element={<GenericPage title="Business Solutions Demo" />} />
        <Route path="/consulting-demo" element={<GenericPage title="Consulting Demo" />} />
        <Route path="/corporate-solutions-demo" element={<GenericPage title="Corporate Solutions Demo" />} />

        {/* Main Nav Items */}
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactUs /></PageWrapper>} />
        <Route path="/blog" element={<BlogArchivePage />} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />

        {/* Blog Pages */}
        <Route path="/blog-archive" element={<BlogArchivePage />} />
        <Route path="/blog-masonry" element={<GenericPage title="Blog Masonry" />} />
        <Route path="/blog-right-sidebar" element={<GenericPage title="Blog Right Sidebar" />} />
        <Route path="/blog-left-sidebar" element={<GenericPage title="Blog Left Sidebar" />} />
        <Route path="/blog-business" element={<GenericPage title="Business Blog" />} />
        <Route path="/case-study-blog" element={<GenericPage title="Case Study Blog" />} />
        <Route path="/market-trends" element={<GenericPage title="Market Trends" />} />

        {/* Other Pages */}
        <Route path="/appointment" element={<GenericPage title="Appointment" />} />
        <Route path="/pricing-plans" element={<PricingPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/project-sidebar" element={<GenericPage title="Project Sidebar" />} />
      </Routes>
    </>
  )
}

export default App
