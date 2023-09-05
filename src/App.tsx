import { Link } from 'react-router-dom'
import './App.scss'
import { useEffect, useState } from 'react';
import AppRoutes from "./utils/routes"
import type {} from 'redux-thunk/extend-redux'
import React from 'react';
import { useTypedSelectors } from './hooks/useTypedSelectors';
import { useActions } from './hooks/useActions';
import { fetchUsers } from './store/action-creator/user';

import { useDispatch } from "react-redux"
import type {} from 'redux-thunk/extend-redux'
import Input from './components/inputComponent/inputComponent';
function App() {
const dispatch= useDispatch()
dispatch(fetchUsers())
 
  return (
    <>
    <AppRoutes /> 
 {/*  <Input /> */}
  
    </>
  )
}

export default App
//npm run dev
//fake store api
//npm install redux react-redux @types/react-redux
//https://fakestoreapi.com/docs
//npm install redux react-redux redux-thunk @types/react-redux @types/redux-thunk
//I5tGB6Y5HWNCft09U4DR0KxqbXFubzOLSIEnKncY