const WatermarkDiv = () => {
    const watermarkImage = "path/to/your/watermark/image.png"; // replace with your image path

    return (
        <div className="relative h-[200px] w-[200px] bg-blue-200">
            <div
                className="absolute bottom-0 left-0 h-full w-full"
                style={{
                    backgroundImage: `url(${watermarkImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left bottom",
                    opacity: 0.5,
                }}
            ></div>
            {/* Your div content goes here */}
        </div>
    );
};

export default WatermarkDiv;
