import { FaArrowAltCircleUp } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import GoogleLoginSystem from "../../components/SocialLogin/GoogleLoginSystem";
import { useState } from "react";

const Main = () => {
    const [inputField, setInputField] = useState("Ask Anything")
    return (
        <div className="main bg-gray-900 p-4 w-full flex flex-col">
            <div className="top grow-1">
                <div className="flex justify-between">
                    <a href="">Thinkin AI</a>
                    <GoogleLoginSystem />
                </div>
                <div className="h-full my-2">
                    <Outlet />
                </div>
            </div>
            <div className="bottom ">
                <div className="bg-gray-600 rounded-3xl py-2 px-4 max-w-2xl mx-auto flex justify-between">
                    <div className="w-full">
                        <input type="text" placeholder={`${inputField}`} className="border-none outline-none px-2 w-full" />
                        <div className="flex justify-between pt-4">
                            <nav className="space-x-1">
                                <NavLink
                                    to="ask"
                                    onClick={() => setInputField("Ask Anything (e.g. \"Will AI take Our Jobs?\" )")}
                                    className={({ isActive }) =>
                                        `${isActive ? "text-gray-300  bg-black" : "text-gray-500 bg-gray-800"} py-1 px-3 rounded-full hover:text-gray-200`
                                    }
                                >Ask Anything
                                </NavLink>

                                <NavLink
                                    to="generate-image"
                                    onClick={() => setInputField("Generate Image (e.g. \"A tiger stealing meat from a crowded market\")")}
                                    className={({ isActive }) =>
                                        `${isActive ? "text-gray-300  bg-black" : "text-gray-500 bg-gray-800"} py-1 px-3 rounded-full hover:text-gray-200`
                                    }>Geneate Image</NavLink>
                                <NavLink
                                    to=""
                                    className={({ isActive }) =>
                                        `${isActive ? "text-gray-300  bg-black" : "text-gray-500 bg-gray-800"} py-1 px-3 rounded-full hover:text-gray-200`
                                    }
                                >
                                    Upload Image
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                    <div className="flex justify-center items-center ml-4">
                        <FaArrowAltCircleUp className=" text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;