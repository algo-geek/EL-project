import React, { useState } from 'react'


export default function donate() {
    const [value, setValue] = useState(10);
    const handleChange = (e, data) => { setValue(data) }
    return (
        <>
            <div className="justify-center mt-20 text-center">
                <div>
                    <span className="text-4xl md:text-5xl font-bold">Donate Food</span>
                </div>
                <div className="mt-8 px-10 md:px-32 lg:px-40">
                    <span className="text-lg md:text-xl text-grey2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi quia recusandae reprehenderit ad magnam quis. Eligendi est tenetur accusamus quis architecto incidunt quo totam magni quod. Dolorum, incidunt eveniet.</span>
                </div>
            </div>


            <div className="m-auto w-full max-w-3xl my-20 px-4">
                {/* title */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Details of food*</span></div>
                    <input
                        type="text"
                        className="mt-3 block w-full rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="40 plates of excess food available"
                    />
                </div>
                {/* timing */}
                <div className="pb-8">
                    <div className="text-base"><span className="text-black font-medium">Meal Timing*</span></div>
                    <div className="flex space-x-2 sm:space-x-10 mt-3">
                        <div className="cursor-pointer px-5 sm:px-9 md:px-12 py-1.5 sm:py-3 bg-blue1 border-2 border-blue1 hover:bg-white rounded-full text-white hover:text-black"><span className="text-sm">Breakfast</span></div>
                        <div className="cursor-pointer px-5 sm:px-9 md:px-12 py-1.5 sm:py-3 bg-blue1 border-2 border-blue1 hover:bg-white rounded-full text-white hover:text-black"><span className="text-sm">Lunch</span></div>
                        <div className="cursor-pointer px-5 sm:px-9 md:px-12 py-1.5 sm:py-3 bg-blue1 border-2 border-blue1 hover:bg-white rounded-full text-white hover:text-black"><span className="text-sm">Dinner</span></div>
                    </div>
                </div>
                 {/* type */}
                 <div className="pb-8">
                    <div className="text-base"><span className="text-black font-medium">Meal Type*</span></div>
                    <div className="flex space-x-2 sm:space-x-10 mt-3">
                        <div className="cursor-pointer px-5 sm:px-9 md:px-12 py-1.5 sm:py-3 bg-blue1 border-2 border-blue1 hover:bg-white rounded-full text-white hover:text-black"><span className="text-sm">Veg</span></div>
                        <div className="cursor-pointer px-5 sm:px-9 md:px-12 py-1.5 sm:py-3 bg-blue1 border-2 border-blue1 hover:bg-white rounded-full text-white hover:text-black"><span className="text-sm">Non-Veg</span></div>
                        
                    </div>
                </div>
                 {/* item preparation timing */}
                 <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Item Preparation Timing*</span></div>
                    <div className="sm:flex sm:space-x-4">
                    <input
                        type="text"
                        className="mt-3 block w-full sm:w-1/2 rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="Packed"
                    />
                    <input
                        type="text"
                        className="mt-3 block w-full sm:w-1/2 rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="08:30"
                    />

                    </div>
                </div>
                {/* range slider */}
                <div className="pb-6">
                <div className="text-base"><span className="text-black font-medium">Food Item Count</span></div>
                    <label>
                        <input
                            type="range"
                            min="1" max="40"
                            className="w-full cursor-pointer bg-black mt-3"
                            value={value}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {/* address */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Address*</span></div>
                    <input
                        type="text"
                        className="mt-3 block w-full rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="XYZ Colony"
                    />
                </div>
                {/* city */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">City*</span></div>
                    <input
                        type="text"
                        className="mt-3 block w-full rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="Mumbai"
                    />
                </div>
                {/* pincode */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Pincode*</span></div>
                    <input
                        type="text"
                        className="mt-3 block w-full rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="123654"
                    />
                </div>
                {/* phone number */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Phone Number*</span></div>
                    <input
                        type="text"
                        className="mt-3 block w-full rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="+918888889999"
                    />
                </div>
                {/* description */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Add description(if any)</span></div>
                    <input
                        type="text"
                        className="mt-3 block w-full rounded-md border border-grey3 bg-white px-3 pb-20 pt-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="Write detailed description"
                    />
                </div>
                {/* submit */}
                <div className="mt-10 flex items-center justify-center">
            <button
              type="submit"
              className="flex w-11/12 sm:w-1/2 justify-center rounded-lg border bg-blue1 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Submit
            </button>
          </div>

            </div>
        </>
    )
}
