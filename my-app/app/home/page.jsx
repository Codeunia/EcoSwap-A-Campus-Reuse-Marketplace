"use client";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import CategoriesSection from "../../components/CategoriesSection";
import HowItWorks from "../../components/HowItWorks";
import RecentListing from "../../components/RecentListing";
import Footer from "../../components/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function Home() {
  return (
    <>
      <Header />
      <ProtectedRoute>
        <main>
          <>
            <HeroSection />
            <CategoriesSection />
            <HowItWorks />
            <RecentListing />
          </>
        </main>
      </ProtectedRoute>
      <Footer />
    </>
  );
}
