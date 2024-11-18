import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-full lg:w-1/2 px-4 lg:px-10">
        <div className="bg-[#22d3ee] px-4 py-3 w-fit mx-auto flex justify-between gap-10 rounded-full">
          <button
            className={`${
              activeTab === "login" ? "bg-[#a5f3fc]" : ""
            }  font-bold rounded-full px-6 py-2`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`${
              activeTab === "register" ? "bg-[#a5f3fc]" : ""
            }  font-bold rounded-full px-6 py-2`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* form display  */}
        <div className="mt-8">
          {activeTab === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
