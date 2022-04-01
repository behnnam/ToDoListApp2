import React from "react";
import { useState, useEffect, useRef } from "react";

let itemsid = 1;
const Svalue = true;
let itemsobj = {};
let itemsobjList = [];
let _id = true;
let SearchItemsChecke = true;

const Body = () => {

    const [itemList, setItemList] = useState([]);
    const inputEl = useRef(null);
    const inputSearch = useRef(null);
    const inputEdit = useRef(null);

    function AddItems() {
        if (inputEl.current.value != '') {
            itemsid = itemsid + 1;
            itemsobj = { "id": itemsid, "Title": inputEl.current.value, "Status": true, "Edit": false }

            itemsobjList.push(itemsobj);

            setItemList(([...itemsobjList]));
            //setItemList(itemsobjList)
            SearchItemsChecke = !SearchItemsChecke;

        }




    }

    function removeItems(id) {

        itemsobjList = itemsobjList.filter(x => x.id != id);

        setItemList([...itemsobjList])
        SearchItemsChecke = !SearchItemsChecke;

    }

    function SearchItems() {
        
        if (inputSearch.current.value == "false") {
            setItemList([...itemsobjList.filter(x => x.Status == false)])
            console.log(itemList)
        }
        else if (inputSearch.current.value == "true") {
            setItemList([...itemsobjList.filter(x => x.Status == true)])
        } else {
            setItemList([...itemsobjList])
        }
        




    }

    function ChangeStatus(id, Status) {


        itemsobjList.find(x => x.id === id).Status = !Status;
        setItemList([...itemsobjList])
        SearchItemsChecke = !SearchItemsChecke;


    }


    function EditItems(id, Edit) {


        itemsobjList.find(x => x.id === id).Edit = !Edit;
        setItemList([...itemsobjList])
        SearchItemsChecke = !SearchItemsChecke;


    }

    function Update(id, Edit) {


        itemsobjList.find(x => x.id === id).Title = inputEdit.current.value;
        itemsobjList.find(x => x.id === id).Edit = false;
        setItemList([...itemsobjList])
        SearchItemsChecke = !SearchItemsChecke;


    }


    useEffect(() => {

      

        
        inputEl.current.value = "";
    }, [SearchItemsChecke])
    return (
        <form className="w-full mx-auto px-2">





            <div className="grid grid-cols-2 gap-2">


                <div className="border-2 h-full">{itemList != null ? itemList.map(res => (<div className={res.Status == true ? "flex place-content-end text-black space-x-4  border-2 border-indigo-700  m-2 p-1 rounded-md bg-green-200" : "flex place-content-end text-black space-x-4  border-2 border-indigo-700  m-2 p-1 rounded-md bg-red-200"}>
                    <input type="text" id={res.id} className="w-full float-left text-left ml-2 font-medium  text-red-900 " defaultValue={res.Title} readOnly={!res.Edit} onBlur={() => Update(res.id, res.Edit)} ref={inputEdit} />
                    <ul className="flex flex-row  font-bold space-x-4 items-center">
                        <li> <i className='fa fa-times-rectangle-o hover:bg-red-500' onClick={() => removeItems(res.id)}></i></li>
                        <li><i className="fa fa-edit hover:text-yellow-600 " onClick={() => EditItems(res.id, res.Edit)}></i></li>
                        <li><i className="fa fa-check-square-o hover:text-green-600" onClick={() => ChangeStatus(res.id, res.Status)}></i></li>
                    </ul></div>)) : console.log("error")}</div>

                <div className="border-2 h-full">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Task Title
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="text" placeholder="Taske" ref={inputEl} />
                        </div>

                        <div className="md:w-1/3 text-left m-3">
                            <button onClick={AddItems} className=" w-full shadow bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Add items
                            </button>
                        </div>
                    </div>


                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Task Title
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <select ref={inputSearch} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="text" placeholder="Taske" ref={inputSearch}>
                                <option value="">همه</option>
                                <option value={Svalue}>در حال انجام</option>
                                <option value={!Svalue}>انجام شده</option>

                            </select>
                        </div>

                        <div className="md:w-1/3 text-left m-3">
                            <button onClick={SearchItems} className="shadow w-full bg-green-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Search
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </form>


    );
}
export default Body;