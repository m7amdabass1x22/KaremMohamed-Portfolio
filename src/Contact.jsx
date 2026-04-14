import React from 'react'
import karem from './assets/photos/WhatsApp Image 2026-04-13 at 10.06.51 PM.jpeg'
import capcutlogo from './assets/photos/1680932354capcut-logo.png'
import mshmohem from './assets/photos/ChatGPT Image Apr 13, 2026, 10_50_15 PM.png'

export default function Contact() {
    return (
        <div className='w-full flex justify-center bg-black h-auto    pt-10' >
            <div className='container block md:flex mt-10 gap-10'>
                <div className=' justify-center w-full  md:w-[50%] h-150   flex   '>
                    <img src={karem} className='h-120  rounded-3xl animate__animated animate__fadeInLeft' alt="" />
                </div>
                <div className=' w-full md:w-[50%] mt-10 flex pr-10  text-end flex-col items-end gap-10 animate__animated animate__fadeInLeft'>
                    <h1 className=' text-5xl   font-arabic font-bold text-white  '>
                        KAREM MOHAMED
                    </h1>
                    <h1 className=' text-5xl   font-arabic font-bold text-white  '>
                        Age:23
                    </h1>
                    <h1 className=' text-4xl   font-arabic font-bold text-white  '>
phone nomber: 01028619308                    </h1>



<button className='w-80 h-15 text-white text-2xl rounded-3xl btn btn-success'><a target='_blank' href="https://wa.me/201028619308">whatsApp</a></button>
   <h1 className=' text-4xl   font-arabic font-bold text-white  '>
⬇ i use to make videos       ⬇             </h1>

<div className=' block md:flex gap-10 justify-center items-center bg-black  '>

                  <div className='h-15 w-60 flex justify-center items-center mb-2 bg-white'>
<img className='h-10 animate__animated hover:animate__fadeInLeft' src={capcutlogo} h alt="" />

</div>

<img className='h-30 animate__animated hover:animate__fadeInLeft' src={mshmohem} alt="" />

</div>

                </div>
            </div>
        </div>
    )
}
