import Become_an_agent from "../components/Become_an_agent";
import Footer from "../components/Footer";
import Latest_property from "../components/Latest_property";
import Navbar from "../components/Navbar";
import Neighborhood_properties from "../components/Neighborhood_properties";
import Real_estate from "../components/Real_estate";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Who_are_we from "../components/Who_are_we";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Real_estate />
        <Who_are_we />
        <Latest_property />
        <Services />
        <Neighborhood_properties />
        <Team />
        <Testimonials />
        <Become_an_agent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
