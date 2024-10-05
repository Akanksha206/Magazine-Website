import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter,Route, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Magazines from './components/Magazines/Magazines'
import Home from './components/Home/Home'


import Featured from './components/Featured/Featured'
import Business from './components/Business/Business'
import Testimonial from './components/Testimonial/Testimonial'
import About from './components/About/About'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Magazines />} />
       <Route path="/Home" element={<Home/>} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/business" element={<Business />} />
        <Route path='/testimonial' element={<Testimonial/>}></Route>
        <Route path="/about" element={<About />} />
     
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
