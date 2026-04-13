
export default function Footer() {
  return (
    <div className='w-full h-140 bg-black flex justify-center '>
      <div className='container text-center  md:flex justify-center items-center flex-col gap-10'>


        <h1 className='text-4xl md:text-7xl  font-arabic font-bold text-white' >
          لنصنع شيئا
        </h1>
        <h1 className=' text-4xl md:text-7xl mt-10 font-arabic font-bold text-baio'>
           عظيما معا
        </h1>
        <p className='text-gray-500 mt-10 w-full  text-lg leading-relaxed md:w-102 text-center ' >  هل لديك روية تحتاج لمسة احترافية؟ انا هنا للمساعدة في تحقيقها</p>

        <h1 className=' text-3xl  font-arabic font-bold text-baio text-center  mt-20'>
       <span className="text-2xl block font-arabic font-bold text-white">
         created by
        </span>  
          <a href="https://wa.me/201090110038"  target="_blank" className="text-3xl block font-arabic font-bold text-white border-b-2 border-gray-500 hover:text-gray-700 transition duration-500">
            M7amed ABASS
            </a> 
        </h1>

      </div>

    </div>
  )
}
