import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  items_set_1=[
    {
      icon:"logo-html5",
      title:"HTML"
    },
    {
      icon: "logo-css3",
      title: "CSS"
    },
    {
      icon: "logo-javascript",
      title: "JAVASCRIPT"
    },
    {
      icon: "logo-angular",
      title: "ANGULAR"
    },
    {
      icon: "logo-ionic",
      title: "IONIC"
    },
    {
      icon: "logo-nodejs",
      title: "Nodejs"
    },
    {
      src: "assets/skills/express.svg",
      title: "Express"
    },
  ]

  items_set_2=[
    {
      src:"assets/skills/firebase.png",
      title:"Firestore"        
    },
    {
      src: "assets/skills/mongodb.png",
      title: "MongoDB"
    },
    {
      src: "assets/skills/mariadb.png",
      title: "MariaDB"
    },
  ]

  items_set_3 = [
    {
      src: "assets/skills/c.png",
      title: "C++"
    },
    {
      src: "assets/skills/c-sharp.png",
      title: "C#"
    },
    {
      src: "assets/skills/java.png",
      title: "JAVA"
    },
    {
      src: "assets/skills/golang.png",
      title: "GOLANG"
    },
    {
      src: "assets/skills/python.png",
      title: "PYTHON"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
