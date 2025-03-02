import { FaArrowAltCircleUp } from "react-icons/fa";
import { NavLink } from "react-router";
import GoogleLoginSystem from "../../components/SocialLogin/GoogleLoginSystem";

const Main = () => {
    return (
        <div className="main bg-gray-900 border  p-4 w-full flex flex-col">
            <div className="top grow-1">
                <div className="flex justify-between">
                    <a href="">Thinkin AI</a>
                    <GoogleLoginSystem/>
                </div>
            </div>
            <div className="bottom ">
                <div className="bg-gray-600 rounded-3xl py-2 px-4 max-w-2xl mx-auto flex justify-between">
                    <div className="w-full">
                        <input type="text" placeholder="Ask anything" className="border-none outline-none px-2 w-full" />
                        <div className="flex justify-between pt-4">
                            <nav className="space-x-1">
                                <NavLink className={`py-1 px-3 rounded-full bg-gray-800 text-gray-400 hover:text-gray-300`}>Ask Anything</NavLink>
                                <NavLink className="py-1 px-3 rounded-full bg-gray-800 text-gray-400 hover:text-gray-300">Geneate Image</NavLink>
                                <NavLink className="py-1 px-3 rounded-full bg-gray-800 text-gray-400 hover:text-gray-300">Upload Image</NavLink>
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