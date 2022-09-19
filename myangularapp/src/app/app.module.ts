import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LearnDirectiveComponent } from './learn-directive/learn-directive.component';
import { LearnpipeComponent } from './learnpipe/learnpipe.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserComponent } from './user/user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductlistComponent,
    LearnDirectiveComponent,
    LearnpipeComponent,
    UserlistComponent,
    NotfoundComponent,
    EdituserComponent,
    AdduserComponent,
    UserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
