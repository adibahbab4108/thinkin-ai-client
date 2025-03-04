import { useContext } from "react";

import authContext from "../context/AuthContext";

const GenerateText = () => {
    const { user } = useContext(authContext)
    return (
        <div>
            <h1
                className="text-5xl font-bold text-center bg-gradient-to-r from-blue-500 from-20% to-pink-500 to-80% bg-clip-text text-transparent my-4"
            >
                Hello, {user?.displayName}
            </h1>
            <p className="text-3xl text-center text-blue-300/40 font-bold ">What&apos;s on your mind?</p>

        </div>
    );
};

export default GenerateText;