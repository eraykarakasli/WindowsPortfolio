import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
interface InfolderProps {
  name: string;
  
}

const Header: React.FC<InfolderProps>=({name})=> {
  return (
    <div className="h-full px-2  flex">
      <div className="flex gap-4  h-full items-center">
        <span className="text-gray-400 p-2 rounded-md ">
          <AiOutlineArrowLeft />
        </span>
        <span className="text-gray-400 p-2 rounded-md ">
          <AiOutlineArrowRight />
        </span>
        <span className="text-gray-100 p-2 hover:bg-[#383838] rounded-md z-10">
          <AiOutlineArrowUp />
        </span>
        <span className="text-gray-100 p-2 hover:bg-[#383838] rounded-md z-10">
          <BsArrowClockwise />
        </span>
      </div>
      <div className="flex justify-between w-full">
        <div className="ml-4  rounded-lg bg-[#383838] flex items-center gap-2 px-2 m-1 w-full">
          <span className="ml-1">
            <SlScreenDesktop size={16} />
          </span>
          <span className=" hover:bg-[#444444] z-10  p-2 rounded-md">
            <IoIosArrowForward size={12} />
          </span>
          <span className="hover:bg-[#444444] z-10  p-2 rounded-md text-sm -ml-2">
            {name}
          </span>
        </div>
        <div className=" flex justify-between items-center rounded bg-[#3d3d3d] m-1 p-2 min-w-[200px]">
          <span className="text-sm text-gray-300">
            <input
              className="outline-none relative bg-transparent placeholder:text-gray-300 z-10 "
              type="text"
              placeholder={`${name} klasöründe ara`}
            />
          </span>
          <span className="">
            <AiOutlineSearch size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
