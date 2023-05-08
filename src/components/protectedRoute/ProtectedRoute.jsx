import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
   if (!localStorage.getItem('token')) {
     return <Navigate to='/' />    
   } 
   return children
}
