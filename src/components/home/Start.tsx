import { AiOutlineSearch } from "react-icons/ai";

export const Start = () => {
  return (
    <div className="h-[600px] w-[500px] bg-black  bg-opacity-80 rounded-xl">
      <div>
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
      </div>
    </div>
  );
};
