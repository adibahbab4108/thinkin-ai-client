import { GiHamburgerMenu } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";
const Sidebar = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className="sidebar bg-gray-700 flex flex-col justify-between px-4 py-4">
            <div className="top">
                {/* sidebar toggle icon */}
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} className="text-xl mb-8 cursor-pointer " />

                {/* New chat */}
                {
                    toggle ? <>
                        <div className="new-chat my-4 flex justify-center items-center rounded-full bg-gray-800 p-2 gap-2 cursor-pointer">
                            <FaEdit className="text-lg" />
                            <p className="text-sm">New Chat</p>
                        </div>
                        <div className="recent">
                            <p>Recent</p>
                        </div>
                        <div className="chat-history flex items-center justify-center gap-2 hover:bg-gray-800 rounded-full p-2 ">
                            <FaRegMessage className="text-lg" />
                            <p className="text-sm">Whats new...</p>
                        </div>
                    </> : null
                }

            </div>
            <div className="bottom">
                {/* setting icon */}
                {
                    toggle ? <>
                        <div className="settings flex items-center gap-2">
                            <IoMdSettings className="text-xl" />
                            <p>Settings</p>
                        </div>
                    </> : null
                }

            </div>
        </div>
    );
};

export default Sidebar;