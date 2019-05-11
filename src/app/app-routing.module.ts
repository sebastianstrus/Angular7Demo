import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnglishComponent } from './english/english.component';
import { SwedishComponent } from './swedish/swedish.component';
import { NorwegianComponent } from './norwegian/norwegian.component';


const routes: Routes = [
  { path: '', component: EnglishComponent },
  { path: 'swedish', component: SwedishComponent },
  { path: 'norwegian', component: NorwegianComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
