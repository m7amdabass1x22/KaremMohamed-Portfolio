import kwalesvideo from './assets/vedios/IMG_9417.MP4'
import kwalesvideo1 from './assets/vedios/IMG_9991.MP4'
import kwalesvideo2 from './assets/vedios/IMG_9992.MP4'
import kwalesvideo3 from './assets/vedios/IMG_9993.MP4'

export default function Kawales() {
    return (
        <div className='w-full  bg-white flex justify-center'>
            <div className='container block '>
                <div className='md:flex gap-5 p-10 '>

                    <div className='w-full  md:w-[50%]   flex justify-center items-center  animate__animated animate__fadeInLeft'>

                        <div className=' w-full h-[60%] justify-center  md:w-[80%]  bg-white flex grow border-4 border-black'>
                            <video className=' w-full h-full object-cover  ' autoPlay
                                muted
                                loop
                                playsInline
                                controls

                                src={kwalesvideo}></video>
                        </div>




                    </div>
                    <div className=' w-full  md:w-[50%]  text-end flex flex-col gap-5 p-10 animate__animated animate__fadeInLeft'>
                        <h1 className=' text-4xl text-black md:text-7xl  flex flex-col gap-5  font-arabic font-bold  '>
                            <span className='block'>عن</span>
                            <span className='block'>المونتير</span>
                            <span className='block'>خلف</span>
                            <span className='block'> الكواليس</span>
                        </h1>
                        <p className='text-gray-700 text-lg leading-relaxed ' >مونتير محترف متخصص في تحويل اللقطات الحام إلى تجارب بصرية سينمائية تترك أثراً لا ينسى أدمج التقنية بالفن الحلق رؤية فريدة</p>



                    </div>

                </div>


                <div className="grid grid-col-1 md:grid-cols-3 gap-5 animate__animated animate__fadeInLeft p-10 ">
                    <div className="h-80 md:h-50  rounded-3xl border-4 bg-black border-black">
                        <video className=' w-full h-full rounded-3xl' controls src={kwalesvideo1}></video>

                    </div>

                    <div className="h-80 md:h-50 rounded-3xl border-4 bg-black border-black">
                        <video className=' w-full h-full rounded-3xl' controls src={kwalesvideo2}></video>

                    </div>
                    <div className="h-80 md:h-50 rounded-3xl border-4 bg-black border-black">
                        <video className=' w-full h-full  rounded-3xl' controls src={kwalesvideo3}></video>

                    </div>



                </div>




            </div>
        </div>
    )
}
