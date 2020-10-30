import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {QuillModule} from 'ngx-quill';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EditorViewComponent} from './editor-view/editor-view.component';
import {DisplayViewComponent} from './display-view/display-view.component';
import {FormsModule} from '@angular/forms';
import {ImageHandler} from 'ngx-quill-upload';

@NgModule({
  declarations: [
    AppComponent,
    EditorViewComponent,
    DisplayViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot({
      customModules: [
        {
          implementation: ImageHandler,
          path: 'modules/imageHandler',
        },
      ],
      modules: {
        ImageHandler: true,
      },
      suppressGlobalRegisterWarning: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
