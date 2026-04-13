import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Kawales from './Kawales'
import LastProjects from './LastProjects'
import Start from './Start'
export default function MainPage() {
  return (
    	<div className='w-full h-auto bg-black flex flex-col gap-15'>
		
		<Start/>
		<LastProjects/>
		<Kawales/>
		<Footer/>
    
    
    </div>
  )
}
