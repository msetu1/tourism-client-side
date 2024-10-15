import { FaArrowRight } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";

const TouristsCard = ({ item }) => {
    const {user} =useUser() || {}
  const {
    tourists_spot_name,
    img,
    _id,
    average_cost,
    travel_time,
    totalVisitorsPerYear,
    seasonality,
    country,
    description,
  } = item || {};
  return (
    <div>
      <div className=" bg-base-100 lg:w-96 lg:h-[510px] md:h-[530px] border  shadow-xl">
        <div className="relative">
          <div className="country-card">
          <img className="w-full h-[250px] " src={img} alt="" />
          </div>
          <div className="absolute end-3 bottom-3">
            <h2 className="font-bold text-xl">
              # <span className="text-lg text-[#22d3ee]">{country}</span>
            </h2>
          </div>
        </div>
        <div className="px-5 mt-3 pb-6">
          <h2 className="text-2xl font-bold mb-3">{tourists_spot_name}</h2>
          <div className="flex items-center gap-2 mb-2">
            <button className="bg-[#22d3ee] px-4 py-1 rounded-full text-white font-semibold">
              {travel_time} days
            </button>
            <button className="bg-[#22d3ee] px-4 py-1 rounded-full text-white font-semibold">
              ${average_cost}
            </button>
            <button className="bg-[#22d3ee] px-4 py-1 rounded-full text-white font-semibold">
              {seasonality}
            </button>
          </div>
          {item?.description.length > 100 ? (
            <p className="text-gray-500 ">{description.slice(0, 100)}</p>
          ) : (
            <p className="text-gray-500 ">{description}</p>
          )}
          <h2 className="font-semibold mt-1 ">
            Visitors Per Year: {totalVisitorsPerYear}
          </h2>
          <div className="flex items-center justify-between mt-5">
            <h2 className="text-gray-500 font-semibold flex items-center gap-2">
              <IoIosContact className="text-xl text-[#22d3ee]" /> {user?.displayName
              }
            </h2>
            <Link to={`/tourists-details/${_id}`}>
              <h2 className="font-semibold flex items-center gap-2 text-gray-600">
                View Details <FaArrowRight className="text-xl text-[#22d3ee]" />
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TouristsCard;
