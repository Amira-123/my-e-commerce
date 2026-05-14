import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';




@NgModule({ declarations: [
        HeaderComponent,
        SpinnerComponent,
        SelectComponent,
    ],
    exports: [
        HeaderComponent,
        SpinnerComponent,
        SelectComponent,
        FormsModule,
        RouterModule,
    ], imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule { }
