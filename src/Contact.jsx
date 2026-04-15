import React from 'react'
import karem from './assets/photos/banana.PNG'
import capcutlogo from './assets/photos/capcut.jpeg'
import mshmohem from './assets/photos/ay5ara.jpeg'
import light from './assets/photos/adobe-lightroom-icon.png'
import behance from './assets/photos/pngwing.com.png'
import behance2 from './assets/photos/ccccccc.jpeg'

export default function Contact() {
    return (
        <div className='w-full flex justify-center bg-black h-auto    pt-10' >
            <div className='container block md:flex mt-10 gap-10'>
                <div className=' justify-center w-full   md:w-[40%] h-150   flex   '>
                    <img src={karem} className='h-120 border-4 border-amber-50 rounded-3xl animate__animated animate__fadeInLeft' alt="" />
                </div>
                <div className=' w-full md:w-[60%] mt-10 flex pr-10  text-end flex-col items-end gap-10 animate__animated animate__fadeInLeft'>
                    <h1 className=' text-5xl   font-edits font-bold text-white  '>
                        KAREM MOHAMED
                    </h1>
                    {/* <h1 className=' text-5xl   font-edits font-bold text-white  '>
                        Age:24
                    </h1> */}
                    <h1 className=' text-4xl   font-edits font-bold text-white  '>
phone nomber: 01028619308                    </h1>



<button className='w-80 h-15 text-white text-2xl rounded-3xl btn btn-success hover:bg-white hover:text-green-600 transition duration-500'><a target='_blank' href="https://wa.me/201028619308">whatsApp</a></button>
<button className='w-80 h-15 text-black bg-white text-2xl rounded-3xl btn flex gap-4 hover:bg-gray-600 hover:text-white'>
    <img className='h-full ' src={behance} alt="" />
    <a target='_blank' href="https://www.behance.net/karemnitro">behance</a></button>
   <h1 className=' text-4xl   font-edits font-bold text-white  '>
⬇ i use to make videos       ⬇             </h1>

<div className=' gap-10 justify-center items-center bg-black md:grid grid-cols-2  '>

<img className='mt-5 h-30 md:rounded-3xl animate__animated hover:animate__fadeInLeft' src={capcutlogo} h alt="" />


<img className='mt-5 h-30 md:rounded-3xl animate__animated hover:animate__fadeInLeft' src={mshmohem} alt="" />


<img className='mt-5 h-30 md:animate__animated hover:animate__fadeInLeft' src={light} alt="" />
{/* <img className='mt-5 h-30 md:rounded-3xl animate__animated hover:animate__fadeInLeft' src={behance2} alt="" /> */}


</div>

                </div>
            </div>
        </div>
    )
}
