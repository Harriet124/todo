import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  taskArray=[{taskName: 'Brush teeth', isCompleted:false}];
  task = { taskName:  ''} ;



constructor() {};
ngOnInit(): void{

}


onSubmit(form: NgForm) {

  if (form.valid) {
    // Push the new task to the taskArray
    this.taskArray.push({ taskName: this.task.taskName, isCompleted: false });
    form.resetForm();
    this.task = { taskName: '' }; // Reset taskName property

  }
}

deleteTask(index: number) {
  this.taskArray.splice(index, 1);
}

}



