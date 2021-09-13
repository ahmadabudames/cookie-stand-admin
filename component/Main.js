import React, { useState } from "react";

export default function Main() {
    const [store, setStore] = useState([])
    function handelForm(event) {
        event.preventDefault();
        const cityStore = {
            Location: event.target.Location.value,
            Minimum: event.target.Minimum.value,
            Maximum: event.target.Maximum.value,
            Average: event.target.Average.value
        }
        let string = cityStore
        string = JSON.stringify(string)
        setStore(string)
    }
    return (
        <div>
            <main className="mainDiv" >
                <form className="w-full max-w-lg" onSubmit={handelForm}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Location
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Location" type="text" />

                        </div>
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Minimum Cookies per Hour
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Minimum" type="value" />
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="w-full md:w-1/4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Maximum Cookies per Hour
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Maximum" type="text" />
                        </div>
                        <div className="w-full md:w-1/4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Average Cookies per Sale
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Average" type="value" />

                        </div>
                        <div className="w-full md:w-1/4  px-3">
                            <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                                Create
                            </button>


                        </div>
                      
                        <div className="soon"className="flex items-center justify-center text-xl h-12 flex-col">
                            <h3> Report Table Coming Soon ....</h3>
                            {store &&
                                <p >{store}</p>



                            }
                        </div>

                    </div>

                </form>

            </main>
        </div>
    )
}
