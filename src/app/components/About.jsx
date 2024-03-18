// import Image from "next/image";
import { CarMap } from "./common/Helper";

const About = () => {
  return (
    <>
      <div className=" bg-gray-700 h-screen  flex justify-center items-center flex-col ">
        <h2 className="text-[43px] text-white ">Hello World</h2>
        {/* <div className="container px-3 mx-auto">
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="w-4/12 px-3 pt-5">
              <div className="bg-gray-400 rounded-xl border border-green-400 px-3 py-4">
                <Image
                  src="/Image/CarImg.png"
                  alt="Img"
                  width={100}
                  height={100}
                  className="w-1/2 pt-10  mx-auto pb-3"
                />
                <h3 className="text-white text-center ">Hello world </h3>
                <p className="text-sm text-center pt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni molestiae quisquam dolores ut aliquid cupiditate, error
                  quasi dolore rem optio? Dolor suscipit et doloribus vitae modi
                  velit dignissimos quo, cum voluptas! Dicta asperiores, rerum
                  ipsam adipisci officiis nostrum dolores magni expedita
                  laudantium iste molestiae cupiditate porro tenetur quisquam
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 pt-5">
              <div className="bg-gray-400 rounded-xl border border-green-400 px-3 py-4">
                <Image
                  src="/Image/CarImg.png"
                  alt="Img"
                  width={100}
                  height={100}
                  className="w-1/2 pt-10  mx-auto pb-3"
                />
                <h3 className="text-white text-center ">Hello world </h3>
                <p className="text-sm text-center pt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni molestiae quisquam dolores ut aliquid cupiditate, error
                  quasi dolore rem optio? Dolor suscipit et doloribus vitae modi
                  velit dignissimos quo, cum voluptas! Dicta asperiores, rerum
                  ipsam adipisci officiis nostrum dolores magni expedita
                  laudantium iste molestiae cupiditate porro tenetur quisquam
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 pt-5">
              <div className="bg-gray-400 rounded-xl border border-green-400 px-3 py-4">
                <Image
                  src="/Image/CarImg.png"
                  alt="Img"
                  width={100}
                  height={100}
                  className="w-1/2 pt-10  mx-auto pb-3"
                />
                <h3 className="text-white text-center ">Hello world </h3>
                <p className="text-sm text-center pt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni molestiae quisquam dolores ut aliquid cupiditate, error
                  quasi dolore rem optio? Dolor suscipit et doloribus vitae modi
                  velit dignissimos quo, cum voluptas! Dicta asperiores, rerum
                  ipsam adipisci officiis nostrum dolores magni expedita
                  laudantium iste molestiae cupiditate porro tenetur quisquam
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 pt-5">
              <div className="bg-gray-400 rounded-xl border border-green-400 px-3 py-4">
                <Image
                  src="/Image/CarImg.png"
                  alt="Img"
                  width={100}
                  height={100}
                  className="w-1/2 pt-10  mx-auto pb-3"
                />
                <h3 className="text-white text-center ">Hello world </h3>
                <p className="text-sm text-center pt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni molestiae quisquam dolores ut aliquid cupiditate, error
                  quasi dolore rem optio? Dolor suscipit et doloribus vitae modi
                  velit dignissimos quo, cum voluptas! Dicta asperiores, rerum
                  ipsam adipisci officiis nostrum dolores magni expedita
                  laudantium iste molestiae cupiditate porro tenetur quisquam
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 pt-5">
              <div className="bg-gray-400 rounded-xl border border-green-400 px-3 py-4">
                <Image
                  src="/Image/CarImg.png"
                  alt="Img"
                  width={100}
                  height={100}
                  className="w-1/2 pt-10  mx-auto pb-3"
                />
                <h3 className="text-white text-center ">Hello world </h3>
                <p className="text-sm text-center pt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni molestiae quisquam dolores ut aliquid cupiditate, error
                  quasi dolore rem optio? Dolor suscipit et doloribus vitae modi
                  velit dignissimos quo, cum voluptas! Dicta asperiores, rerum
                  ipsam adipisci officiis nostrum dolores magni expedita
                  laudantium iste molestiae cupiditate porro tenetur quisquam
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 pt-5">
              <div className="bg-gray-400 rounded-xl border border-green-400 px-3 py-4">
                <Image
                  src="/Image/CarImg.png"
                  alt="Img"
                  width={100}
                  height={100}
                  className="w-1/2 pt-10  mx-auto pb-3"
                />
                <h3 className="text-white text-center ">Hello world </h3>
                <p className="text-sm text-center pt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni molestiae quisquam dolores ut aliquid cupiditate, error
                  quasi dolore rem optio? Dolor suscipit et doloribus vitae modi
                  velit dignissimos quo, cum voluptas! Dicta asperiores, rerum
                  ipsam adipisci officiis nostrum dolores magni expedita
                  laudantium iste molestiae cupiditate porro tenetur quisquam
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container px-3 mx-auto  max-w-[1320px]">
          <div className="flex-row flex flex-wrap -mx-3">
            {CarMap.map((props, index) => (
              <div key={index} className="w-4/12 px-3 pt-4">
                <div className="bg-gray-400 rounded-xl border border-green-400 px-3 py-4">
                  <h3 className="text-black text-[35px] text-center">
                    {props.phara}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
