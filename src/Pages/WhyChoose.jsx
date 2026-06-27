import EngineeringProcess from "../Components/EngineeringProcess";
import ReadyEngeneer from "../Components/ReadyEngeneer";
import TechStack from "../Components/TechStack";
import WhyChooseHero from "../Components/WhyChooseHero";

const WhyChoose = () => {
  return (
    <div>
      <WhyChooseHero />
      <TechStack />
      <EngineeringProcess />
      <ReadyEngeneer/>
    </div>
  );
};

export default WhyChoose;
