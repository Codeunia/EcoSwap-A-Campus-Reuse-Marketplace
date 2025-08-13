import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import RecentListing from "../components/RecentListing";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <HowItWorks />
        <RecentListing />
      </main>
      <Footer />
    </>
  );
}
