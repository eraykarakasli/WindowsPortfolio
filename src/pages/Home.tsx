import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Folder from "../components/folders/Folder";
import Infolder from "../components/folders/Infolder";
import Recycle from "../components/folders/Recycle";
import Opera from "../components/home/Opera";
import { Start } from "../components/home/Start";
import { RootState } from "../redux/app/store";
import { setFolder, setRecycle } from "../redux/app/slices/operaSlice";

const Home = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [clickCount2, setClickCount2] = useState<number>(0);
  const folder = useSelector((state: RootState) => state.opera.value2);
  const opera = useSelector((state: RootState) => state.opera.value);
  const recycle = useSelector((state: RootState) => state.opera.value3);
  const dispatch = useDispatch();

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 1) {
      dispatch(setFolder(true));
      setClickCount(0); // Tıklama sayacını sıfırla
    }
  };
  const handleClick2 = () => {
    setClickCount2((prevCount) => prevCount + 1);

    if (clickCount2 === 1) {
      dispatch(setRecycle(true));
      setClickCount2(0); // Tıklama sayacını sıfırla
    }
  };

  return (
    <div className=" h-full ">
      <div className="w-full relative h-full flex justify-center ">
        {folder && (
          <div className="absolute w-full h-[90%] mb-10 z-20">
            <Infolder name={"Portfolio"} image={"https://winaero.com/blog/wp-content/uploads/2019/09/File-Explorer-fluent-icon.png"} />
          </div>
        )}
        
          {recycle && <div className="absolute w-full h-[90%] mb-10 z-20">
            <Infolder name={`Geri Dönüşüm Kutusu`} image={"https://winaero.com/blog/wp-content/uploads/2021/07/Recycle-bin-windows-11-icon.png"} />
          </div>}
        
{/* C:\User\eray\Masaüstü\Portfolio */}
        {!opera && (
          <>
            {" "}
            <div className="m-4 absolute  z-20 left-0">
             <span onClick={handleClick2}>
             <Recycle />
             </span>
              <span onClick={handleClick}>
                <Folder name={"Portfolio"} />
              </span>
            </div>
            <div className=" absolute  bottom-16 z-50">
              <Start />
            </div>
          </>
        )}
        <div className="mb-14 w-full z-10">
          <Opera />
        </div>
      </div>
    </div>
  );
};

export default Home;
