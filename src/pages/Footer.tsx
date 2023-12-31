import { SiWindows11, SiOperagx } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { BsFolderFill, BsKeyboard, BsFillBellFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { IoWifi, IoBatteryChargingOutline } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import Clock from "../components/clock/Clock";
import CurrentDate from "../components/clock/CurrentDate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/app/store";
import { setLoading } from "../redux/app/slices/startSlice";
import { setFolder, setOpera } from "../redux/app/slices/operaSlice";
import axios from "axios";
import { useEffect, useState } from "react";

function Footer() {
  interface WeatherData {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  }
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  

  const isLoading = useSelector((state: RootState) => state.start.isLoading);
  const opera = useSelector((state: RootState) => state.opera.value);
  const dispatch = useDispatch();
  const folder = useSelector((state: RootState) => state.opera.value2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=7eb03d9aec03a5394cf93569c3d06280`
        );
        const data: WeatherData = response.data;
        setWeatherData(data);

      
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    dispatch(setLoading(!isLoading));
  };
  const handleOpera = () => {
    dispatch(setOpera(!opera));
  };
  const handleFolder = () => {
    dispatch(setFolder(!folder));
  };
  if (!weatherData) {
    return <p>Yükleniyor...</p>;
  }

  
  return (
    <div className="absolute flex h-14 bottom-0 left-0 w-full text-white bg-black bg-opacity-50 ">
      <div className="w-2/5 grid grid-cols-1">
        <div className="flex pl-2">
          <BsSunFill className="text-yellow-400 pr-1 mx-1 h-full" size={24} />
          <div className="text-sm h-full py-2">
            <div>{(weatherData.main.temp - 273.15).toFixed(0)} °C</div>
            <div className=" text-sm capitalize"> {" "}
              {weatherData.weather[0].description}
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/5 h-full flex items-center  gap-2">
        <span
          onClick={handleButtonClick}
          className="text-[#60E8FF]  p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
        >
          <SiWindows11 size={24} />
        </span>
        <span className="text-white flex gap-1 text-sm items-center justify-center w-32 p-2 rounded-3xl bg-white bg-opacity-10 hover:bg-opacity-20 ">
          <AiOutlineSearch size={24} />
          Ara
        </span>
        <span className="text-gray-300  p-2 rounded-lg hover:bg-white hover:bg-opacity-10">
          <RiCheckboxMultipleBlankFill size={28} />
        </span>
        <span onClick={handleFolder} className="text-[#FFCE45]  p-2 rounded-lg hover:bg-white hover:bg-opacity-10">
          <BsFolderFill size={28} />
        </span>
        <span
          onClick={handleOpera}
          className="text-red-500  p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
        >
          <SiOperagx size={28} />
        </span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-end gap-1">
        <span className=" hover:bg-gray-500 hover:bg-opacity-10  flex items-center px-1 py-4 rounded-md">
          <IoIosArrowUp size={16} />
        </span>
        <span className=" hover:bg-gray-500 hover:bg-opacity-10  flex items-center px-2 py-4 rounded-md">
          <BsKeyboard size={18} />
        </span>
        <div className="flex gap-1  hover:bg-gray-500 hover:bg-opacity-10  px-1 items-center py-4 rounded-md">
          <span>
            <IoWifi size={18} />
          </span>
          <span>
            <HiOutlineSpeakerWave size={18} />
          </span>
          <span>
            <IoBatteryChargingOutline size={19} />
          </span>
        </div>
        <div className=" hover:bg-gray-500 hover:bg-opacity-10 rounded-md py-2 px-1">
          <div className="flex justify-end">
            <Clock />
          </div>
          <div>
            <CurrentDate />
          </div>
        </div>
        <span className="hover:bg-gray-500 hover:bg-opacity-10  flex items-center px-1 py-4 rounded-md">
          <BsFillBellFill size={16} />
        </span>
      </div>
    </div>
  );
}

export default Footer;
