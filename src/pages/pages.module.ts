import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    IndexComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PagesModule { }
