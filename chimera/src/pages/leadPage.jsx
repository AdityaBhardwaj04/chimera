import { Link } from "react-router-dom";
import { leadData } from "../leadData";
import insta from "../images/Insta.svg";
import linkedin from "../images/linkedin.svg";
//import bg from "./images/Background_Image.png";

const Lead = () => {
    return (
        <section className="text-white font-Mulish bg-gradient-back">
            <div className="w-full max-w-[1920px]">
                <h2 className="font-bold text-center text-3xl pt-9 pb-12">
                    EVENT HEADS
                </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {leadData.slice(0, 2).map((item) => (
                    <div
                        key={item.name}
                        className="w-full md:w-1/3 p-4 flex flex-col items-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
                            loading="lazy"
                        />
                        <h3 className="mt-4 font-bold">{item.name}</h3>
                        <h4 className="mt-0 font-bold">{item.position}</h4>
                        <ul className="mt-2 flex">
                            <li className="pr-8">
                                <Link
                                    to={item.igLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={insta}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={item.linkedInLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* <img
                                        src={linkedin}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    /> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="w-full">
                <h2 className="font-bold text-center text-3xl pt-5 pb-12">
                    EVENT CO-HEADS
                </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {leadData.slice(2, 5).map((item) => (
                    <div
                        key={item.name}
                        className="w-full md:w-1/4 p-4 flex flex-col items-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
                            loading="lazy"
                        />
                        <h3 className="mt-4 font-bold">{item.name}</h3>
                        <h4 className="mt-0 font-bold">{item.position}</h4>
                        <ul className="mt-2 flex">
                            <li className="pr-8">
                                <Link
                                    to={item.igLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={insta}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={item.linkedInLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* <img
                                        src={linkedin}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    /> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="w-full">
                <h2 className="font-bold text-center text-3xl pt-5 pb-12">
                    DEPARTMENT HEADS
                </h2>
            </div>
            <div className="flex flex-col items-center">
                <img
                    src={leadData[5].image}
                    alt={leadData[5].name}
                    className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
                    loading="lazy"
                />
                <h3 className="mt-4 font-bold">{leadData[5].name}</h3>
                <h4 className="mt-0 font-bold">{leadData[5].position}</h4>
                <ul className="mt-2 flex">
                    <li className="pr-8">
                        <Link
                            to={leadData[5].igLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={insta}
                                alt="logo"
                                className="rounded-full w-6 h-6 object-cover"
                                loading="lazy"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={leadData[5].linkedInLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={linkedin}
                                alt="logo"
                                className="rounded-full w-6 h-6 object-cover"
                                loading="lazy"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {leadData.slice(6, 9).map((item) => (
                    <div
                        key={item.name}
                        className="w-full md:w-1/4 p-4 flex flex-col items-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
                            loading="lazy"
                        />
                        <h3 className="mt-4 font-bold">{item.name}</h3>
                        <h4 className="mt-0 font-bold">{item.position}</h4>
                        <ul className="mt-2 flex">
                            <li className="pr-8">
                                <Link
                                    to={item.igLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={insta}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={item.linkedInLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* <img
                                        src={linkedin}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    /> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {leadData.slice(9, 12).map((item) => (
                    <div
                        key={item.name}
                        className="w-full md:w-1/4 p-4 flex flex-col items-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
                            loading="lazy"
                        />
                        <h3 className="mt-4 font-bold">{item.name}</h3>
                        <h4 className="mt-0 font-bold">{item.position}</h4>
                        <ul className="mt-2 flex">
                            <li className="pr-8">
                                <Link
                                    to={item.igLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={insta}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={item.linkedInLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* <img
                                        src={linkedin}
                                        alt="logo"
                                        className="rounded-full w-6 h-6 object-cover"
                                        loading="lazy"
                                    /> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Lead;
