import { Routes, RouterModule } from "@angular/router";
import { MyComponentComponent } from "./my-component/my-component.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ParentChildComponent } from "./parent-child/parent-child.component";


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
    }, {
        path: 'parent-child',
        component: ParentChildComponent
    }
];
export const routing = RouterModule.forRoot(routes);
