import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn,} = useContext(AuthContext);
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
      return toast.error("Please Accept remember me");
      
    }
    signIn(email, password, accepted)
      .then((result) => {
        console.log(result.user);

        // navigate
        navigate(location?.state ? location.state : "/");
        toast.success("User Logged is successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid email and password");
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
            {/* forgot password  */}
            <a
              //   onClick={handleForgotPassword}
              href="#"
              className="text-[#22d3ee] hover:underline"
            >
              Forgot Password?
            </a>
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
