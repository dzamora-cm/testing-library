import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitModule } from 'ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { TreeTableModule } from 'primeng/treetable';
import { InplaceModule } from 'primeng/inplace';
import { FileUploader2Component } from './file-uploader2/file-uploader.component';
import { AvatarModule } from 'primeng/avatar';
@NgModule({
  declarations: [AppComponent, FileUploader2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiKitModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    InputTextModule,
    TreeTableModule,
    InplaceModule,
    AvatarModule,
  ],

  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
