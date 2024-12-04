import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent

  ], //Somente para componentes não autômomos(Standalone)
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule] //Para componentes autônomos
})

export class AppModule{}
