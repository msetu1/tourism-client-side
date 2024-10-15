import { AiOutlineFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="footer  text-primary-content py-20 container-class">
        <aside className="text-center">
          <div>
          <h2 className="text-3xl font-bold mb-4 text-white ">rf Travels</h2>
          <p className="text-white max-w-[300px] text-center">
          Explore the world's most stunning destinations with us. Your adventure begins here! Contact us for personalized travel plans and unforgettable experiences. © 2024 <span className="text-xl font-bold text-[#22d3ee] mx-1">[ rf Travels ]</span> . <br /> All Rights Reserved.
          </p>
        
          </div>
        </aside>
        <nav>
          <h6 className="text-xl font-bold text-white">Popular Destinations</h6>
          <a className="text-slate-400 text-[16px] font-semibold">
            Asian Adventures
          </a>
          <a className="text-slate-400 text-[16px] font-semibold">
            Cox’s Bazar
          </a>
          <a className="text-slate-400 text-[16px] font-semibold">
            Mountain Treks
          </a>
          <a className="text-slate-400 text-[16px] font-semibold">Bangkok</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold text-white">Quick Links</h6>
          <Link
            to="/"
            className="text-[16px] text-slate-400 font-semibold hover:underline hover:underline-offset-4 hover:text-[#22d3ee]"
          >
            Home
          </Link>
          <Link
            to="/all-tourists-spot"
            className="text-[16px] text-slate-400 font-semibold hover:underline hover:underline-offset-4 hover:text-[#22d3ee]"
          >
            All Tourists Spot
          </Link>
          <Link
            to="/my-list"
            className="text-[16px] text-slate-400 font-semibold hover:underline hover:underline-offset-4 hover:text-[#22d3ee]"
          >
            My List
          </Link>
          <Link
            to="/gallery"
            className="text-[16px] text-slate-400 font-semibold hover:underline hover:underline-offset-4  hover:text-[#22d3ee]"
          >
            Gallery
          </Link>
        </nav>
        <nav>
          <h6 className="text-xl font-bold text-white">Contact</h6>
          <a className="text-slate-400 text-[16px] font-semibold">
            Phon: 01761332232
          </a>
          <a className="text-slate-400 text-[16px] font-semibold">
            email: msetu5763@gmail.com
          </a>
          <h6 className="text-xl font-bold mt-3 text-white">Follow Us</h6>
          <div className="flex items-center gap-4 mt-2 text-white">
            <a href="https://www.facebook.com/rfsaatu" className="text-3xl">
              <FcGoogle></FcGoogle>
            </a>
            <a href="" className="text-3xl">
              <AiOutlineFacebook></AiOutlineFacebook>
            </a>
            <a href="https://github.com/msetu1" className="text-3xl">
              <BsGithub></BsGithub>
            </a>
            <a href="" className="text-3xl">
              <FiTwitter></FiTwitter>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center text-primary-content bg-gray-600 p-4 font-bold text-xl">
        <aside>
          <p>
            Copyright © {new Date(15 / 10 / 2024).getFullYear()} - All right
            reserved by Travel tour
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
