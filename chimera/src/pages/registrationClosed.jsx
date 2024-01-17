import registrationClosedImg from "../images/RegistrationClosed.svg"
const RegistrationClosed = () => {
  return (
      <div className="w-[100vw] bg-black flex items-center justify-center">
          <div className="w-[500px] ">
              <img src={registrationClosedImg} alt="" className="" />
          </div>
      </div>
  );
}

export default RegistrationClosed