import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";
const CommonBanner = ({subText,headerText}) => {
    return (
        <div
        className="hero min-h-[540px] mb-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6016756/pexels-photo-6016756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-3xl lg:text-5xl md:text-4xl font-bold">
              {headerText}
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
            <p className="hover:text-[#22d3ee] hover:underline-offset-4 hover:underline"><Link className="text-2xl font-bold" to='/'>Home</Link></p>
            <p className="text-2xl font-semibold flex items-center gap-3">
            <MdOutlineDoubleArrow className=" font-bold text-[#22d3ee] text-2xl" /> {subText}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CommonBanner;