import { useContext } from "react";
import Swal from "sweetalert2";
import authContext from "../context/AuthContext";
import SectionTitle from "../components/SectionTitle";

const Generate = () => {
    const { user, googleSignIn } = useContext(authContext);

    const checkUser = () => {
        if (!user) {
            Swal.fire({
                title: "Please Login",
                text: "Join as a creator with just one click",
                imageUrl: "https://img.icons8.com/?size=50&id=szz75vJoS2OI&format=gif",
                imageWidth: 70,
                imageHeight: 70,
                showCancelButton: true,
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    googleSignIn();
                }
            });
            return false;
        }
        return true;
    };

    const validate = (prompt, category) => {
        if (!category) {
            Swal.fire("You must select a category", "", "error");
            return false;
        }
        if (!prompt) {
            Swal.fire("Prompt field cannot be empty", "Write a prompt in the input", "error");
            return false;
        }
        if (prompt.trim().length < 10) {
            Swal.fire("Your prompt is too small", "Write at least 10 characters", "error");
            return false;
        }
        return true;
    };

    const handleSubmitPrompt = async (e) => {
        e.preventDefault();
        if (!checkUser()) return;

        const formData = new FormData(e.target);
        const prompt = formData.get("prompt");
        const category = formData.get("category");

        if (!validate(prompt, category)) return;

        const finalPrompt = `Imagine a ${category} style image of ${prompt}`;
        console.log(finalPrompt)
        formData.set("prompt", finalPrompt); // Updating the prompt in form data

        // try {
        //     const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
        //         method: "POST",
        //         headers: {
        //             "x-api-key": import.meta.env.VITE_CLIPDROP_TEXT_TO_IMG_API_KEY,
        //         },
        //         body: formData,
        //     });

        //     if (!response.ok) throw new Error("Failed to fetch image");

        //     const buffer = await response.arrayBuffer();
        //     const blob = new Blob([buffer], { type: "image/png" });
        //     const url = URL.createObjectURL(blob);
        //     console.log(url);
        //     Swal.fire({
        //         title: "Image Generated!",
        //         imageUrl: url,
        //         imageWidth: 300,
        //         imageHeight: 300,
        //         confirmButtonText: "Download",
        //     }).then(() => {
        //         const a = document.createElement("a");
        //         a.href = url;
        //         a.download = "generated-image.png";
        //         document.body.appendChild(a);
        //         a.click();
        //         document.body.removeChild(a);
        //     });

        // } catch (error) {
        //     Swal.fire("Error", error.message, "error");
        // }
    };

    return (
        <div className="h-[calc(100vh-67px)] flex flex-col items-center justify-center">
            <SectionTitle title={"Generate Image"}/>
            <form onSubmit={handleSubmitPrompt}>
                <div className="join">
                    <div className="w-80">
                        <label className="input join-item border-none">
                            <input name="prompt" type="text" placeholder="Enter your prompt" required />
                        </label>
                    </div>
                    <label className="input join-item  w-fit">
                        <select name="category" defaultValue={"Select category"} className="w-full border-none text-gray-400  rounded-md p-2 focus:border-none focus:outline-none">
                            <option disabled>Select category</option>
                            <option value="digital-art">Digital Art</option>
                            <option value="sketch">Sketch</option>
                            <option value="watercolor" className="bg-transparent">Watercolor</option>
                            <option value="oil-painting">Oil Painting</option>
                            <option value="acrylic-painting">Acrylic Painting</option>
                            <option value="pastel-art">Pastel Art</option>
                            <option value="charcoal-drawing">Charcoal Drawing</option>
                            <option value="vector-art">Vector Art</option>
                            <option value="pixel-art">Pixel Art</option>
                            <option value="3d-render">3D Render</option>
                            <option value="ai-generated-art">AI-Generated Art</option>
                            <option value="glitch-art">Glitch Art</option>
                            <option value="minimalist">Minimalist</option>
                            <option value="abstract-art">Abstract Art</option>
                            <option value="surreal-art">Surreal Art</option>
                            <option value="fantasy-art">Fantasy Art</option>
                            <option value="cyberpunk">Cyberpunk</option>
                            <option value="steampunk">Steampunk</option>
                            <option value="realistic-photography">Realistic Photography</option>
                            <option value="cinematic-style">Cinematic Style</option>
                            <option value="black-white">Black & White</option>
                            <option value="hdr-photography">HDR Photography</option>
                            <option value="sci-fi-art">Sci-Fi Art</option>
                            <option value="mythological-art">Mythological Art</option>
                            <option value="dark-gothic-art">Dark & Gothic Art</option>
                            <option value="pop-art">Pop Art</option>
                        </select>
                    </label>
                    <button type="submit" className="btn btn-secondary join-item">Create</button>
                </div>
            </form>
        </div>
    );
};

export default Generate;
