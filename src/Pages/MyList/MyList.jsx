import { useEffect, useState } from "react";
import CommonBanner from "../../Shared/CommonBanner";
import useUser from "../../Hooks/useUser";
import MyListTableRow from "../../components/MyListTableRow/MyListTableRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const { user } = useUser() || {};
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, [user?.email]);

  //  delete tourists
  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/delete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              console.log("Successfully deleted one document.");
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = touristSpots?.filter(
                (touristSpot) => touristSpot?._id !== id
              );
              setTouristSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title> My List | rf Travels
        </title>
      </Helmet>
      <CommonBanner headerText={"Your personalized travel bucket list"} subText={'My List'} />
      <div className="lg:max-w-7xl mx-auto px-5 md:px-10 lg:px-0 lg:mb-32 md:mb-16 mb-10">
      {touristSpots?.length === 0 ? (
        <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
          <img
            className="h-full"
            src="https://i.ibb.co/3FVgSYq/3009287.jpg"
            alt=""
          />
        </div>
      ) : (
        <div className="container-class ">
          <div className="custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto bg-white rounded">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0">
                <tr className="bg-[#22d3ee] text-black">
                  <th className="px-6 py-6 text-left text-xl font-semibold">
                    #
                  </th>
                  <th className="px-6 py-6 text-left text-xl font-semibold">
                    Image
                  </th>
                  <th className="px-6 py-6 text-left text-xl font-semibold">
                    Tourists Spot title
                  </th>
                  <th className="px-6 py-6 text-left text-xl font-semibold">
                    User Email
                  </th>
                  <th className="px-6 py-6 text-left text-xl font-semibold">
                    Visitors Per Year
                  </th>
                  <th className="px-6 py-6 text-left text-xl font-semibold">
                    Duration
                  </th>
                  <th className="px-6 py-6 text-left text-xl font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {touristSpots?.map((touristSpot, idx) => (
                  <MyListTableRow
                    key={touristSpot?._id}
                    touristSpot={touristSpot}
                    idx={idx}
                    handleDeleted={handleDeleted}
                  ></MyListTableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default MyList;
