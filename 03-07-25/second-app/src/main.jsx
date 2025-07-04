import { useState } from 'react';
import {createRoot} from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './RoutingPages/Home';
import About from './RoutingPages/About';
import Contact from './RoutingPages/Contact';
import FormHandling from './Form/FormHandling';

// import UseStateEx from './Hooks/UseStateEx';
// import UseEffectEx from './Hooks/UseEffectEx';

createRoot(document.getElementById("root")).render(

  <>
  <FormHandling/>
  
  {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} >
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      
    </Route> */}


    {/* <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} /> */}

  
  {/* </Routes>
  
  </BrowserRouter> */}


  {/* <UseEffectEx/> */}

    {/* <UseStateEx/> */}
  </>
)