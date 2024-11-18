import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  // show password
  const [showPassword, setShowPassword] = useState(false);

  //   register

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    // password validation
    if (password.length < 6) {
      return toast.error("Please password must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Your password have at least one upper case characters"
      );
    } else if (!/[a-z]/.test(password)) {
      return toast.error(
        "Your password have at least one lower case characters"
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Register successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!!");
      });
  };

  return (
    <div className="px-4 lg:px-10 xl:px-10">
      <h1 className="text-center mb-5 text-xl">
        Welcome to{" "}
        <Link to="/">
          <span className="text-2xl text-primary font-bold">Travel !!</span>
        </Link>
      </h1>

      <p className="text-[#5B5B5B] my-8">
        Join our platform and unlock exclusive benefits. Fill in the details
        below to get started.
      </p>

      <form className="space-y-8" onSubmit={onSubmit}>
        <div className="space-y-8">
          {/* Name input */}
          <div className="flex flex-col lg:flex-row xl:flex-row gap-6 lg:gap-4 xl:gap-4">
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label htmlFor="name">User name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-6 py-3 border border-[#22d3ee] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#22d3ee] focus:border-[#22d3ee] focus:bg-[#E8F9F9]"
              />
            </div>

            {/* Email input */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-6 py-3 border border-[#22d3ee] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#22d3ee] focus:border-[#22d3ee] focus:bg-[#E8F9F9]"
              />
            </div>
          </div>

          {/* Password input */}
          <div className="space-y-2 relative">
            <label htmlFor="password">Password</label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-6 py-3 border border-[#22d3ee] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#22d3ee] focus:border-[#22d3ee] focus:bg-[#E8F9F9]"
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

          {/* Image Upload Input */}
          <div className="space-y-2">
            <label htmlFor="photoUrl">Profile Photo</label>
            <input
              type="link"
              name="photoUrl"
              placeholder="URL"
              className="w-full px-6 py-3 border border-[#22d3ee] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#22d3ee] focus:border-[#22d3ee] focus:bg-[#E8F9F9]"
            />
          </div>

          {/* Gender Selection */}
          <div className="space-y-2">
            <label htmlFor="gender">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="male"
                  className="form-radio text-[#22d3ee]"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="female"
                  className="form-radio text-[#22d3ee]"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <input
            className="bg-[#22d3ee] font-bold px-12 py-4 w-fit  rounded-xl text-white cursor-pointer"
            type="submit"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
