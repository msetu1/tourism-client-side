import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import GoogleMap from "../../Ui/GoogleMap/GoogleMap";
import BookNow from "../../Ui/BookNow/BookNow";
import DetailsTable from "../../Ui/DetailsTable/DetailsTable";

const TouristsDetails = () => {
    const {id}=useParams();
    
    const [card,setCard]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/singleCard/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setCard(data)
            console.log(data);
        })
    },[id])
    return (
        <div className="lg:mb-20">
            <div>
        <figure className="overflow-hidden  relative mb-5 h-[45%]">
          <img
            className="w-full h-[540px] object-cover rounded group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
            src={card.img}
            alt="course"
          />
        </figure>
        <div className=" absolute end-[170px] bottom-[149px] rounded-2xl border-[20px]">
          <img className="w-[300px] h-[200px]" src={card.img} alt="" />
        </div>
      </div>
      <div className="mt-20 container-class">
        <div className="">
          <h2 className="text-5xl font-bold mb-3">
            {card.tourists_spot_name}
          </h2>
          <h2 className="text-gray-500 font-medium flex items-center gap-1 mb-4">
            <FaLocationDot className="text-2xl text-[#22d3ee]" />{" "}
            {card.location} Division
          </h2>

          <p className="mt-4 text-gray-500">{card.description}</p>
        </div>
        <div className="flex  gap-10 mt-20">
          <div className="w-full lg:w-[60%]  drop-shadow-lg">
            <DetailsTable card={card}></DetailsTable>
            <div className="mt-20 ">
                <GoogleMap></GoogleMap>
            </div>
          </div>
          <div className="w-full lg:w-[40%] ">
            <BookNow card={card}></BookNow>
          </div>
        </div>
      </div>
        </div>
    );
};

export default TouristsDetails;