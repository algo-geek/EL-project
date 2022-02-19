import React, { useState } from 'react'


export default function donate() {
    const [value, setValue] = useState(10);
    const handleChange = (e, data) => { setValue(data) }
    return (
        <>
            <div className="justify-center mt-20 text-center">
                <div>
                    <span className="text-4xl md:text-5xl font-bold">Get Food</span>
                </div>
                <div className="mt-8 px-10 md:px-32 lg:px-40">
                    <span className="text-lg md:text-xl text-grey2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi quia recusandae reprehenderit ad magnam quis. Eligendi est tenetur accusamus quis architecto incidunt quo totam magni quod. Dolorum, incidunt eveniet.</span>
                </div>
            </div>


            <div className="m-auto w-full max-w-3xl my-20 px-4">
                {/* title */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Organisation Name*</span></div>
                    <input
                        type="text"
                        className="mt-3 block w-full rounded-md border border-grey3 bg-white px-3 py-3.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm placeholder-grey4"
                        placeholder="40 plates of excess food available"
                    />
                </div>
                {/* image */}
                <div className="pb-7">
                    <div className="text-base"><span className="text-black font-medium">Add image of the organisation</span></div>
                    <div className="mt-3 block text-center w-full rounded-md border-2 border-dashed border-grey3 bg-grey5 px-3 py-7 text-base"><span className="text-grey6 font-medium">Drag & Drop or <span className="underline underline-offset-4 font-medium text-blue1">Browse</span></span>
                        
                    </div>
                </div>
               
                {/* range slider */}
                <div className="pb-6">
                <div className="text-base"><span className="text-black font-medium">No. of servings required*</span></div>
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
                    <div className="text-base"><span className="text-black font-medium">Address of the organisation*</span></div>
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
                    <div className="text-base"><span className="text-black font-medium">Anything you want to know?</span></div>
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