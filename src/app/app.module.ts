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
import { AvatarModule } from 'primeng/avatar';
import { CmtMoleculesModule } from 'cmt-molecules';

import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HelpComponent } from './pages/help/help.component';
import { ErrorComponent } from './pages/error/error.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ComponentsComponent } from './pages/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    HelpComponent,
    ErrorComponent,
    ResourcesComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    CmtMoleculesModule,
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
