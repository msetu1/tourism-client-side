import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DestinationTabs from "../../Ui/DestinationTabs/DestinationTabs";
import CommonBanner from "../../Shared/CommonBanner";

const DestinationDetails = () => {
  const [country, setCountry] = useState([]);
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    fetch("https://tourism-client-server.vercel.app/allCountries")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);
  const travel = country?.find((item) => item.id === idInt);
  console.log(travel);
  return (
    <div className="mb-20">
      <CommonBanner headerText={"Your Destination Details"} />
      <div className="container-class flex gap-5">
        <div className="w-full lg:w-[50%] ">
          <img className="rounded-xl" src={travel?.image} alt="" />
        </div>
        <div className="w-full lg:w-[50%] pl-3">
          <h2 className="mb-4 text-4xl font-bold text-[#22d3ee]">
            {travel?.title}
          </h2>
          <p className="text-gray-500">{travel?.description}</p>
          <div className="mt-10">
            <DestinationTabs travel={travel}></DestinationTabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
