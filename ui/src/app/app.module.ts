import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './common/material.module';
import { WinAuthInterceptor } from './common/winauth-interceptor';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDialog } from './customer/dialog/customer-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
        { path: '', component: CustomerComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CustomerComponent,
    CustomerDialog
  ],
  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: WinAuthInterceptor,
        multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
