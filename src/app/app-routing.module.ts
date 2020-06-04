import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { CasesComponent } from './cases/cases.component';


const routes: Routes = [
  { path: 'linechart', component: ChartComponent },
  { path: 'listCases', component: CasesComponent },
  { path: '**', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
