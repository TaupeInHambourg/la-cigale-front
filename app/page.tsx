import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorialBanner from "@/components/EditorialBanner";
import HistorySection from "@/components/HistorySection";
import MenuSection from "@/components/MenuSection";
import CulturalLife from "@/components/CulturalLife";
import SalonsSection from "@/components/SalonsSection";
import ShopSection from "@/components/ShopSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <EditorialBanner />
        <HistorySection />
        <MenuSection />
        <CulturalLife />
        <SalonsSection />
        <ShopSection />
      </main>
      <Footer />
    </>
  );
}
