/* eslint-disable react/prop-types */
import { HandPlatter } from "lucide-react"

export const FoodMenu = ({ handleActiveMenu }) => {
  return (
    <>

      <p className="text-xl font-semibold mb-2">Food Menu</p>
      <div className=" py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4">
        {/* Add Menu Block */}
        <div className="bg-white border h-[152px] border-zinc-300 rounded-xl p-2 flex items-center justify-end gap-4 flex-col">
          <HandPlatter size={50} className="text-primary-dark" />
          <button
            className='bg-primary-dark text-white text-xs w-full justify-center font-bold flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary-dark/80'
            onClick={() => handleActiveMenu('add-food-menu')}
          >
            Add Menu
          </button>
        </div>

        <div className="bg-white relative border h-[152px] border-zinc-300 rounded-xl p-2 flex items-center justify-end gap-4 flex-col overflow-hidden">
          <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601" className="object-cover h-full w-full z-10 absolute top-0 left-0 right-0 bottom-0 brightness-50" alt="Food Menu" />
          <div className="z-20 w-full">
            <p className="text-sm text-white font-bold mb-2">Pan Cake</p>
            <p className="text-xs text-white mb-2">Price: $12</p>
            <button
              className='bg-white text-primary-dark text-xs w-full justify-center font-bold flex items-center gap-2 py-2 px-4 rounded-md hover:bg-white/90'

            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>

  )
}
