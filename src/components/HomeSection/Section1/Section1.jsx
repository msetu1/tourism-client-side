import { TfiWorld } from "react-icons/tfi";
import { MdOutlineLightMode } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";
const Section1 = () => {
    return (
        <div className="container-class my-32">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
            <div className="flex items-center justify-center">
            <TfiWorld className="text-7xl" />
            </div>
                <h2 className="text-xl font-bold text-gray-700 mb-3 mt-5">Discover the possibilities</h2>
                <p className="text-gray-500">With nearly half a million attractions, hotels & more, you are sure to find joy.</p>
            </div>
            <div className="text-center">
            <div className="flex items-center justify-center">
            <MdOutlineLightMode className="text-7xl" />
            </div>
                <h2 className="text-xl font-bold text-gray-700 mb-3 mt-5">Enjoy deals & delights</h2>
                <p className="text-gray-500">Quality activities. Great prices. Plus, earn credits to save more.</p>
            </div>
            <div className="text-center">
            <div className="flex items-center justify-center">
            <FaUmbrellaBeach className="text-7xl" />
            </div>
                <h2 className="text-xl font-bold text-gray-700 mb-3 mt-5">Exploring made easy</h2>
                <p className="text-gray-500">Book last minute, skip lines & get free cancellation for easier exploring.</p>
            </div>
            <div className="text-center">
            <div className="flex items-center justify-center">
            <MdOutlineManageHistory className="text-7xl" />
            </div>
                <h2 className="text-xl font-bold text-gray-700 mb-3 mt-5">Travel you can trust</h2>
                <p className="text-gray-500">Read reviews & get reliable customer support. We are with you at every step.</p>
            </div>
            </div> 
        </div>
    );
};

export default Section1;