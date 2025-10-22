import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact';
import {AboutComponent} from './pages/about/about';
import {WorkComponent} from './pages/work/work';
import {LandingComponent} from './pages/landing/landing';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
