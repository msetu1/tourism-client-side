import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Destination", "Tour", "Adventure"],
    loop: 0,
  });
  return (
    <div className="">
      <div
        className="hero min-h-[750px] bg-fixed"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/7jxMq3q/nature-2990060-640.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-55 bg-black"></div>
        <div className="hero-content text-neutral-content text-center -mt-10">
          <div className="">
            <div className="App w-[320px] h-[100px] md:h-fit md:w-full">
              <p className="text-blue text-3xl dark:text-white font-josefin">
                Discover Your next {" "}
                <span className="text-[#22d3ee] font-medium">{text}</span>
              </p>
            </div>
            <span className="-mt-8 md:-mt-12 mb-4 h-2 md:h-3 w-[250px] md:w-[500px] common-bg relative z-0"></span>

            <h1 className="mb-10 mt-5 text-5xl font-bold">
              Wander the World, Create Memories
            </h1>
            <p className="mb-10 lg:mx-56">
              "Wander the World, Create Memories" invites travelers to explore
              diverse destinations, immerse in new cultures, and embark on
              unforgettable adventures. From hidden gems to iconic landmarks,
              this travel project helps you craft personalized journeys, turning
              every trip into cherished memories.
            </p>
            <button className="text-black btn-class bg-[#67e8f9]">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
