import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BaseComponent } from "./base/base.component";
import { FooterComponent } from './footer.component';
import { SideBarComponent } from './sidebar.component';
import { TopBarComponent } from './topbar.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		BrowserModule,
		HttpClientModule,
	],
	declarations: [
		TopBarComponent,
		SideBarComponent,
		FooterComponent,
		BaseComponent
	],
	exports: [
		TopBarComponent,
		SideBarComponent,
		FooterComponent,
		BaseComponent
	]
})

export class LayoutModule { }
