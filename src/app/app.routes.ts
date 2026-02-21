import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Project } from './page/project/project';
import { Techstack } from './page/techstack/techstack';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
    {
        path: 'home',
        component :Home
    },
    {
        path: 'about',
        component :About
    },
    {
        path: 'project',
        component :Project
    },
    {
        path: 'techstack',
        component :Techstack
    },
    {
        path:'Contact',
        component:Contact
    }
];
