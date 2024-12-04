import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// Seletor personalizado da Estrutura de Componente do Angular
@Component({
  selector: 'app-root', //seletor personalizável
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
