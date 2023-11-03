import { BsFolderFill } from "react-icons/bs";

interface FolderProps {
  name: string;
}

const Folder: React.FC<FolderProps> = ({ name }) => {
  return (
    <div className="cursor-pointer py-2">
      <div className="w-full flex justify-center">
        <BsFolderFill className="text-yellow-400" size={25} />
      </div>
      <div className="text-xs font-light flex justify-center pt-1">{name}</div>
    </div>
  );
}

export default Folder;
