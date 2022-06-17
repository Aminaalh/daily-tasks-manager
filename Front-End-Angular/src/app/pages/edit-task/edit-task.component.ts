import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  listId!: string;
  title!: string;
  date!: string;
  type!: string;
  desc!: string;

  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
        console.log(params);
      }
    )

    let list =  this.taskService.getLists().subscribe((lists: any) => {
      for (let index = 0; index < lists.length; index++) {
        if( lists[index]._id == this.listId ){
          this.title = lists[index].title; 
          this.date = lists[index].date; 
          this.type = lists[index].type; 
          this.desc = lists[index].desc; 
        }
      }
    })

    
  }

  onChange(e: any) {
    this.type= e.target.value;
 }


  updateList(title: string, desc: string, type:string, date: string, state: string) {
    console.log(state)
    this.taskService.updateList(this.listId, title, desc, type, date, state).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }

  updateListMissing(idList: string, title: string, desc: string, type:string, date: string, state: string) {
    console.log()
    this.taskService.updateList(idList, title, desc, type, date, state).subscribe(() => {
      this.router.navigate(['/lists', idList]);
    })
  }

}