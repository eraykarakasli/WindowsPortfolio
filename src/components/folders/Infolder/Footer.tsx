import {TiDeviceDesktop} from 'react-icons/ti'
import {HiOutlineBars4} from 'react-icons/hi2'

function Footer() {
  return (
    <div className="h-full flex justify-between">
        <div className="text-xs ml-6 h-full flex items-center text-gray-200">
            0 öğe |
        </div>
        <div className='flex items-center mr-2 gap-1'>
            <HiOutlineBars4 />
            <TiDeviceDesktop  />
        </div>
    </div>
  )
}

export default Footer