import { Link, useLoaderData} from "react-router-dom";
import TouristsCard from "../../TouristsCard/TouristsCard";


const PopularTour = () => {
  const tourism = useLoaderData();
  return (
    <div className="lg:max-w-7xl mx-auto px-5 md:px-10 lg:px-0 lg:mb-32 md:mb-16 mb-10">
      <h2 className="ml-6 mb-8 text-2xl lg:text-4xl md:text-3xl font-bold">Our Popular <span className="text-[#22d3ee]">Tour Packages</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-x-10 lg:gap-y-16">
        {tourism?.slice(0, 6).map((item) => (
          <TouristsCard key={item._id} item={item}></TouristsCard>
        ))}
      </div>
      <div className="text-center mt-10">
      <Link to='/all-tourists-spot'>
      <button className="text-2xl font-bold bg-[#22d3ee] btn-class">See All</button>
      </Link>
      </div>
    </div>
  );
};

export default PopularTour;
