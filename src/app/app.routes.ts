import { Routes, RouterModule } from "@angular/router";
import { MyComponentComponent } from "./my-component/my-component.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: MyComponentComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'about',
        component: AboutComponent
    }
];
export const routing = RouterModule.forRoot(routes);
