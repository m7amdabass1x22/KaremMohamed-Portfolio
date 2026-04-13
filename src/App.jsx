import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
import Contact from './Contact'
import Header from './Header'



export default function App() {
  return (
<div className='w-full bg-black'>

<BrowserRouter>
	<Header/>
<Routes>
<Route path='/' element={<MainPage/>}/>
<Route path='/contactme' element={<Contact/>}/>


</Routes>
</BrowserRouter>



	</div>
  )
}
