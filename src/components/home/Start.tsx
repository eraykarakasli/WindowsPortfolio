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
          ? " h-[700px] w-[600px] bg-black  bg-opacity-80 rounded-xl"
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
              className="bg-transparent w-full h-10 rounded-lg px-4 text-xs outline-none"
              type="text"
              placeholder="Uygulama, ayar ve belge arayın"
            />
          </div>
        </div>
        <div className="">
          <div className="p-4 px-8 flex justify-between">
            <span className="text-xs font-semibold">Sabitlendi</span>
            <span className="bg-white bg-opacity-20 rounded-lg p-1 cursor-pointer text-xs flex items-center">
              Tüm Uygulamalar <MdKeyboardArrowRight size={16} />
            </span>
          </div>
          <div className="pl-10 pt-6 grid grid-cols-6 ">
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <FaEdge size={39} />{" "}
                <span className="text-white text-xs ml-1">Edge</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10 px-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019–present%29.svg/2203px-Microsoft_Office_Word_%282019–present%29.svg.png" alt="" />
                <span className="text-white text-xs ml-1">Word</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10 px-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019–present%29.svg/826px-Microsoft_Office_Excel_%282019–present%29.svg.png" alt="" />
                <span className="text-white text-xs ml-2">Excel</span>
              </span>
            </div>
            <div className="mb-5 -ml-4 ">
              <span className=" text-blue-600 cursor-pointer ">
                <img className="w-10 h-10 mx-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019–present%29.svg/512px-Microsoft_Office_PowerPoint_%282019–present%29.svg.png?20210821050414" alt="" />
                <span className="text-white text-xs ml-1">Powepoint</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10 " src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172206i70472167E79B9D0F/image-size/large?v=v2&px=999" alt="" />
                <span className="text-white text-xs ml-1">Posta</span>
              </span>
            </div>
            <div className="mb-5 -ml-1"> 
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://apps.odoo.com/web/image/loempia.module/74335/icon_image?unique=f88cd60" alt="" />
                <span className="text-white text-xs ">Takvim</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/en/archive/0/08/20210910141027%21Microsoft_Store_app_icon.png" alt="" />
                <span className="text-white text-xs -ml-5">Microsoft Store</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://winaero.com/blog/wp-content/uploads/2019/10/Alarms-colorful-fluent-icon.png" alt="" />
                <span className="text-white text-xs ml-2">Saat</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" alt="" />
                <span className="text-white text-xs ml-[2px]">Ayarlar</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Windows_Calculator_icon.png" alt="" />
                <span className="text-white text-xs -ml-4">Hesap Makinesi</span>
              </span>
            </div>
            <div className="mb-5 ">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Microsoft_Paint.svg/1200px-Microsoft_Paint.svg.png" alt="" />
                <span className="text-white text-xs ml-2">Paint</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://www.elevenforum.com/data/attachments/33/33594-ec7a5679d054b86fee6f747a4791ac09.jpg" alt="" />
                <span className="text-white text-xs -ml-4">Dosya Gezgini</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-9 h-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" />
                <span className="text-white text-xs -ml-5">Google Chrome</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-8 mb-1" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt="" />
                <span className="text-white text-xs ">YouTube</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10 rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Xbox_app_logo.svg/640px-Xbox_app_logo.svg.png" alt="" />
                <span className="text-white text-xs ml-[6px]">Xbox</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />
                <span className="text-white text-xs ">LinkedIn</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Opera_GX_Icon.svg/2048px-Opera_GX_Icon.svg.png" alt="" />
                <span className="text-white text-xs ml-1">Opera</span>
              </span>
            </div>
            <div className="mb-5">
              <span className=" text-blue-600 cursor-pointer">
                <img className="w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU" alt="" />
                <span className="text-white text-xs ml-1">Github</span>
              </span>
            </div>
          </div>
          <div>
            <div className="p-4 px-8 flex justify-between">
              <span className="text-xs font-semibold">Önerilen</span>
              <span className="bg-white bg-opacity-20 cursor-pointer rounded-lg p-1 text-xs flex items-center px-2">
                Diğer <MdKeyboardArrowRight size={16} />
              </span>
            </div>
          </div>
          <div className="pl-9 grid grid-cols-2">
            <div className="pb-8">
              <span className="text-blue-600 flex cursor-pointer">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-xs pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex cursor-pointer ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-xs pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex cursor-pointer ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-xs pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex cursor-pointer ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-xs pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex cursor-pointer ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-xs pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
            <div className="pb-8">
              <span className="text-blue-600 flex cursor-pointer ">
                <SiAdobephotoshop size={28} />{" "}
                <span className="text-white text-xs pl-3">
                  Adobe Photoshop 2023
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-opacity-50 bottom-0 h-16 bg-black bg w-full rounded-b-xl">
        <div className="px-8 flex items-center justify-between h-full">
          <span className="flex items-center cursor-pointer">
            <MdAccountCircle size={34} /> <span className="text-xs pl-2">eray karakaşlı</span>
          </span>
          <span className="flex items-center cursor-pointer">
            <BsPower size={20} /> 
          </span>
        </div>
      </div>
    </div>
  );
};
