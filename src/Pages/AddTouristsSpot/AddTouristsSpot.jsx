import { getNames } from "country-list";
import { useState } from "react";
import useUser from "../../Hooks/useUser";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

// duration data
const seasonality = [
  "Summer",
  "Winter",
  "Rainy Season",
  "Autumn",
  "Late Autumn",
  "Spring",
];
const AddTouristsSpot = () => {
  const { user } = useUser() || {};
  //   country
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = getNames();
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // handle onSubmit
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

    const newTourists = {
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
    console.log(newTourists);
    fetch("https://tourism-client-server.vercel.app/addTourists", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTourists),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="pt-28 max-w-4xl mx-auto mb-5">
      <Helmet>
        <title> Add Tourists Spot | rf Travels</title>
      </Helmet>
      <div className="p-6">
        <h1 className=" text-2xl font-bold mb-5"> Add Tourists Spot !!</h1>
        <div>
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
                  placeholder="tourists spot name"
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
                  placeholder="URL"
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
                  placeholder="Average Cost"
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
                    placeholder="All Seasonality"
                    name="seasonality"
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
                    defaultValue={0}
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
                    defaultValue={0}
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
                  placeholder="location"
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
                placeholder="description here.."
                className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-8 bg-[#38bdf8] border-[#38bdf8] text-white text-xl "
            >
              Add Tourists
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
