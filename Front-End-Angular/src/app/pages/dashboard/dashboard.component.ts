import { Component, NgModule, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router,RouterModule } from '@angular/router';
import { Task } from '../models/task.model';
import { List } from '../models/list.model';
import { AuthService } from 'src/app/auth.service';
import { EditTaskComponent } from 'src/app/pages/edit-task/edit-task.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})



export class DashboardComponent implements OnInit {
 
  lists: List[] = [];
  tasks: Task[] = [];
  // user: User ;
  user!: string;
  selectedListId!: string;
  countInc: Number = 0;
  countC: Number = 0;
  countT: Number = 0;
  Pourcentage: Number = 0;
  latest_date!: string;
  dueDate: Date | undefined;

  constructor(private taskService: TaskService, private authService: AuthService, private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private editTask: EditTaskComponent) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['listId']) {
          this.selectedListId = params['listId'];
          // this.taskService.getTasks(params['listId']).subscribe((tasks: any) => {
          //   this.tasks = tasks;
          // })
        } 
        // else {
        //   this.tasks = [];
        // }
      }
    )

      
    
    
    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;

      let i =0;
      let j =0;
      let k =0;
      for (let index = 0; index < this.lists.length; index++) {
        k++;
        // due date assigned
        let myDate = this.lists[index].date.split("-");

        // get current date
        this.dueDate=new Date();
        this.latest_date =this.datepipe.transform(this.dueDate, 'yyyy-MM-dd')!;
        let date_now = this.latest_date?.split("-");

        // Verify if the due date still valid else mark it as a missing task
        if(this.lists[index].state == 'incompleted'){
          if(myDate[0] <= date_now[0]){
            if(myDate[1] <= date_now[1]){
              if(myDate[2] < date_now[2]){
                this.editTask.updateListMissing(this.lists[index]._id, this.lists[index].title, this.lists[index].desc, this.lists[index].type, this.lists[index].date, 'missing')
              }
            }
        }
          // calculate statistics
          i++;
        }
        if(this.lists[index].state == 'completed')
        j++;
      }
      this.countInc = i;
      this.countC = j;
      this.countT = k;
      this.Pourcentage = (j*100)/(k);
    })
    
    
    
    // this.taskService.getUser().subscribe((user: any) => {
    //   this.user = user;
    // })

    this.user = localStorage.getItem('username')!;
    
  }

  onDeleteTask() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }

  onLogoutButtonClicked() {
    this.authService.logout();
  }

}