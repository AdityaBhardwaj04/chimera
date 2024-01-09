/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import chimeraLogo from "../images/chimera_icon.svg";
import cursor from "../images/cursor1.png";
import CountdownTimer from "../components/countdown";
import Counter from "../components/counter";
import watermark from "../images/watermarkBackGround.svg";
// import hero from "../images/Desktop - 2.svg"

const targetDate = new Date("2024-01-21T00:00:00");
const HomePage = () => {
    return (
        <div className="relative pb-10">
            <div className="w-[100vw] py-5 bg-[#66D076]">
                <div className="bg-custom-svg bg-no-repeat bg-cover">
                    <div className="max-w-[1920px] min-h-[80vh] md:h-[90vh] p-3 xl:p-0 flex flex-col items-center justify-center mx-auto">
                        <div className="relative xl:p-0 w-full 2xl:w-[1422px] h-[480px] mx-auto bg-transparent md:mt-[40px]">
                            <div className="absolute flex md:flex-row flex-col justify-between gap-4 items-center top-0 bottom-0 w-full h-full">
                                <div className="md:self-start w-[230px] md:w-[40%] lg:w-[50%] h-full flex flex-col justify-center gap-8 md:gap-8 items-center">
                                    <div className="relative lg:w-[70%] mt-2 md:mt-0 ml-[0px] md:ml-[15px] zoom-in-out-box">
                                        <img
                                            src={chimeraLogo}
                                            alt=""
                                            className="self-start "
                                        />
                                    </div>
                                    <div className="">
                                        <h1 className="justify-center text-xl md:text-2xl lg:text-4xl text-logo-color leading-3 font-normal font-AllRounder text-[#2A404A] -mt-10">
                                            20-21 Jan, 2024
                                        </h1>
                                    </div>
                                    <Link to={"/commingsoon"}>
                                        <button className="bg-white shadow-custom backdrop-blur-custom cursor-pointer text-[20px] text-[#66D076] font-medium py-2 px-4 mt-[0px] md:mt-[40px] rounded-xl inline-flex items-center">
                                            <span className="font-Rubik">
                                                Register
                                            </span>
                                            <img
                                                src={cursor}
                                                alt=""
                                                className="w-[18px] h-[18px] text-white fill-current ml-2"
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div className="w-full md:w-[60%] lg:w-[50%] flex items-center text-justify justify-center h-full ">
                                    <div className="h-full lg:translate-y-[-30px] md:mr-8 group mb-1 md:mb-0 md:px-7 px-2 py-2 md:py-6 lg:py-9 xl:py-10 xl:px-12 rounded-[10px] md:rounded-[20px] flex items-center justify-center bg-gradient-custom shadow-custom backdrop-blur-custom border-solid border-[0.795px] border-[#7F7F7F] ">
                                        <div className="text-white font-semibold text-xs sm:text-sm xl:text-lg md:leading-[27px] tracking-wide md:tracking-widest font-Inter var">
                                            CHIMERA, aims to provide a platform for
                                            the congregation of the entire medical
                                            fraternity of eastern India along with
                                            other major Universities embracing the
                                            whole country under one roof. It is
                                            beyond the dimensions of just an event
                                            it is a stage where idea meets reality.
                                            The event theme "Dissecting Truth from
                                            Rumor" encompasses a profound
                                            exploration into the intricate landscape
                                            of information dissemination and its
                                            impact on society. In an era dominated
                                            by the swift flow of information across
                                            various media platforms, the veracity of
                                            facts often gets tangled within a web of
                                            rumors, misinformation, and
                                            disinformation.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100vw] bg-[#E2F7E6] h-auto">
                <CountdownTimer targetDate={targetDate} />
                <div
                    className="w-[100vw] py-5 bg-[#66D076]"
                    style={{
                        backgroundImage: `url(${watermark})`,
                        backgroundPosition: "right bottom",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="max-w-[1162px] p-3 xl:p-0 mx-auto">
                        <div className="text-white font-Poppins text-xl md:text-3xl lg:text-4xl font-semibold text-center mt-11 mb-11">
                            Prize Pool
                        </div>
                        <div className="flex md:flex-row flex-col-reverse justify-between gap-4 items-center w-full h-full ">
                            <div className="w-full md:w-[60%] 2xl:w-[60%] flex items-center justify-center h-full">
                                <div className="md:ml-8 mb-1  md:mb-0 md:px-7 px-2 py-2 md:py-6 lg:py-9 xl:py-10 xl:px-12 rounded-[10px] md:rounded-[20px] flex items-center justify-center bg-black/20 shadow-md backdrop-blur-sm border-solid border-[0.795px] border-[#7F7F7F]">
                                    <div className="text-white text-justify font-semibold text-sm sm:text-base xl:text-lg md:leading-[27px] tracking-wide md:tracking-widest font-inter">
                                        In an era dominated by the swift flow of
                                        information across various media
                                        platforms, the veracity of facts often
                                        gets tangled within a web of rumors,
                                        misinformation, and disinformation. This
                                        theme serves as a rallying call to
                                        scrutinize, analyze, and discern the
                                        authenticity of information circulating
                                        in our communities, media, and online
                                        spaces. It aims to foster critical
                                        thinking, media literacy, and
                                        fact-checking skills among individuals
                                        to distinguish between truth and
                                        falsehood. Through insightful
                                        discussions, workshops, and dialogues,
                                        this theme seeks to empower individuals
                                        to question, verify sources, and
                                        navigate the complex terrain of
                                        information, enabling them to make
                                        informed decisions while contributing to
                                        a more transparent and credible
                                        information ecosystem.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[30%] 2xl:w-[30%] flex flex-col items-center justify-center h-full">
                                <div className="flex flex-col items-center justify-center">
                                    <Counter />
                                    <div className="text-white font-Poppins text-xl md:text-3xl lg:text-4xl font-semibold">
                                        Prize Money
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
