import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
   items=[
     {
       logo:"assets/projects/vekishare.jpg",
       img: "assets/projects/vekishare1.jpg",
       url: "https://vekishare.firebaseapp.com",
       icon:"assets/projects/ww.svg"
     },
     {
       logo: "assets/projects/sms.ico",
       img: "assets/projects/sms.jpg",
       url: "https://sms-raheel.herokuapp.com",
       icon: "assets/projects/ww.svg"
     },
     {
       logo: "assets/projects/ramzan.jpg",
       img: "assets/projects/ramzan1.jpg",
       url: "https://ramzanmobilezone.herokuapp.com",
       icon: "assets/projects/ww.svg"
     },
     {
       logo: "assets/projects/getathome.png",
       img: "assets/projects/GetAtHome.jpg",
       url: undefined,
       name: "logo-android"
     }
   ]
  constructor() { }

  ngOnInit() {
  }

}
