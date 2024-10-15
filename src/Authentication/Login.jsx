import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  // password
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const accepted = form.terms.checked;

    if (!accepted) {
      return Swal.fire({
        title: "Error!",
        text: "Please Accept remember me",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    signIn(email, password, accepted)
      .then((result) => {
        console.log(result.user);

        // navigate
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Success",
          text: "User Logged is successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Invalid email and password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className=" px-4 lg:px-10 xl:px-10">
      <h1 className="text-center mb-5 text-xl">
        Welcome <span className="text-2xl text-primary font-bold">Back!!</span>
      </h1>

      <p className="text-[#5B5B5B] my-8">
        Please login your account and explore your favorite courses
      </p>

      <form className="space-y-8" onSubmit={onSubmit}>
        <div className="space-y-8">
          {/* Email input */}
          <div className="space-y-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-6 py-3 border border-[#22d3ee] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none rounded-xl focus:ring-2 focus:ring-[#22d3ee] focus:border-[#22d3ee] focus:bg-[#E8F9F9]"
            />
          </div>

          {/* Password input */}
          <div className="space-y-2 relative">
            <label htmlFor="password">Password</label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-6 py-3 border border-[#22d3ee] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none rounded-xl focus:ring-2 focus:ring-[#22d3ee] focus:border-[#22d3ee] "
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-10 right-5 cursor-pointer"
            >
              {showPassword ? (
                <BsEyeFill className="common-color text-xl" />
              ) : (
                <BsEyeSlashFill className="common-color text-xl" />
              )}
            </span>
          </div>

          {/* Remember Me and Forgot Password in one row */}
          <div className="flex justify-between items-center">
            {/* Remember Me ba terms  */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="form-checkbox text-[#22d3ee]"
              />
              <label htmlFor="terms" className="flex items-center space-x-2">
                <span className="text-[#5B5B5B]">Remember Me</span>
              </label>
            </div>
            {/* forgate password  */}
            <a
              //   onClick={handleForgotPassword}
              href="#"
              className="text-[#22d3ee] hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-5">On the other hand !!</h2>
          <div className="flex items-center gap-5">
            <button className="bg-[#a5f3fc] flex items-center gap-3 justify-center px-8 py-3 rounded-full font-bold">
              <FaGoogle className="text-xl text-red-600 " /> <span>google</span>
            </button>
            <button className="bg-[#a5f3fc] flex items-center gap-3 justify-center px-8 py-3 rounded-full font-bold">
              <TbBrandGithubFilled className="text-xl text-[#38bdf8] " />{" "}
              <span>git hub</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <input
            className="bg-[#22d3ee] font-bold px-12 py-4 w-fit rounded-xl text-white cursor-pointer"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
