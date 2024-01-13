import { useState } from "react";
import flashMob from "../images/Flashmob.png";

export default function Modal() {
    const [showModal, setShowModal] = useState(true);

    return (
        <>

            {showModal ? (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 ">
                    <div className="bg-gradient-back rounded shadow-lg lg:w-[35vw]">
                        <div className="px-4 py-2 flex justify-between items-center">
                            <button
                                className="text-black close-modal"
                                onClick={() => setShowModal(false)}
                            >
                                X
                            </button>
                        </div>
                        <div className="p-4">
                            <img src={flashMob} alt="Flash Mob" className="w-[100vw] h-auto"/>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
