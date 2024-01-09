import { event } from "../Data";
import cursor from "../images/cursor1.png";
import { Link } from "react-router-dom";
// import bg from "../images/Background_Image.png";

const Events = (props) => {
    let leads = props.leads;
    let foundUser = null;

    for (let key in event) {
        if (event[key].id === leads) {
            foundUser = event[key];
            break;
        }
    }

    return (
        <div className="w-[100vw] overflow-x-hidden bg-gradient-back">
            <div className="max-w-[1920px] p-3 xl:p-0 flex flex-col mx-auto ">
                <div className="p-3 xl:p-0 w-full xl:w-[1162px] mx-auto md:mt-[40px]">
                    <div className="w-full object-cover h-full">
                        {/* <img src={} alt="" /> */}
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-8 items-center mt-8">
                        <div className="max-width-[505px] max-h-[505px] rounded-xl sm:rounded-3xl bg-black border-solid border-[0.92px] border-[#7F7F7F]">
                            <img
                                src={foundUser.url}
                                alt=""
                                className="rounded-xl sm:rounded-3xl max-width-[500px] w-full max-h-[500px] h-full"
                            />
                        </div>
                        <div className="flex flex-col  justify-center items-center py-5 px-5 sm:py-10 sm:px-10 max-width-[500px] sm:h-[500px] sm:w-[500px] w-full rounded-xl sm:rounded-3xl  border-solid border-[0.92px] border-[#7F7F7F] blurbox">
                            <div className="text-white font-Mulish text-2xl font-bold md:leading-[37px] tracking-wide md:tracking-widest self-start">
                                {foundUser.name}
                            </div>
                            <div className="text-white font-Mulish text-lg sm:text-xl italic font-extrabold md:leading-[23px] tracking-normal md:tracking-widest mt-[5px] overflow-x-scroll whitespace-pre-wrap">
                                {foundUser.message1}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-5 md:pt-0">
                        <Link to={"/commingsoon"}>
                            <button className="bg-[#3CA465] cursor-pointer text-[20px] text-white font-medium py-2 px-4 mt-[0px] md:mt-[40px] rounded-xl inline-flex items-center">
                                <span className="-translate-y-[2px] font-Rubik">
                                    Register
                                </span>
                                <img
                                    src={cursor}
                                    alt=""
                                    className="w-[18px] h-[18px] -translate-y-[2px] text-white fill-current ml-2"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 -z-20 left-0 w-[100vw] h-[100vh]">
                {/* <img
                    src={bg}
                    alt="bg"
                    className="fixed top-0 object-cover -z-20 right-0 w-[100vw] h-[100vh]"
                /> */}
            </div>
        </div>
    );
};

export default Events;
