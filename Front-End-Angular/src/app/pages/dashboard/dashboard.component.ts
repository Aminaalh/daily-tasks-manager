import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent implements OnInit {

  toggleProBanner(event: { preventDefault: () => void; }) {
    console.log("123");
    event.preventDefault();
    // document.querySelector('body').classList.toggle('removeProbanner');
  }

  constructor() { }

  ngOnInit() {
  }

  date: Date = new Date();
  showModal: boolean = false;
  selectItem() {
    console.log("hello");
      this.showModal = true;
   }

  
}