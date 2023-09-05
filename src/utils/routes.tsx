import {Route, Routes, Navigate}  from "react-router-dom"
import {HOMEPAGE_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE} from "./consts"
import  Homepage  from "../pages/homepage"
import SignIn from "../pages/signin"
import SignUp from "../pages/signup"
const publicRoutes=[
 {
    path: HOMEPAGE_ROUTE,
    Component: Homepage
 },
 {
    path: SIGN_UP_ROUTE,
    Component: SignUp
 },
 {
    path: SIGN_IN_ROUTE,
    Component: SignIn
 }
]
const privateRoutes =[
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
     },
     {
        path: SIGN_UP_ROUTE,
        Component: SignUp
     },
     {
        path: SIGN_IN_ROUTE,
        Component: SignIn
     }
]

const AppRoutes=()=> {
    const user=false
    return user ?  
    (
        <Routes>

{privateRoutes.map(({path, Component})=>( <Route  key={path} path={path} element={<Component  />} />)

    
)}
<Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />  
    
        </Routes>
    )
    :
    (
        <Routes>
{publicRoutes.map(({path, Component})=> (<Route   key={path} path={path} element={<Component/>}  />)
)}

<Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} /> 
    
        </Routes>
    )
};
export default AppRoutes