import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
      <Offers />
    </div>
  );
};

export default HomePage;
