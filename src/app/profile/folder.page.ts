import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  items=[
    {
      domain:"Name",
      range:"Rahil Ikram"
    },
    {
      domain: "Address",
      range: "Mandyala Tegha, Gujranwala, Pakistan"
    },
    {
      domain: "Email",
      range: "rahil.ikram67@gmail.com"
    },
    {
      domain:"Phone",
      range:"0311-9074784 0308-8212344"
    },
    {
      domain: "Nationality",
      range: "Pakistan"
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
