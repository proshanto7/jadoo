import Booking from "./components/bookTrip/Booking";
import Category from "./components/category/Category";
import Company from "./components/company/Company";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Subscribe from "./components/subscribe/Subscribe";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Category />
      <Destination />
      <Booking />
      <Testimonials />
      <Company />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
