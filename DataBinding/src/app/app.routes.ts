import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Login } from './login/login';
import { Register } from './register/register';
import { Notfound } from './notfound/notfound';

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
    component:Products}
,{
    path:'pages/home',
    component:Home},
{
    path:"**",
    component:Notfound
}

];
