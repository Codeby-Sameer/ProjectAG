import Divisions from "./Divisions";
import HeroCarousel from "./Hero/HeroCarousel";
import KeyTopics from "./Hero/KeyTopics";
import QualityExcellence from "./Hero/QualityExcellence";
import WorkProcess from "./Hero/WorkProcess";

const Hero = () => {
  return (
    <>
      <HeroCarousel/>
      <Divisions/>
      <WorkProcess />
      <QualityExcellence />
      <KeyTopics />
    </>
  );
};

export default Hero;