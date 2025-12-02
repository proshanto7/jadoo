import Booking from "./components/bookTrip/Booking";
import Category from "./components/category/Category";
import Destination from "./components/destination/Destination";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testimonials from "./components/testimonials/Testimonials";


function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Category />
      <Destination />
      <Booking />

      <Testimonials/>

  
    </main>
  );
}

export default App;
