export default function AuthContainer({
    children,
    containerWidth = "28rem",
}: {
    children: any;
    containerWidth?: string;
}) {
    return (
        <section className="w-full h-full bg-gray-50 p-full">
            <div className="flex flex-col items-center justify-center justify-between h-full min-h-screen mx-auto g:py-0">
                <div className="flex flex-col gap-0 my-10">
                    <div
                        className={`max-w-${containerWidth} min-w-${containerWidth} w-${containerWidth}  max-[639px]:max-w-[95%] max-[639px]:min-w-[95%] max-[639px]:w-[95%] bg-white mx-auto rounded-lg shadow my-4`}
                    >
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
