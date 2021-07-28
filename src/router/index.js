import { Redirect } from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login';
import List from '../pages/List';
import NotFound from '../pages/Home/NotFound'

//一级路由
export const firstRoutes=[{
    path:'/login',
    name:'登陆',
    exact:true,
    component:Login
},{
    path:'/',
    name:'首页',
    // exact:true,
    component:Home
}]

//首页中的插值路由
export const indexChildRoutes=[{
    path:'/',
    name:'goList',
    exact:true,
    render:()=> <Redirect to="/list" />
},{
    path:'/list',
    name:'列表',
    component:List,
    exact:true
},{
    path:'*',
    name:'404',
    component:NotFound,
    exact:true
},]