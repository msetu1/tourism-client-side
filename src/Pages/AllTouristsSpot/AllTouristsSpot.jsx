import { useLoaderData } from "react-router-dom";
import CommonBanner from "../../Shared/CommonBanner";
import TouristsCard from "../../components/TouristsCard/TouristsCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AllTouristsSpot = () => {
  const allTourists = useLoaderData();
  const [allTourism, setAllTourism] = useState(allTourists);

  const handleSort = () => {
    fetch("http://localhost:5000/allTourists/descending")
      .then((res) => res.json())
      .then((data) => setAllTourism(data));
  };
  return (
    <div className="">
      <Helmet>
        <title> All Tourists Spot | rf Travels
        </title>
      </Helmet>
      <CommonBanner headerText={"Explore destinations around the globe"} subText={'All Tourists Spot'} />
      <div className="mt-0 lg:max-w-7xl mx-auto px-5 md:px-10 lg:px-0 lg:mb-32 md:mb-16 mb-10">
      {allTourism?.length === 0 ? (
        <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
          <img
            className="h-full"
            src="https://i.ibb.co/3FVgSYq/3009287.jpg"
            alt=""
          />
        </div>
      ) : (
        <div className="max-w-[1170px] mx-auto  ">
          {/* dropdown */}
          <div className="lg:max-w-5xl mx-auto  flex justify-center">
            <div className="dropdown dropdown-end mb-20 lg:mb-0">
              <div
                tabIndex={0}
                role="button"
                className=" py-3 px-6 text-xl btn-class mb-2"
              >
                Sort By
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-yellow text-blue rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={handleSort}>
                  <a className="text-xl font-bold hover:border hover:border-[#22d3ee]">
                    Average Cost
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-x-10 lg:gap-y-16">
        {allTourism?.map((item) => (
          <TouristsCard key={item._id} item={item}></TouristsCard>
        ))}
      </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default AllTouristsSpot;
