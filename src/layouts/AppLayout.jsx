import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

const AppLayout = () => {
    return (
        <div className="bg-black h-screen flex">
          <Sidebar/>
          <Main/>
        </div>
    );
};

export default AppLayout;