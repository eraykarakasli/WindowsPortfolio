import Folder from "../components/folders/Folder";
import Infolder from "../components/folders/Infolder";
import Recycle from "../components/folders/Recycle";
import Opera from "../components/home/Opera";
import { Start } from "../components/home/Start";

const Home = () => {
  return (
    <div className=" h-full ">
      <div className="w-full relative h-full flex justify-center ">
        <div className="absolute w-full h-full ">
          <Infolder />
        </div>
        <div className="m-4 absolute z-0 left-0">
          <Recycle  />
          <Folder name={"Portfolio"} />
        </div>
        <div className=" absolute  bottom-16 ">
          <Start />
        </div>
        <div className="mb-14 w-full z-10">
          <Opera />
        </div>
      </div>
    </div>
  );
};

export default Home;
