import Opera from "../components/home/Opera";
import { Start } from "../components/home/Start";



const Home = () => {
  
  return (
    <div className=" h-full ">
      <div className="w-full relative h-full flex justify-center">
        <div className=" absolute  bottom-16 ">
          <Start />
        </div>
        <div className="mb-14 w-full">
          <Opera />
        </div>
      </div>
    </div>
  );
};

export default Home;
