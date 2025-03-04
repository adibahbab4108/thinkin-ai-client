import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero h-[calc(100vh-67px)] ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Beyond Your Brain</h1>
          <p className="py-6">
            Elevate your mind&apos;s potential with Thinkin AI&apos;s advanced intelligence. Explore, create, and innovate beyond boundaries
          </p>
          <Link to="ask" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;