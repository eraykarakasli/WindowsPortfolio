import Aside from "./Infolder/Aside"
import Content from "./Infolder/Content"
import Controlbar from "./Infolder/Controlbar"
import Footer from "./Infolder/Footer"
import Header from "./Infolder/Header"
import Navbar from "./Infolder/Navbar"

interface InfolderProps {
    name: string;
    image: string;
  }

const Infolder: React.FC<InfolderProps> = ({ name, image }) => {
  return (
    <div className="w-full h-full  px-[350px]  p-14">
        <div className=" rounded-lg h-full">
            <div className="bg-[#202020] flex justify-between  h-11 rounded-t-lg">
                <Navbar name={name} image={image} />
            </div>
            <div className="bg-[#2c2c2c] h-11 border-t border-gray-900">
                <Header name={name} />
            </div>
            <div className="bg-[#191919] h-14 border-t border-gray-700">
                <Controlbar />
            </div>
            <div className="flex h-[440px] bg-[#191919] border-t border-gray-700 ">
                <div className="border-e border-gray-700 w-40 h-full">
                   <Aside />
                </div>
                <div className=" w-full">
                <Content />
                </div>
            </div>
            <div className=" w-full rounded-b-lg bg-[#1c1c1c] h-7">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Infolder