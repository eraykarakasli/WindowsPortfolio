import { AiOutlineClear,AiOutlineWhatsApp, AiOutlineClockCircle } from "react-icons/ai";

const Aside = () => {
  return (
    <div className="w-10  h-full bg-[#0a0a0a]  ">
        <div className="w-full pt-16">
            <span className="w-full flex justify-center">
                <AiOutlineClear className="text-gray-400" size={20} />
            </span>
            <span className="w-full flex text-gray-400 justify-center mt-2">__</span>
            <span className="w-full flex justify-center mt-6">
                <span className="bg-green-600 h-5 w-5 rounded-full mt-[0.5px] absolute"></span>
                <AiOutlineWhatsApp className="text-thite z-10" size={22} />
            </span>
            <span className="w-full flex text-gray-400 justify-center mt-2">__</span>
            <span className="grid grid-cols-2 mt-6 text-gray-400 justify-center">
                <span className="h-[6px] ml-[10px] w-2 border border-gray-400"></span>
                <span className="h-[6px]  w-2 border border-gray-400"></span>
                <span className="h-[6px] ml-[10px] mt-[0.5px] w-2 border border-gray-400"></span>
                <span className="h-[6px] w-2 mt-[0.5px] border border-gray-400"></span>
            </span>
            <span className="w-full flex justify-center text-gray-400 mt-6">
                <AiOutlineClockCircle size={20} />
            </span>
        </div>
    </div>
  )
}

export default Aside