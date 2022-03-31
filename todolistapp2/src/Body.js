import React from "react";

const Body = () =>
{
    function AddItems(){
alert("ff")
    }
    return(
        <form className="w-1/2 mx-auto">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/2">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Task Title
      </label>
    </div>
    <div className="md:w-1/2">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Taske"/>
    </div>
  </div>
 
 
  <div classNameName="md:flex items-center">
    
    <div className="w-full text-right">
      <button onClick={AddItems} className="shadow bg-indigo-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Add items
      </button>
    </div>
  </div>
</form>

    );
}
export default Body;