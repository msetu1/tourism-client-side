import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed mb-20"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/ss8tYfF/error.gif')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <Link to="/">
          <button className="btn-class text-black">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
