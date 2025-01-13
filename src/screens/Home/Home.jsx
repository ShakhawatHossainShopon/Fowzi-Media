import Hero from "./sections/Hero/Hero";
import CardSection from "./sections/Card-section/CardSection";
import Banner from "./sections/Banner/Banner";
import Service from "./sections/Service/Service";
import Contact from "./sections/Contact/Contact";
const Home = () => {
  return (
    <div>
      <Hero />
      <CardSection />
      <Banner />
      <Service />
      <Contact />
    </div>
  );
};

export default Home;
