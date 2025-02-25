import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Beyond Your Brain</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link to="/generate" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;