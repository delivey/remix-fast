export default function RememberMe() {
    return (
        <div className="inline-flex items-center max-[600px]:items-left">
            <label
                className="relative flex items-center gap-2 pr-3 cursor-pointer ounded-full p"
                htmlFor="checkbox"
            >
                <input
                    defaultChecked
                    name="remember"
                    type="checkbox"
                    id="remember"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-duuce-red transition-all checked:border-duuce-red checked:bg-duuce-red"
                />
                <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-[0.65rem] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </label>

            <p className="text-gray-500 text-normal">Remember me</p>
        </div>
    );
}
