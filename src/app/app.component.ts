import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

// Seletor personalizado da Estrutura de Componente do Angular
@Component({
  selector: 'app-root', //seletor personalizável
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html', //renderização do contéudo
  styleUrl: './app.component.css', //folha de estilo
})

//Classe com suas funções, etc..
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string){

    this.selectedUserId = id;
  }

}
