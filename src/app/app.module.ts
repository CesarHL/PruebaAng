import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { DebtorService } from './layout/debtor.service';
import { GroupsComponent } from './groups/groups.component';
import { FormComponent } from './layout/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: '/debtors', pathMatch: 'full'},
  {path: '', redirectTo: '/groups', pathMatch: 'full'},
  {path: 'debtors', component: LayoutComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'layout/form', component: FormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    GroupsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DebtorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
