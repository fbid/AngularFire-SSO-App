import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// App Modules
import { CoreModule } from './core/core.module';

//Ui Components
import { UserProfileComponent } from './ui/user-profile/user-profile.component';
import { HomepageComponent } from './ui/homepage/homepage.component';
import { UserDashboardComponent } from './ui/user-dashboard/user-dashboard.component';

// Routing Modules
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HomepageComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
