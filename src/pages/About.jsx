
import AboutInfo from "../components/AboutInfo";
import AboutUs from "../components/AboutUs";
import Journey from "../components/Journey";
import MissionVision from "../components/MissionVision";
import Navbar from "../components/Navbar";
import ParentCompany from "../components/ParentCompany";
import AboutFooter from "../components/AboutFooter"

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <AboutInfo />
      <ParentCompany />
      <MissionVision />
      <Journey />
      <AboutFooter />
      
    </div>
  );
};

export default Home;