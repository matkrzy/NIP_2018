import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { PostService } from './post/service/post.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { CommentListComponent } from './post/comment-list/comment-list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [
    AppComponent,
    PostAddComponent,
    PostListComponent,
    PostFormComponent,
    CommentListComponent,
    PostEditComponent,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
