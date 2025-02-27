import { useContext } from "react";
import Swal from "sweetalert2";
import authContext from "../context/AuthContext";

//282ad4d30321c7345f706167687f2bb7214baec0eaf28d0ca6a9efe336e5cfad85a395751796d859459e02b7221142da
const Generate = () => {
    const { user, googleSignIn } = useContext(authContext)
    const checkUser = () => {
        if (!user) {
            Swal.fire({
                title: "Please Login",
                text: "Join as a creator with just one click",
                imageUrl: "https://img.icons8.com/?size=50&id=szz75vJoS2OI&format=gif",
                imageWidth: 70,
                imageHeight: 70,
                background: "",
                imageAlt: "Login",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    googleSignIn()
                }
            })
            return false
        } else return true
    }
    const validate = (prompt) => {
        if (!prompt) {
            Swal.fire(
                "Prompt field cannot be empty",
                "Write a prompt in the input",
                "error")
            return false
        }
        if (prompt.trim().length < 10) {
            Swal.fire("Your prompt is too small", "Write at least 10 charecter", "error")
            return
        }
    }
    const handleSubmitPrompt = (e) => {
        e.preventDefault();
        if (!checkUser()) return

        const prompt = e.target.prompt.value;
        const form = new FormData()
        form.append("prompt", prompt)

        if (!validate(prompt)) return

        fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.CLIPDROP_API_KEY,
            },
            body: form,
        })
            .then(response => response.arrayBuffer())
            .then(buffer => {
                let blob = new Blob([buffer], { type: 'image/png' });
                let url = URL.createObjectURL(blob);
                console.log(url)
            });
    }
    return (
        <div className="h-[calc(100vh-67px)] flex flex-col items-center justify-center">
            <h2>Generate Image</h2>
            <form onSubmit={handleSubmitPrompt}>
                <div className="join">
                    <div className="w-80">
                        <label className="input join-item ">
                            <input name="prompt" type="text" placeholder="Enter your prompt" />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-secondary join-item">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Generate;