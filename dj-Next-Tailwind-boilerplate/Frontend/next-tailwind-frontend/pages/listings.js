import React from 'react';
import Image from 'next/image';
import Home1 from '../public/images/home1.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Marker from '../Components/Marker';

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div id="marker" >{text}</div>;


export default function listings() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const [places, setPlaces] = useState(null);
  const url ="http://127.0.0.1:8000/api/"


  useEffect(() => {

    axios.post(`${url}get-food-provide-request/`, {
      lat: 90.00,
      lon: 90.00
    }).then((e) => {

      setPlaces(e.data);
      console.log(e.data);



    }).catch((err) => {
      console.log(err);
    })




  },[]);




  return (
    <>
      <div className='lg:flex pt-10 lg:justify-between bg-grey'>
        <div className='px-4 sm:px-20 lg:pl-20 py-10'>

          {places && places.map((e, i) => {


            return (
              <>


                <div className='w-full flex bg-white mr-80 rounded-l-xl mb-6'>
                  <Image src={Home1} width='400' height='300' />
                  <div className='w-1/2 md:w-3/4 pl-7 flex-col'>
                    <div className='justify-between flex'>
                      <div className='flex flex-row mt-4'>
                        <div className='bg-grey rounded-full w-11 h-11'></div>
                        <div className='mt-3 ml-3'>
                          <span className='grey6'>{e.user_details}</span>
                        </div>
                      </div>
                      <div className='rounded-full w-11 h-11 border border-grey mt-8 mr-3'></div>
                    </div>

                    <div className='mt-0'>
                      <span className='text-lg font-medium'>{e.title}</span>
                    </div>
                    <div className='mt-4'>
                      <span className='text-base font-normal'>
                        {e.address}
                      </span>
                    </div>
                    <div>
                      <span className='text-base font-normal'>{e.city}</span>
                    </div>

                    <div className='mt-4 flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        fill='currentColor'
                        className='bi bi-telephone'
                        viewBox='0 0 16 16'
                      >
                        <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                      </svg>
                      <span className='text-base font-normal ml-2'>{e.phone_number}</span>
                    </div>
                  </div>
                </div>



              </>



            )


          })}


        </div>

        <div className='lg:mr-20 mb-10 w-full lg:w-1/2 h-full overflow-x-hidden'>

        <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8yd5SDrtAJD_OAZksSBBbwuq1X8E93kI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {places && places.map((e, i) => {
          return(
            
                <Marker
                lat={e.lattitude}
                lng={e.longitude}
           
                />
           

          )
        })}
        
        
        
      </GoogleMapReact>
    </div>

        </div>
      </div>
    </>
  );
}
