import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductTabs from "../components/ProductTabs";
import ProductGrid from "../components/ProductGrid";
import AboutFooter from "../components/AboutFooter";


export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <Navbar />
        <Hero />
        <ProductTabs />
        <ProductGrid />
        <AboutFooter />

    </div>
  );
}