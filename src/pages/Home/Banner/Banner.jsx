

const Banner = () => {
    return (
        <div className="relative mx-auto w-2/3">
            <img className="w-full mx-auto" src="./hero-image.png" alt="Hero" />
            <button className="absolute bottom-36 ml-24 px-12 text-white py-1 rounded-md bg-blue-500">
                Refer Now
            </button>
        </div>
    );
};

export default Banner;