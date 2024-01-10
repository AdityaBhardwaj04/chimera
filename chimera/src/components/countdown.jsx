import { useEffect, useState } from "react"

const CountdownTimer = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const targetTime = new Date(targetDate).getTime();
        const timeDiff = targetTime - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds};
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-auto">
            <div className="text-center max-w-[1162px] pt-[5%] pb-[5%]">
                <div className="text-center max-w-[1162px]">
                    <div className="text-2xl md:text-4xl font-semibold text-black font-raleway pb-6 pt-6">
                        COUNTDOWN
                    </div>
                    <div className="flex flex-row pt-6 pb-6 lg:w-[650px] justify-center">
                        <div className="text-xl bg-gradient-custom w-full md:w-1/4 lg:w-1/4 mx-3 py-5 rounded-lg">
                            <div className="font-inter text-2xl md:text-8xl bg-gradient bg-clip-text text-white">
                                {timeRemaining.days}
                            </div>
                            <div className="font-semibold text-lg md:text-3xl bg-gradient bg-clip-text text-white px-1">
                                Days
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded-full h-[10px] w-[10px] md:h-[15px] md:w-[15px] bg-gradient-custom mx-auto my-auto"></div>
                            <div className="rounded-full h-[10px] w-[10px] md:h-[15px] md:w-[15px] bg-gradient-custom mx-auto my-auto"></div>
                        </div>
                        <div className="text-xl bg-gradient-custom w-full md:w-1/4 lg:w-1/4 mx-3 py-5 rounded-lg">
                            <div className="font-inter text-2xl md:text-8xl bg-gradient bg-clip-text text-white">
                                {timeRemaining.hours}
                            </div>
                            <div className="font-semibold text-lg md:text-3xl bg-gradient bg-clip-text text-white px-1">
                                Hours
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded-full h-[10px] w-[10px] md:h-[15px] md:w-[15px] bg-gradient-custom mx-auto my-auto"></div>
                            <div className="rounded-full h-[10px] w-[10px] md:h-[15px] md:w-[15px] bg-gradient-custom mx-auto my-auto"></div>
                        </div>
                        <div className="text-xl bg-gradient-custom w-full md:w-1/4 lg:w-1/4 mx-3 py-5 rounded-lg">
                            <div className="font-inter text-2xl md:text-8xl bg-gradient bg-clip-text text-white">
                                {timeRemaining.minutes}
                            </div>
                            <div className="font-semibold text-lg md:text-3xl bg-gradient bg-clip-text text-white px-1">
                                Minutes
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded-full h-[10px] w-[10px] md:h-[15px] md:w-[15px] bg-gradient-custom mx-auto my-auto"></div>
                            <div className="rounded-full h-[10px] w-[10px] md:h-[15px] md:w-[15px] bg-gradient-custom mx-auto my-auto"></div>
                        </div>
                        <div className="text-xl bg-gradient-custom w-full md:w-1/4 lg:w-1/4 mx-3 py-5 rounded-lg">
                            <div className="font-inter text-2xl md:text-8xl bg-gradient bg-clip-text text-white">
                                {timeRemaining.seconds}
                            </div>
                            <div className="font-semibold text-lg md:text-3xl bg-gradient bg-clip-text text-white ">
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;