import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { FaEdge } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdAccountCircle } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { BsPower } from "react-icons/bs";

export const Start = () => {
  const isLoading = useSelector((state: RootState) => state.start.isLoading);

  console.log(isLoading, "startButton");

  return (
    <div
      className={`${
        isLoading
          ? " h-[670px] w-[500px] bg-black  bg-opacity-80 rounded-xl"
          : "hidden"
      }`}
    >
      <div className=" relative">
        <div className="p-4 flex items-center">
          <div className=" bg-[#1C222E] w-full flex items-center rounded-2xl">
            <span className="pl-4">
              <AiOutlineSearch size={20} />
            </span>
            <input
              className="bg-transparent w-full h-10 rounded-lg px-4 text-sm outline-none"
              type="text"
              placeholder="Uygulama, ayar ve belge arayın"
            />
          </div>
        </div>
        <div className="">
          <div className="p-4 px-8 flex justify-between">
            <span className="text-sm font-semibold">Sabitlendi</span>
            <span className="bg-white bg-opacity-20 rounded-lg p-1 text-sm flex items-center">
              Tüm Uygulamalar <MdKeyboardArrowRight size={16} />
            </span>
          </div>
          <div className="pl-10 pt-6 grid grid-cols-6">
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600">
                <FaEdge size={28} />{" "}
                <span className="text-white text-sm ">Edge</span>
              </span>
            </div>
          </div>
          <div>
            <div className="p-4 px-8 flex justify-between">
              <span className="text-sm font-semibold">Önerilan</span>
              <span className="bg-white bg-opacity-20 rounded-lg p-1 text-sm flex items-center px-2">
                Diğer <MdKeyboardArrowRight size={16} />
              </span>
            </div>
          </div>
          <div className="pl-9 grid grid-cols-2">
            <div className="pb-8">
              <span className="text-blue-600 flex ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-sm pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-sm pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-sm pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-sm pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-sm pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-sm pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-opacity-50 bottom-0 h-16 bg-black bg w-full rounded-b-xl">
        <div className="px-8 flex items-center justify-between h-full">
          <span className="flex items-center">
            <MdAccountCircle size={34} /> <span className="text-sm pl-2">eray karakaşlı</span>
          </span>
          <span className="flex items-center">
            <BsPower size={20} /> 
          </span>
        </div>
      </div>
    </div>
  );
};
