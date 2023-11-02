import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {FaArrowRotateRight ,FaLock} from 'react-icons/fa6'
import {BsPinAngle} from 'react-icons/bs'
import {AiOutlineCamera, AiOutlineHeart, AiOutlineDownload, AiOutlineUser} from 'react-icons/ai'
import {BiSolidCheckShield, BiCube} from 'react-icons/bi'
import {LuNavigation2} from 'react-icons/lu'
import {GiSettingsKnobs} from 'react-icons/gi'

function Url() {
  return (
    <div className="bg-[#141414] w-full flex justify-between items-center h-10">
        <span className='flex h-full items-center gap-4 pl-3'>
            <span className='text-gray-500'><IoIosArrowBack size={18} /> </span>
            <span className='text-gray-500'><IoIosArrowForward size={18} /> </span>
            <span className='text-gray-400'><FaArrowRotateRight size={15} /> </span>
            <span className='text-gray-700'>| </span>
            <span className='text-gray-400'><FaLock size={15} /> </span>
            <span className='text-gray-300 text-sm'>127.0.0.15173 </span>
        </span>
        <span className='flex items-center gap-4 pr-3  h-full'>
           <span className='flex h-full items-center gap-2'>
           <span className='text-gray-400 '><BsPinAngle size={16} /> </span>
            <span className='text-gray-400 '><AiOutlineCamera size={18} /> </span>
            <span className='text-gray-400 '><BiSolidCheckShield size={18} /> </span>
            <span className='text-gray-400 rotate-90'><LuNavigation2 size={17} /> </span>
            <span className='text-gray-400 '><AiOutlineHeart size={18} /> </span>
           </span>
            <span className='text-gray-700 '>| </span>
            <span className='text-gray-100 '><BiCube size={16} /> </span>
            <span className='text-gray-100 '><AiOutlineDownload size={16} /> </span>
            <span className='text-gray-100 rotate-90'><GiSettingsKnobs size={16} /> </span>
            <span className='text-gray-100 '><AiOutlineUser size={16} /> </span>
        </span>
    </div>
  )
}

export default Url