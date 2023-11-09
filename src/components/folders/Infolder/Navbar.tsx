import {FiSquare} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setFolder, setRecycle } from '../../../redux/app/slices/operaSlice';
import { RootState } from '../../../redux/app/store';

interface InfolderProps {
  name: string;
  image: string;
}

const Navbar: React.FC<InfolderProps> = ({ name, image }) => {
  const folder = useSelector((state: RootState) => state.opera.value2);
  const recycle = useSelector((state: RootState) => state.opera.value3);
  const dispatch = useDispatch();
  const handleFolder = () => {
    if (folder) {
       dispatch(setFolder(!folder)); 
    }
   
    if (recycle) {
      dispatch(setRecycle(!recycle)); 
    }
    
  };
  console.log(name)
  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center">
        <span className="flex items-center justify-start relative  w-[240px]  bg-[#2c2c2c] ml-2 mt-2 p-2  rounded-t-lg">
          <img
            className="w-5 h-5 z-10"
            src={image}
            
          />
          
          <span className="text-xs cursor-default px-2 z-10">{name}</span>

          <span className="text-lg z-10 text-gray-300 rounded-md  -mr-1 px-2 absolute  right-2 hover:bg-[#383838] bg-[#2c2c2c]">
          <AiOutlineClose className="h-7" size={14} />
          </span>
        </span>
        <span className="text-xl z-10 cursor-default text-gray-300 mx-2 hover:bg-[#2d2d2d] rounded-md -mb-2 px-2 h-6 pb-1 flex items-center">
            +
            </span>
      </div>
      <div className='flex mb-2 z-10'>
        <span className='hover:bg-[#2d2d2d] hover:text-white text-gray-400 font-thin  px-4 pb-2 flex '>__</span>
        <span className='hover:bg-[#2d2d2d] hover:text-white text-gray-400 font-thin  px-4 pt-2 flex '><FiSquare size={14} /></span>
        <div onClick={handleFolder} className='hover:bg-red-600 hover:text-white font-thin text-gray-400  px-4 pt-2 flex  rounded-se-lg'><AiOutlineClose /></div>
      </div>
      
    </div>
  );
}

export default Navbar;
