import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AppLayout = () => {
    return (
        <div className="bg-black h-screen">
            <header>
                <Navbar />
            </header>
            <Outlet/>

        </div>
    );
};

export default AppLayout;