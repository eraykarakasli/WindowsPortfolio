import { SiOperagx } from "react-icons/si";
import { LiaGamepadSolid } from "react-icons/lia";
import { AiFillYoutube, AiFillGithub, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setOpera } from "../../redux/app/slices/operaSlice";
import { RootState } from "../../redux/app/store";

function Navbar() {
  const opera = useSelector((state: RootState) => state.opera.value);
  const dispatch = useDispatch();
  const handleOpera = () => {
    dispatch(setOpera(!opera)); 
  };
  return (
    <div className="bg-[#0a0a0a] flex justify-between  h-[38px] pl-3  ">
        <div className="flex">
          <span className="h-full flex items-center text-gray-400">
            <SiOperagx size={20} />
          </span>
          <span className="h-full flex items-center text-gray-400 pl-6">
            <LiaGamepadSolid size={17} />
          </span>
          {/* youtube */}
          <span className="h-full flex justify-between w-48 items-center rounded-ss-xl  ml-4 pl-2 hover:bg-white hover:bg-opacity-10">
            <span className="flex ">
              <span className=" relative ">
                <span className="bg-white top-2 left-2 h-2 w-2 absolute z-0"></span>
                <AiFillYoutube className="absolute text-red-700" size={20} />
              </span>
              <span className="text-gray-300 text-xs pl-6">YouTube</span>
            </span>
            <span className="text-gray-300">
              <IoClose />
            </span>
          </span>
          {/* github */}
          <span className="h-full flex justify-between w-48 items-center  pl-2 rounded-ss-xl bg-[#141414] hover:bg-white hover:bg-opacity-10">
            <span className="flex ">
              <span className="  ">
                <AiFillGithub className="" size={20} />
              </span>
              <span className="text-gray-300 text-xs pl-1">
                eraykarakasli(Eray Karak
              </span>
            </span>
            <span className="text-gray-300">
              <IoClose />
            </span>
          </span>
          {/* redux toolkit */}
          <span className="h-full flex justify-between w-48 items-center rounded-ss-xl pl-2 hover:bg-white hover:bg-opacity-10">
            <span className="flex ">
              <span className=" relative ">
                <span className="bg-white top-2 left-2 h-2 w-2 absolute z-0"></span>
                <AiFillYoutube className="absolute text-red-700" size={20} />
              </span>
              <span className="text-gray-300 text-xs pl-6">Redux Toolkit</span>
            </span>
            <span className="text-gray-300">
              <IoClose />
            </span>
          </span>
          <span className="px-2  h-full flex items-center ">
            <span className="hover:bg-white hover:bg-opacity-10 mb-1 p-1 rounded-sm">
              <AiOutlinePlus />
            </span>
          </span>
        </div>

        <div className="flex  items-center pl-2 ">
            <span className="ml-1 hover:bg-white hover:bg-opacity-10 h-full flex items-center px-3">
                <AiOutlineSearch size={19} />
            </span>
            <span className="ml-2">
               __
            </span>
            <span className="ml-2 hover:bg-white hover:bg-opacity-10 h-full flex items-center px-3">
                <RiCheckboxMultipleBlankLine />
            </span>
            <span onClick={handleOpera} className="hover:bg-red-700 h-full flex items-center px-3">
                <IoClose size={20} />
            </span>
        </div>

      </div>
  )
}

export default Navbar