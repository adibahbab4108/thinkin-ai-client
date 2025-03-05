/* eslint-disable react/no-danger-with-children */
/* eslint-disable no-unused-vars */
import { useContext } from "react";

import authContext from "../context/AuthContext";
import { GeminiCotext } from "../context/GeminiContext";
import "./generateText.css"
import { FaBolt, FaUser } from "react-icons/fa";
const GenerateText = () => {
    const { user } = useContext(authContext)
    const { onSent,
        previousPrompt,
        setPreviousPrompt,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        loading, setLoading } = useContext(GeminiCotext)
    return (
        <>
            {
                !showResult ? <div>
                    <h1
                        className="text-5xl font-bold text-center bg-gradient-to-r from-blue-500 from-20% to-pink-500 to-80% bg-clip-text text-transparent my-4"
                    >
                        Hello, {user?.displayName}
                    </h1>
                    <p className="text-3xl text-center text-blue-300/40 font-bold ">What&apos;s on your mind?</p>

                </div> : <div className="result h-[70vh] overflow-y-scroll p-4  [&::-webkit-scrollbar]:hidden ">
                    <div className="result-title flex gap-2 items-center mb-3">
                        <FaUser  />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <FaBolt />
                        {loading ? <div className="loader w-full flex flex-col gap-2.5">
                            <hr className="border-0 rounded-2xl bg-gradient-to-r from-cyan-300 via-white to-cyan-300 h-5 animate-pulse" />
                            <hr className="border-0 rounded-2xl bg-gradient-to-r from-cyan-300 via-white to-cyan-300 h-5 animate-pulse" />
                            <hr className="border-0 rounded-2xl bg-gradient-to-r from-cyan-300 via-white to-cyan-300 h-5 animate-pulse" />
                          
                        </div> :
                            <p dangerouslySetInnerHTML={{ __html: resultData }} ></p>
                        }

                    </div>
                </div >
            }
        </>
    );
};

export default GenerateText;