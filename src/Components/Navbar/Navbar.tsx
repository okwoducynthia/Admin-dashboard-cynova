

const Navbar = ({setToken}:any) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src="./images/My-logo.png" alt="" />
      <button onClick={() => setToken("")} className="bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-gray-600">Logout</button>
    </div>
  )
}

export default Navbar