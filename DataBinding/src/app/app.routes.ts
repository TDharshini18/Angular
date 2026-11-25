import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Login } from './login/login';
import { Register } from './register/register';
import { DashboardHome } from './pages/dashboard-home/dashboard-home';
import { DashboardOrders } from './pages/dashboard-orders/dashboard-orders';
import { Notfound } from './notfound/notfound';
import { DashboardSetting } from './pages/dashboard-setting/dashboard-setting';
export const routes: Routes = [
{
    path:'',
    component:Login
},
{
    path:'pages/register',
    component:Register
},
{
    path:'pages/about',
    component:About
},
{
    path:'pages/contact',
    component:Contact
},

{
    path:'pages/product',
    component:Products
}
,{
    path:'pages/home',
    component:Home,
    children:
    [

        {
            path:'',
            component:DashboardHome
        },

        {
            path:'orders',
            component:DashboardOrders
            
        },
        {
            path:'settings',
            component:DashboardSetting
        }
    ]
},


{
    path:"**",
    component:Notfound
}

];
