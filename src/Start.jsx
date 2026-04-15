import React from 'react'
import karem from './assets/photos/banana.PNG'

export default function Start() {
    return (
        <div className='w-full h-auto  flex justify-center bg-black mt-20' >
            <div className='container block md:flex '>
                <div className=' justify-center md:w-[40%] h-150   flex items-center  '>
                    <img src={karem} className='h-130 border-2 border-white  rounded-3xl animate__animated animate__fadeInLeft' alt="" />

6
                </div>
                <div className='justify-end h-auto mt-20 md:mt-0 md:w-[60%] md:h-150  flex   text-end flex-col items-end gap-5 animate__animated animate__fadeInLeft'>
                    <h1 className='text-6xl md:text-8xl font-light font-bigest font-100  text-white  '>
                        <span className='block'>اصنع</span>
                        <span className='block'>قصصا</span>
                    </h1>


                    <h1 className='text-6xl md:text-8xl  font-bigest  text-baio' >


                        <span className='block'>من خلال</span>
                        <span className='block'>العدسة</span>



                    </h1>

                    <p className='text-baio text-lg leading-relaxed w-full md:w-120 ' >مونتير محترف متخصص في تحويل اللقطات الكام إلى تجارب بصرية سينمائية تترك أثراً لا ينسى. أدمج التقنية بالفن الحلق رؤية فريدة</p>
                    <div className='flex gap-4'>

                    </div>

                </div>



            </div>



        </div>
    )
}
