import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Qualities from "../components/Qualities";
import Reservation from "../components/Reservation";
import Team from "../components/Team";
import WhoAreWE from "../components/WhoAreWE";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWE />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
