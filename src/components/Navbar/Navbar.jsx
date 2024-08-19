import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

function Navbar() {

  const {searchParam , setSearchParam , handleSubmit} = useContext(GlobalContext);
  console.log(searchParam)

  return (
    <nav className="flex items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 justify-between ">
      <h2 className="text-2xl font-semibold">Food Recipe</h2>
      <NavLink to={"/"}></NavLink>
      <div className="flex-grow flex justify-center">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          value={searchParam}
          onChange={(e)=>{setSearchParam(e.target.value)}}
          className="bg-white/75 p-3 px-8 rounded-full outline-none shadow-lg shadow-red-100 focus:shadow-red-200 lg:w-96  "
        />
      </form>
      </div>
      
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
