import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsScissors, BsTrash, BsArrowUp, BsArrowDown ,BsThreeDots} from "react-icons/bs";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { CgRename } from "react-icons/cg";
import { TiExportOutline } from "react-icons/ti";
import { HiOutlineBars4 } from "react-icons/hi2";
function Controlbar() {
  return (
    <div className=" h-full flex justify-between">
      <div className="m-1 p-[10px] gap-3  flex items-center">
        <div className="flex gap-2 hover:bg-[#272727] z-20 cursor-default relative rounded p-2 mb-1">
          <span className="h-[16px] w-[16px] flex items-center justify-center text-[#43bdff] rounded-full border border-gray-300">
            <AiOutlinePlus size={12} />
          </span>
          <span className="flex gap-1 text-xs items-center">
            Yeni <MdKeyboardArrowDown size={14} />
          </span>
        </div>
        <div className="border h-6 border-gray-800"></div>
        <div className="text-gray-600 flex items-center gap-5">
          <span className="mx-2">
            <BsScissors size={16} />
          </span>
          <span className="mx-2">
            <RiCheckboxMultipleBlankLine size={16} />
          </span>
          <span className="mx-2">
            <CgRename size={20} />
          </span>
          <span className="">
            <TiExportOutline size={20} />
          </span>
          <span>
            <BsTrash />
          </span>
        </div>
        <div className="border h-6 border-gray-800"></div>
        <div className="flex">
          <div className="flex gap-2 hover:bg-[#272727] relative z-40 rounded cursor-default h-8 px-1">
            <span className="flex w-5 relative h-6 p-1">
              <BsArrowUp className="absolute left-0 mt-1" size={12} />
              <BsArrowDown
                className="text-blue-400 absolute right-0 mt-1"
                size={12}
              />
            </span>
            <span className="flex items-center gap-1 text-xs">
                Sırala <MdKeyboardArrowDown size={14} />
            </span>
            
          </div>
          <div className="flex">
            <span className="flex items-center gap-2 text-xs ml-5 hover:bg-[#272727] relative z-40 cursor-default rounded px-1">
                <HiOutlineBars4 size={18} /> Görüntüle <MdKeyboardArrowDown size={14} />
            </span>
            <div className="border h- border-gray-800 ml-2"></div>
            <span className="flex items-center mx-2 hover:bg-[#272727] relative z-40 cursor-default rounded px-2">
                <BsThreeDots size={20} />
            </span>
          </div>
          
        </div>
        
      </div>
      <div className="gap-2 flex items-center mx-8 text-xs hover:bg-[#272727] relative z-40 cursor-default rounded my-2 px-2">
         <CgRename className="text-blue-400" size={18} />   Ayrıntılar
    </div>
    </div>
  );
}

export default Controlbar;
