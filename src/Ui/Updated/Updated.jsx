import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import useUser from "../../Hooks/useUser";
import Swal from "sweetalert2";
import { getNames } from "country-list";

// duration data
const seasonality = [
  "Summer",
  "Winter",
  "Rainy Season",
  "Autumn",
  "Late Autumn",
  "Spring",
];

const Updated = ({ touristSpot }) => {
  const { user } = useUser() || {};

  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = getNames();
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // update section
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const tourists_spot_name = form.tourists_spot_name.value;
    const img = form.img.value;
    const average_cost = form.average_cost.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const seasonality = form.seasonality.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const email = user.email;

    const info = {
      tourists_spot_name,
      img,
      average_cost,
      travel_time,
      totalVisitorsPerYear,
      seasonality,
      country,
      location,
      description,
      email,
    };
    console.log(info);
    fetch(
      `https://tourism-client-server.vercel.app/updateCard/${touristSpot?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Success",
            text: "tourists updated successFully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="text-2xl font-bold bg-[#67e8f9] p-2 text-white rounded-lg hover:bg-[#a5f3fc] transition duration-200"
      >
        <MdModeEdit />
      </button>
      {/* Modal for updating tourist */}
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleModal}
        ></div>

        {/* Modal box */}
        <div
          className={`relative w-full max-w-4xl bg-white rounded-lg shadow transform transition-transform duration-300 ${
            isModalOpen ? "scale-100" : "scale-75"
          }`}
        >
          {/* Modal content */}
          <div className="relative rounded-lg max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6">
              <form onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-5">
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Tourists Spot Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="tourists_spot_name"
                      defaultValue={touristSpot?.tourists_spot_name}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="img"
                      name="img"
                      defaultValue={touristSpot?.img}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-5">
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Average Cost
                      </span>
                    </label>
                    <input
                      type="number"
                      name="average_cost"
                      defaultValue={touristSpot?.average_cost}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-[50%] flex items-center justify-center gap-4 ">
                    <div className="w-[50%] mt-3">
                      {/* select Travel time */}
                      <label className="label-text font-semibold text-md text-gray-600">
                        Seasonality
                      </label>
                      <select
                        name="seasonality"
                        defaultValue={touristSpot?.seasonality}
                        className="text-left w-full rounded py-3 px-5 mt-2  border border-[#38bdf8]"
                      >
                        {/* Disabled placeholder option */}
                        <option value="" disabled selected hidden>
                          Seasonality
                        </option>
                        {seasonality?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-[50%]">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Select Country
                        </span>
                      </label>

                      <select
                        id="country"
                        name="country"
                        defaultValue={touristSpot?.country}
                        className="text-left w-full rounded py-3 px-5 mt-2  border border-[#38bdf8]"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                      >
                        <option value="">Select a country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-5">
                  <div className="w-full lg:w-[50%] flex items-center justify-center gap-4 ">
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Travel Time
                        </span>
                      </label>
                      <input
                        type="number"
                        name="travel_time"
                        defaultValue={touristSpot?.travel_time}
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Total Visitors Per Year
                        </span>
                      </label>
                      <input
                        type="number"
                        name="totalVisitorsPerYear"
                        defaultValue={touristSpot?.totalVisitorsPerYear}
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Location
                      </span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      defaultValue={touristSpot?.location}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                </div>

                {/*  description */}
                <div className="mt-10">
                  <label className="text-[#5B5B5B] font-semibold">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    defaultValue={touristSpot?.description}
                    className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-8 bg-[#38bdf8] border-[#38bdf8] text-white text-xl "
                >
                  Updated
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updated;
