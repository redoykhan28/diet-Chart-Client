import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './Component/Route/Route'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
