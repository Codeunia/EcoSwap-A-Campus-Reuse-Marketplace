"use client" ;
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import CategoriesSection from "../../components/CategoriesSection"; 
import HowItWorks from "../../components/HowItWorks"; 
import RecentListing from "../../components/RecentListing"
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <>
            <HeroSection />
            <CategoriesSection />
            <HowItWorks />
            <RecentListing />
          </>
      </main>
      <Footer />
    </>
  );
}