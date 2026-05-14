import '../../style/about.css';
import AboutSection from './aboutSection/AboutSection';
import FounderCard from './founderCard/Founder';
import FounderMessage from './FounderMessage/FounderMessages';
import CoFounderCard from './coFounderCard/CoFounder';
import FacultySection from './facultySection/Faculty';
import VisionMission from './visionSection/Vision';
import WhyChooseUs from './whyChoseUse/WhyChose';

const About = () => {
  return (
    <main className="about-page">
      <AboutSection />
      <div className="about-container">
        <FounderCard />
        <FounderMessage />
        <CoFounderCard />
        <FacultySection />
        <VisionMission />
        <WhyChooseUs />
      </div>
    </main>
  );
};

export default About;