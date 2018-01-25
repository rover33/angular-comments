import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CommentService } from 'app/comment/comment.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import {environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
