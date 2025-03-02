import { useContext } from "react";
import Swal from "sweetalert2";
import authContext from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginSystem = () => {
    const { googleSignIn, setUser, user, userSignOut } = useContext(authContext)

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
        <div className="border rounded-full px-3 py-1 cursor-pointer">
            {
                user ? <p onClick={handleSignOut}>Sign-Out</p>
                    :
                    <p onClick={handleSignIn} className="flex gap-2 items-center"><FcGoogle className="text-lg" />Sign-In</p>
            }
        </div>
    );
};

export default GoogleLoginSystem;