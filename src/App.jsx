import React, { useEffect } from 'react';
import Login from './features/identity/components/Login/Login';
import Register from './features/identity/components/Register/Register';
import router from './router';
import './core/i18n'
import { RouterProvider } from 'react-router-dom';
import { useAppContext } from './contexts/app/app-context';


const App = () => {
const {theme}=useAppContext();
useEffect(()=>{
  const head = document.head;
  const link = document.createElement('link');
  link.rel='stylesheet';
  link.href=`/css/${theme}.css`;
  head.appendChild(link);
  return()=>{head.removeChild(link)}
},[theme]);

  return <RouterProvider router={router} />
};

export default App
