import {
  BsChevronDown,
  BsChevronRight,
  BsFolderFill,
  BsPinAngleFill,
} from "react-icons/bs";
import { LiaDownloadSolid } from "react-icons/lia";

function Aside() {
  return (
    <div className="h-full  overflow-scroll ">
      <div className="grid-cols-1 mt-3 pl-11 ">
        <div className="flex pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <img
            className="w-[18px] h-[18px]"
            src="https://www.elevenforum.com/data/attachments/30/30188-c9f25938bd40f9c2e3af267cc96b3e28.jpg"
            alt="Giriş"
          />
          <span>Giriş</span>
        </div>
        <div className="flex pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <img
            className="w-[18px] h-[18px]"
            src="https://blogs.windows.com/wp-content/uploads/prod/sites/44/2022/09/photos-newicon.png"
            alt="Galeri"
          />
          <span>Galeri</span>
        </div>
        <div className="flex -ml-7 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <BsChevronDown />
          <img
            className="w-[18px] h-[18px] ml-3"
            src="https://www.elevenforum.com/data/attachments/58/58869-0ba91668be106f2ad532225f5798fe77.jpg"
            alt="OneDrive"
          />
          <span>OneDrive</span>
        </div>
        <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <BsChevronRight className="text-gray-400" />
          <img
            className="w-[18px] h-[18px] ml-1"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6d0f51-0cb3-4260-beb2-04239bc8845d/deqmc8i-cbf51e1e-6fd9-4364-b1e1-a0493ae7e4b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhNmQwZjUxLTBjYjMtNDI2MC1iZWIyLTA0MjM5YmM4ODQ1ZFwvZGVxbWM4aS1jYmY1MWUxZS02ZmQ5LTQzNjQtYjFlMS1hMDQ5M2FlN2U0YjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aRem0tGPF3xbXMhUB3XT8IIFPNffYX9IaI8KjpSFBns"
            alt="OneDrive"
          />
          <span>Belgeler</span>
        </div>

        <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <BsChevronRight className="text-gray-400" />
          <BsFolderFill className="text-yellow-400 w-[15px] h-[15px] ml-[6px]" />
          <span>Ekler</span>
        </div>
        <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <BsChevronRight className="text-gray-400" />
          <img
            className="w-[18px] h-[18px] ml-1"
            src="https://winaero.com/blog/wp-content/uploads/2018/06/Desktop-icon-big-256.png"
            alt="OneDrive"
          />
          <span>Masaüstü</span>
        </div>
      </div>
      <div className="border-b border-gray-700 mx-auto mt-6 w-[80%]"></div>
      <div className="pl-10 pt-6">
        <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <img
            className="w-[19px] h-[19px] ml-1"
            src="https://winaero.com/blog/wp-content/uploads/2018/06/Desktop-icon-big-256.png"
            alt="OneDrive"
          />
          <span>Masaüstü</span>
          <BsPinAngleFill className="ml-3 text-gray-400" />
        </div>
        <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <LiaDownloadSolid size={20} className="text-green-500 ml-[4px]" />
          <span>İndirilenler</span>
          <BsPinAngleFill className="ml-1 text-gray-400" />
        </div>
        <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <img
            className="w-[18px] h-[18px] ml-1"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6d0f51-0cb3-4260-beb2-04239bc8845d/deqmc8i-cbf51e1e-6fd9-4364-b1e1-a0493ae7e4b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhNmQwZjUxLTBjYjMtNDI2MC1iZWIyLTA0MjM5YmM4ODQ1ZFwvZGVxbWM4aS1jYmY1MWUxZS02ZmQ5LTQzNjQtYjFlMS1hMDQ5M2FlN2U0YjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aRem0tGPF3xbXMhUB3XT8IIFPNffYX9IaI8KjpSFBns"
            alt="OneDrive"
          />
          <span>Belgeler</span>
          <BsPinAngleFill className="ml-5 text-gray-400" />
        </div>
        <div className="flex pb-4 -ml-4 text-xs items-center gap-2">
          <img
            className="w-[16px] h-[16px]"
            src="https://blogs.windows.com/wp-content/uploads/prod/sites/44/2022/09/photos-newicon.png"
            alt="Galeri"
          />
          <span>Resimler</span>
          <BsPinAngleFill className="ml-3 text-gray-400" />
        </div>
        <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
          <img
            className="w-[18px] h-[18px] ml-1"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6d0f51-0cb3-4260-beb2-04239bc8845d/deqmc67-d704e552-1f59-41b6-ae37-14ee614d02a9.png/v1/fill/w_256,h_256/windows_11_library_videos_icon_by_silentscreamvlogs_deqmc67-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvMmE2ZDBmNTEtMGNiMy00MjYwLWJlYjItMDQyMzliYzg4NDVkXC9kZXFtYzY3LWQ3MDRlNTUyLTFmNTktNDFiNi1hZTM3LTE0ZWU2MTRkMDJhOS5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-txhX6uPiSJQw8r8m93xzQX1YVHSbfetUBscpI1ac4o"
            alt="OneDrive"
          />
          <span>Videolar</span>
          <BsPinAngleFill className="ml-5 text-gray-400" />
        </div>
      </div>
      <div className="border-b border-gray-700 mx-auto mt-6 w-[80%]"></div>
        <div className="ml-10 mt-6">
          <div className="flex -ml-7 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
            <BsChevronDown />
            <img
              className="w-[18px] h-[18px] ml-3"
              src="https://winaero.com/blog/wp-content/uploads/2021/07/this-pc-computer-display-windows-11-icon.png"
              alt="OneDrive"
            />
            <span>Bu bilgisayar</span>
          </div>
          <div className="flex -ml-5 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
            <BsChevronRight className="text-gray-400" />
            <img
              className="w-[18px] h-[18px] ml-1"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6d0f51-0cb3-4260-beb2-04239bc8845d/deqmc8i-cbf51e1e-6fd9-4364-b1e1-a0493ae7e4b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhNmQwZjUxLTBjYjMtNDI2MC1iZWIyLTA0MjM5YmM4ODQ1ZFwvZGVxbWM4aS1jYmY1MWUxZS02ZmQ5LTQzNjQtYjFlMS1hMDQ5M2FlN2U0YjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aRem0tGPF3xbXMhUB3XT8IIFPNffYX9IaI8KjpSFBns"
              alt="OneDrive"
            />
            <span>Windows (C:)</span>
          </div>
          <div className="flex -ml-7 pb-4 justify-start text-xs items-center gap-1 cursor-pointer">
            <BsChevronRight />
            <img
              className="w-[18px] h-[18px] ml-3"
              src="https://winaero.com/blog/wp-content/uploads/2021/07/this-pc-computer-display-windows-11-icon.png"
              alt="OneDrive"
            />
            <span>Ağ</span>
          </div>
          
        </div>
    </div>
  );
}

export default Aside;
