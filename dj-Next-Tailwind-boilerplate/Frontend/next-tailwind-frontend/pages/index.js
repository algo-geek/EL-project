import Head from 'next/head'
import Image from "next/image";
import Navbar from '../Components/Navbar'

import Home1 from "../public/images/home1.png";
import Home2 from "../public/images/home2.png";
import Line from "../public/images/line.png";
import One from "../public/images/one.png";
import Two from "../public/images/two.png";
import Three from "../public/images/three.png";

export default function Home() {
  return (
    <>
    {/* <Navbar style="color:black"/> */}
      {/* top */}
      <div className="w-full min-h-auto text-white bg-black">
        <div className="max-w-max pb-20 ml-auto">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* text */}
            <div className="pt-24 pb-0 px-3 xl:px-0 md:pl-4 text-center md:pb-12 md:w-1/2 md:text-left mx-auto">
              <h1 className="relative z-10 text-4xl font-bold md:text-5xl leading-relaxed flex flex-col">
                <span className="my-1">Together,</span>
                <span className="my-1">We can end</span>
                <span className="my-1">Hunger<span className="text-yellow1">.</span></span>
              </h1>

              <p className="mt-12 text-lg leading-relaxed text-white md:max-w-md md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maiores at debitis quibusdam odit cupiditate
              </p>

            </div>

            {/* illustration */}
            <div className="flex flex-end items-end md:w-1/2 mt-[10vh]"

            >
              <Image src={Home1} height="500" width="900" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-4xl md:text-5xl font-bold text-grey4 px-10 md:px-72 text-center mt-20 mb-10">Approximately 1.3 billion tones of food get lost or wasted</div>

      {/* mid */}
      <div className="w-full min-h-auto text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row lg:items-end items-center">

            {/* text */}
            <div className="pt-20 pb-0 px-3 xl:px-0 md:pl-4 text-center md:pb-12 md:w-1/2 md:text-left text-black"
            >
              <h1 id="header-text" className="relative z-10 text-4xl font-bold md:text-5xl font-display">
                Our Mission
              </h1>
              <p className="pt-8 text-lg leading-relaxed md:max-w-md md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque aliquid eveniet optio eligendi. Officia mollitia
              </p>
              <div className="flex my-[25px] justify-center md:justify-start">


              </div>

            </div>

            {/* illustration */}
            <div className="flex items-end md:w-1/2 mt-[10vh]"
            >
              <Image src={Home2} />
            </div>

          </div>
        </div>
      </div>



      {/* bottom */}


      <div className="w-full min-h-screen text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row lg:items-end items-center">

            {/* text */}
            <div className="pb-0 px-3 xl:px-0 md:pl-4 text-center md:pb-12 md:w-1/2 md:text-left text-black"
            >
           

            </div>

            {/* illustration */}
            <div className="text-black items-end md:w-1/2 mt-28">
              {/* donate */}
              <div className="donate">

                {/* donate heading */}
                <div>
                  <h1 className="font-medium text-4xl lg:text-5xl">HOW TO DONATE ?</h1>
                  <Image src={Line} />
                </div>

                {/* one */}
                <div className="flex mt-8">
                  <div>
                    <Image src={One} width="70" height="70" />
                  </div>
                  <div className="ml-6">
                    <span className="text-3xl font-medium">Add food items </span>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias harum sunt a enim, perspiciatis fugit.</p>
                  </div>

                </div>

                {/* two */}
                <div className="flex mt-14">
                  <div>
                    <Image src={Two} width="70" height="70" />
                  </div>
                  <div className="ml-6">
                    <span className="text-3xl font-medium">Add food items </span>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias harum sunt a enim, perspiciatis fugit.</p>
                  </div>

                </div>

                {/* three */}
                <div className="flex mt-14">
                  <div>
                    <Image src={Three} width="70" height="70" />
                  </div>
                  <div className="ml-6">
                    <span className="text-3xl font-medium">Add food items </span>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias harum sunt a enim, perspiciatis fugit.</p>
                  </div>

                </div>


              </div>

              {/* request */}
              <div className="my-20">

                {/* request heading */}
                <div>
                  <h1 className="font-medium text-4xl lg:text-5xl">HOW TO REQUEST ?</h1>
                  <Image src={Line} />
                </div>

                {/* one */}
                <div className="flex mt-8">
                  <div>
                    <Image src={One} width="70" height="70" />
                  </div>
                  <div className="ml-6">
                    <span className="text-3xl font-medium">Add food items </span>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias harum sunt a enim, perspiciatis fugit.</p>
                  </div>

                </div>

                {/* two */}
                <div className="flex mt-14">
                  <div>
                    <Image src={Two} width="70" height="70" />
                  </div>
                  <div className="ml-6">
                    <span className="text-3xl font-medium">Add food items </span>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias harum sunt a enim, perspiciatis fugit.</p>
                  </div>

                </div>

                {/* three */}
                <div className="flex mt-14">
                  <div>
                  <Image src={Three} width="70" height="70" />
                  </div>
                  <div className="ml-6">
                    <span className="text-3xl font-medium">Add food items </span>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias harum sunt a enim, perspiciatis fugit.</p>
                  </div>

                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

