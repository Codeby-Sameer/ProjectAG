import Divisions from "./Divisions";
import HeroCarousel from "./Hero/HeroCarousel";
import KeyTopics from "./Hero/KeyTopics";
import QualityExcellence from "./Hero/QualityExcellence";
import WorkProcess from "./Hero/WorkProcess";
import ScrollingNotice from "./Sections/Scroller";

const Hero = () => {
  return (
    <>
      <HeroCarousel/>
      <ScrollingNotice/>
      <Divisions/>
      <WorkProcess />
      <QualityExcellence />
      <KeyTopics />
    </>
  );
};

export default Hero;