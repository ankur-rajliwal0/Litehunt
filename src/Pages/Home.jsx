import Capabilities from "../Components/Capbilities";
import CTA from "../Components/CTA";
import Hero from "../Components/Hero";
import Portfolio from "../Components/Portfolio";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Capabilities />
      <Portfolio />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default Home;
