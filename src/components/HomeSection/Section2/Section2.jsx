const Section2 = () => {
    return (
      <div className="lg:max-w-7xl mx-auto px-5 md:px-10 lg:px-0 mb-32 ">
        {/* what is brain web  */}
  
        <div className="flex flex-col lg:flex-row items-center gap-10 ">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-gray-700 mb-3">
              What is<span className="text-[#22d3ee]">Tourism Management </span>
            </h2>
            <p className="mt-8 text-lg text-[#696984]">
              {" "}
              Tourism Management involves the planning, development, and coordination of travel and tourism services to provide memorable experiences for visitors. It encompasses managing tourist destinations, accommodations, transportation, and activities, ensuring quality service while promoting sustainable practices.
            </p>
            <p className="mt-8 text-lg text-[#696984]">
              {" "}
              Tourism Management also focuses on analyzing market trends, improving customer satisfaction, and optimizing resources to enhance the economic and social impact of tourism. Professionals in this field work to balance visitor needs with environmental preservation, aiming to create a positive, long-lasting experience for travelers while supporting local economies.
            </p>
          </div>
          <div className=" w-full lg:w-1/2 ">
            <img className="rounded-xl w-full" src="https://i.ibb.co.com/WPxTvFc/istockphoto-2158022717-612x612.jpg" alt="" />
           
          </div>
        </div>
        {/* Mission And Vission */}
        <div className=" lg:mt-32 mt-10">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 ">
              <img
                className="rounded-xl w-full"
                src="https://i.ibb.co.com/dJ69zfw/istockphoto-1231875851-612x612.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-[44%] w-full lg:mb-0 mb-8 lg:mt-0">
              <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-gray-700 mb-4">
                Our <span className="text-[#22d3ee]">Mission & Vision</span>
              </h2>
              <p className="text-[#696984] mb-10">
              Our mission is to offer enriching, sustainable travel experiences that connect individuals to diverse cultures and breathtaking landscapes. We aim to promote responsible tourism that enhances both traveler and community well-being.
              </p>
              <p className="text-[#696984] mb-10">
              We envision becoming a global leader in ethical travel, fostering cross-cultural understanding while preserving natural and cultural heritage. Through innovative, eco-friendly solutions, we strive to create lasting memories for travelers while supporting local economies.
              </p>
              <p className="text-[#696984]">
              By inspiring sustainable exploration and promoting environmental stewardship, we seek to make travel a positive force for global connection and conservation, benefiting both travelers and the destinations they visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Section2;
  