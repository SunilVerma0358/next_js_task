import Image from "next/image";
import NavBar from "./NavBar";

const MyComponets = () => {
  return (
    <div className="h-screen bg-blue-400 flex-col flex ">
      <div>
        <NavBar />
      </div>
      <div className="flex-grow-[1] flex justify-center items-center">
        <div className=" container">
          <h2 className="  text-white text-center">Hello World</h2>
          <p className=" text-center text-white">loram is a great phara</p>
          <Image
            src="/Image/CarImg.png"
            alt="Img"
            width={100}
            height={100}
            className="w-1/2 pt-10 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MyComponets;
