import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Shared/CommonBanner";
const Gallery = () => {
  return (
    <div className="">
      <Helmet>
        <title> Gallery | rf Travels</title>
      </Helmet>
      <CommonBanner
        headerText={"Explore destinations around the globe"}
        subText={"Gallery"}
      />

      {/* <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6016756/pexels-photo-6016756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Showcasing beautiful tourist spots
            </h1>
            <p></p>
          </div>
        </div>
      </div> */}

      <div className="lg:max-w-7xl mx-auto px-5 md:px-10 lg:px-0 my-20">
        <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-gray-700 mb-3">
          Travels <span className="text-[#22d3ee]">Gallery ! </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/ZTQ6J4j/free-photo-of-woman-in-a-blue-dress-with-a-small-dog-standing-on-the-beach.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/TL7kJmC/istockphoto-1461087341-612x612.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/mCcBKP0/istockphoto-1458692556-612x612.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/PN7rDQh/free-photo-of-a-mountain-range-with-a-road-running-through-it.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/TWxLKHY/free-photo-of-a-vintage-car-in-a-city.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/x5bcdyJ/free-photo-of-a-man-standing-in-front-of-a-mountain-lake.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/yY107nP/istockphoto-1436223579-612x612.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/bvGy979/free-photo-of-the-old-bridge-over-the-river-in-a-city.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/1brXRR5/free-photo-of-scenic-view-of-a-river-between-trees-in-a-mountain-valley.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/8cydVxQ/free-photo-of-trees-by-thames-in-london.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/HNy64z5/parliament-4516476-640.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full lg:w-[300px] h-[250px]"
              src="https://i.ibb.co.com/q1ncnyL/istockphoto-2158022624-612x612.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
