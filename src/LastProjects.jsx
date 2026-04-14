import project1 from './assets/vedios/ahyagaga-bardo.mp4'
import project4 from './assets/vedios/IMG_9414.MP4'
import project2 from './assets/vedios/IMG_9844.mp4'
import project3 from './assets/vedios/IMG_9418.MP4'
import project6 from './assets/vedios/IMG_9995.MP4'
import project5 from './assets/vedios/IMG_9416.MP4'

export default function LastProjects() {
    return (
        <div className="w-full h-auto bg-black flex justify-center mt-20">
            <div className="container  md:h-full  text-end  flex flex-col gap-10">
                <div className="w-full  flex-row-reverse flex justify-between animate__animated animate__fadeInLeft ">
                    <div className=" flex flex-col gap-3 w-full md:w-[50%]  ">
                        <h1 className=' w-full text-6xl  font-arabic font-bold text-white' > اخر الاعمال</h1>
                        <p className=" md:text-baio font-arabic">مجموعه من المشاريع  التي  تعكس  شغفي  بالتميز في  المنتاج و التصوير </p>


                    </div>









                </div>
                <div className="grid grid-col-1 md:grid-cols-3 gap-5 animate__animated animate__fadeInLeft ">
                    <div className="h-80 md:h-50  rounded-3xl border-4 border-white">
                        <video className=' w-full h-full object-cover  rounded-3xl' controls src={project1}></video>

                    </div>

                    <div className="h-80 md:h-50 rounded-3xl border-4 border-white">
                        <video className=' w-full h-full object-cover  rounded-3xl' controls src={project2}></video>

                    </div>
                    <div className="h-80 md:h-50 rounded-3xl border-4 border-white">
                        <video className=' w-full h-full  rounded-3xl' controls src={project3}></video>

                    </div>
                    <div className="h-80 md:h-50 rounded-3xl border-4 border-white flex justify-center items-center">
                        <video className=' w-full h-full   rounded-3xl' controls src={project4}></video>

                    </div>
                    <div className="h-80 md:h-50 rounded-3xl border-4 border-white">
                        <video className=' w-full h-full   rounded-3xl' controls src={project5}></video>

                    </div>
                    <div className="h-80 md:h-50 rounded-3xl border-4 border-white">
                        <video className=' w-full h-full   rounded-3xl' controls src={project6}></video>

                    </div>

                </div>



            </div>
        </div>
    )
}
