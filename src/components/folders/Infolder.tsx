

function Infolder() {
  return (
    <div className="w-full h-full  px-[350px] p-44">
        <div className=" rounded-lg h-full">
            <div className="bg-[#202020] flex justify-between  h-11 rounded-t-lg">
                <span>sekme1</span>
                <span>klasör</span>
            </div>
            <div className="bg-[#2c2c2c] h-11 border-t border-gray-900">
                second header
            </div>
            <div className="bg-[#191919] h-14 border-t border-gray-700">
                third header
            </div>
            <div className="flex h-[440px] bg-[#191919] border-t border-gray-700 ">
                <div className="border-e border-gray-700 w-40 h-full">
                    aside
                </div>
                <div className=" w-full">
                    content
                </div>
            </div>
            <div className="border w-full rounded-b-lg bg-[#1c1c1c]">
                footer
            </div>
        </div>
    </div>
  )
}

export default Infolder