import React from 'react'
import Image from "next/image";
import Edit from "../public/images/edit.png";
import Coin from "../public/images/coin.png";
import Bell from "../public/images/bell.png";

export default function profile() {
    return (
        <>

            <div className="pt-10 px-10 md:px-20">
                <div className="items-center flex flex-col">
                    <span className="text-xl font-semibold">Abc Defyubjkk</span>
                    <span className="text-lg mt-3">Let's change the world by making it hunger free</span>
                    <div className="w-40 h-40 rounded-full border border-black mt-10"><img src="" alt="" /></div>
                    <div className="flex flex-row mt-4">
                        <Image src={Edit} height="28" width="25" />
                        <span className="text-blue2 ml-2 text-base underline underline-offset-4">Edit Profile</span>
                    </div>
                </div>

                <div className="lg:flex lg:flex-row justify-between mt-8 mx-2 sm:mx-10 md:mx-40 lg:mx-20">
                    <div className="w-full lg:w-6/12">
                        <span className="text-base">My Activity</span>
                        <div className="h-96 border border-grey3 my-8 rounded-[30px]">
                            <div className="h-[37vh] mx-20 my-10 border-l-2 border-b-2 border-blue2"></div>
                        </div>

                        <div className="border-t border-grey7 w-full"></div>
                        <div className="justify-between flex flex-row text-base my-3 mx-6">

                            <div className="flex flex-row">
                                <Image src={Coin} />
                                <span className="text-black mt-1 ml-3">My Coins</span></div>
                            <div className="mt-1"><span className="text-blue2">20.10</span></div>
                        </div>
                        <div className="border-t border-grey7 w-full"></div>
                        <div className="justify-between flex flex-row text-black text-base my-3 mx-6">
                            <div className="flex flex-row">
                            <Image src={Bell} />
                            <span className="text-black mt-1 ml-3">Notifications</span>
                            </div>
                            <div className="mt-1 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></div>
                        </div>
                        <div className="border-t border-grey7 w-full mb-10"></div>
                    </div>

                    <div className="w-full lg:w-1/3 lg:ml-20">
                        <span className="text-base">Leaderboard</span>
                        <div className="h-96 my-8">
                            <div className="border-t border-grey7 w-full"></div>
                            <div className="justify-between flex flex-row text-grey6 text-base my-2 mx-6">
                                <div><span>NAME</span></div>
                                <div><span>COINS</span></div>
                            </div>
                            <div className="border-t border-grey7 w-full"></div>
                            <div className="justify-between flex flex-row text-base my-3 mx-6">
                                <div className="flex flex-row">
                                    <div className="bg-grey rounded-full w-11 h-11"></div>
                                    <div className="mt-3 ml-3"><span className="text-black">abc abcdefrg</span></div>
                                </div>
                                <div className="mt-3 text-blue2"><span>20.00</span></div>
                            </div>
                            <div className="justify-between flex flex-row text-base my-3 mx-6">
                                <div className="flex flex-row">
                                    <div className="bg-grey rounded-full w-11 h-11"></div>
                                    <div className="mt-3 ml-3"><span className="text-black">abc abcdefrg</span></div>
                                </div>
                                <div className="mt-3 text-blue2"><span>20.00</span></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
