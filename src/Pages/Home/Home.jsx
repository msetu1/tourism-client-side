import { Helmet } from "react-helmet-async";
import Banner from "../../components/HomeSection/Banner/Banner";
import PopularDestination from "../../components/HomeSection/PopulaarDestination/PopulaarDestination";
import PopularGallery from "../../components/HomeSection/PopularGallery/PopularGallery";
import PopularTour from "../../components/HomeSection/PopularTour/PopularTour";
import Section1 from "../../components/HomeSection/Section1/Section1";
import Section2 from "../../components/HomeSection/Section2/Section2";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | rf Travels</title>
      </Helmet>
      <Banner />
      <Section1 />
      <PopularTour />
      <Section2 />
      <PopularDestination />
      <PopularGallery />
    </div>
  );
};

export default Home;
