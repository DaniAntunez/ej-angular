import { Component } from '@angular/core';

@Component({
  selector: 'app-todopro',
  templateUrl: './todopro.component.html',
  styleUrls: ['./todopro.component.scss']
})
export class TodoproComponent {

  toDoList = [
    {
      name: "Aprender Angular",
      isDone: false
    },
    {
      name: "Aprender JS",
      isDone: true
    },
    {
      name: "Encontrar trabajo",
      isDone: false
    }
  ]

  saveNewTask(newTaskName: string) {
    console.log("padre escuchando: "+newTaskName);
    this.toDoList.push({
      name: newTaskName,
      isDone: false
    });
  }

}
