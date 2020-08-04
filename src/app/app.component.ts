import { Component, OnInit } from '@angular/core';

import { Platform, NavController, AnimationController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  links = [
    {
      icon:"logo-facebook",
      title:"Facebook",
      url:"https://www.facebook.com/profile.php?id=100019408902525"
    },
    {
      icon: "logo-instagram",
      title: "Instagram",
      url: "https://www.instagram.com/m.rahil.ikram/"
    },
    {
      icon: "logo-twitter",
      title: "Twitter",
      url: "https://twitter.com/RahilIkram67"
    },

  ]


  items = [
    {
      title: "Profile",
      name: "person-circle-outline",
      link: "profile"
    },
    {
      title: "Skills",
      src: "assets/profile/skills.svg",
      link: "skills"
    },
    {
      title: "Projects",
      src: "assets/profile/project.svg",
      link: "project"
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav: NavController,
    private animate: AnimationController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  clicked(value) {
    this.nav.navigateForward(value, {
      animation: (base, opts) => {
        return this.animate.create().addElement(opts.enteringEl)
          .fromTo("transform", "translateX(-1000px)", "translateX(0px)")
          .fromTo("opacity", "1", "1")
          .duration(600)
      }
    })

  }
}
