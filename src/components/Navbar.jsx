import { Link } from "react-router";
import { RiAiGenerate2 } from "react-icons/ri";
import { FcGallery, FcGoogle, FcHome, } from "react-icons/fc";
import { useContext } from "react";
import Swal from 'sweetalert2'
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { googleSignIn, setUser, user, userSignOut } = useContext(AuthContext)

  const handleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user)
      }).catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage,)
      })
  }
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout successfull",
          icon: "success"
        });

        userSignOut().then(() => {
          // Sign-out successful.
          setUser(null);
        }).catch((error) => {
          alert(error)
        });
      }
    });
  }
  return (
    <div>
      <div className="navbar shadow-sm">
        <div className=" flex-1 text-left">
          <a className="btn btn-ghost text-xl">Thinkin AI</a>
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link to="/" className="border rounded-full"> <FcHome className="text-lg" />  Home</Link></li>
            <li><Link className="border rounded-full"><FcGallery className="text-lg" /> Gallary</Link></li>
            <li><Link to="/generate" className="border rounded-full"> <RiAiGenerate2 className="text-lg" />Generate Images</Link></li>
            <li><Link className="border rounded-full">
              {
                user ? <p onClick={handleSignOut}>Sign-Out</p>
                  :
                  <p onClick={handleSignIn} className="flex gap-2 items-center"><FcGoogle className="text-lg" />Sign-In</p>
              }
            </Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;