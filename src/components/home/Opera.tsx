import { useSelector } from "react-redux";
import Aside from "../opera/Aside";
import Navbar from "../opera/Navbar";
import { RootState } from "../../redux/app/store";
import Url from "../opera/Url";
import Content from "../opera/Content";

function Opera() {
  const opera = useSelector((state: RootState) => state.opera.value);

  return (
    <div
      className={`${opera ? "" : "hidden"} h-full w-full bg-[#121212] pb-10`}
    >
      <div className="">
        <Navbar />
      </div>
      <div className="flex h-full">
        <Aside />
        <span className="w-full h-full pb-10 border-s border-t border-gray-400">
          <Url />
          <Content />
        </span>
      </div>
    </div>
  );
}

export default Opera;
