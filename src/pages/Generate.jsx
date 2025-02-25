//282ad4d30321c7345f706167687f2bb7214baec0eaf28d0ca6a9efe336e5cfad85a395751796d859459e02b7221142da
const Generate = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const prompt = e.target.prompt.value;
        const form = new FormData()
        form.append("prompt", prompt)
        
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
        <div>
            <h2>Generate Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="join">
                    <div className="">
                        <label className="input join-item ">
                            <input name="prompt" type="text" placeholder="Enter your prompt" className="w-72" required />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-neutral join-item">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Generate;