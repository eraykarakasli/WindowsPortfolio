

function Content() {
  return (
    <div className="w-full h-[90%]">
        <div className="w-full  h-6 text-xs pt-1 flex">
            <div className="w-1/4  pl-10 border-e border-gray-500">
                Ad
            </div>
            <div className="w-1/6  text-xs pl-2 border-e border-gray-500">
                Değiştirme Tarihi
            </div>
            <div className="w-[10%]  text-xs pl-2 border-e border-gray-500">
               Tür
            </div>
            <div className="w-[10%]  text-xs pl-2 border-e border-gray-500">
               Boyut
            </div>
        </div>
        <div className=" h-full flex justify-center text-xs pt-2">
            Bu klasör boş.
        </div>
    </div>
  )
}

export default Content