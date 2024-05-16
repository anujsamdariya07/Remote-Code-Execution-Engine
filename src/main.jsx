import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { Layout, Home, About, SignUp, Login, Contact, Account, Editor } from './components/'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './Theme.js';


const displayData = (userData) => {
  console.log(`The recieved data is ${userData}.`)
  setEmail(userData.email)
  setPassword(userData.password)
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='signup' element={<SignUp onSignUp={displayData}/>} />
      <Route path='login' element={<Login />} />
      <Route path='contact' element={<Contact />} />
      <Route path='account' element={<Account />} />
      <Route path='editor' element={<Editor />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)