import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../../Css/countries.css'

const PopularDestination = () => {
  const [country,setCountry]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/allCountries')
    .then(res=>res.json()
  .then(data=>setCountry(data)))
  },[])
console.log(country);
  return (
    <div className="lg:max-w-7xl mx-auto px-5 md:px-10 lg:px-0 lg:mb-32 md:mb-16 mb-10">
      <h2 className="mb-8 text-2xl lg:text-4xl md:text-3xl font-bold">Our Popular <span className="text-[#22d3ee]">Destinations</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-x-10 lg:gap-y-16">
        {country?.map((country,index) => (
          <div key={index} className="">
            <Link to={`/destination-details/${country.id}`}>
            <div>
              <div className=" bg-base-100 lg:w-96 h-[480px]   shadow-xl">
                <div className="country-card">
                  <img className="w-full h-[250px]"
                    src={country.image}
                    alt=""
                  />
                  
                </div>
                <div className="px-3 pt-8 pb-6">
                  <h2 className="text-2xl font-bold mb-3">
                   {country.title}
                  </h2>
                  <p className="text-gray-500 mb-5">
                    {country.description}
                  </p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestination;
