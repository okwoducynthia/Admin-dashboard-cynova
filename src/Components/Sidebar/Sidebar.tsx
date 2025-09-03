import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-1">
      <div className="flex flex-col gap-4 Pt-6 pl-[20%] text-[15px]">
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1" to="/add">
          <i className="fa-solid fa-circle-plus"></i>
          <p className="hidden md:block">Add Item</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1" to="/list">
          <i className="fa-solid fa-clipboard-list"></i>
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1" to="/orders">
          <i className="fa-solid fa-cart-flatbed-suitcase"></i>
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar