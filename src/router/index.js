// import React from 'react';
// import { Redirect } from 'react-router-dom';

import Home from 'Pages/Home';
import List from 'Pages/List'
import Login from 'Pages/Login';
import NotFound from 'Pages/Home/NotFound';

const myRoutes = [{
    path:'/login',
    exact:true,
    component:Login
},
{
    path:'/',
    component:Home,
    childRoutes:[{
        path:'/list',
        exact:true,
        component:List
    },{
        path:'/notFound',
        exact:true,
        component:NotFound
    }]
}]
export default myRoutes;