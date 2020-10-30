import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditorViewComponent} from './editor-view/editor-view.component';
import {DisplayViewComponent} from './display-view/display-view.component';

const routes: Routes = [
  { path: 'view', component: DisplayViewComponent },
  { path: 'edit', component: EditorViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
