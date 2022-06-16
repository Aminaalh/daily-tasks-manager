import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  createList(title: string, desc: string, type: string, date: string) {
    console.log(type);
    console.log(desc);

    this.taskService.createList(title, desc, type, date).subscribe((list: any) => {
      console.log(list);
      // Now we navigate to /lists/task._id
      this.router.navigate([ '/lists', list._id ]); 
    });
  }

}