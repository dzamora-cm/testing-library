import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentsComponent} from './pages/components/components.component';
import {HomeComponent} from './pages/home/home.component';
import {ErrorComponent} from './pages/error/error.component';
import {HelpComponent} from './pages/help/help.component';
import {FeaturesComponent} from './pages/features/features.component';
import {ResourcesComponent} from './pages/resources/resources.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'components', component: ComponentsComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'help', component: HelpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
