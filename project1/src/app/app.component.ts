import { Component } from '@angular/core';
import { Shinobi }  from './shinobi/shinobi.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shinobis: Shinobi[] = [
    { name:  "Kakashi Hatake", village: "Konohagakure", isLead: true, clan: "Hatake"},
    { name:  "Naruto Uzumaki", village: "Konohagakure", lead: "Kakashi Hatake", clan: "Uzumaki"},
    { name:  "Sasuke Uchiha", village: "Konohagakure", lead: "Kakashi Hatake" , clan: "Uchiha"},
    { name:  "Sakura Haruno", village: "Konohagakure", lead: "Kakashi Hatake", clan: "Haruno"},
    { name:  "Asuma Sarutobi", village: "Konohagakure", isLead: true, clan: "Sarutobi"},
    { name:  "Shikamru Nara", village: "Konohagakure" , lead: "Asuma Sarutobi", clan: "Nara"},
    { name:  "Chōji Akimichi", village: "Konohagakure", lead: "Asuma Sarutobi", clan: "Akimichi"},
    { name:  "Ino Yamanaka", village: "Konohagakure", lead: "Asuma Sarutobi", clan: "Yamanaka"},
    { name:  "Might Guy", village: "Konohagakure", isLead: true},
    { name:  "Rock Lee", village: "Konohagakure", lead: "Might Guy"},
    { name:  "Neji Hyūga", village: "Konohagakure", lead: "Might Guy", clan: "Hyūga"},
    { name:  "Tenten", village: "Konohagakure", lead: "Might Guy"},
    { name:  "Kurenai Yūhi", village: "Konohagakure", isLead: true},
    { name:  "Hinata Hyūga", village: "Konohagakure", lead: "Kurenai Yūhi", clan: "Hyūga"}, 
    { name:  "Shino Aburame", village: "Konohagakure", lead: "Kurenai Yūhi", clan: "Aburame"},
    { name:  "Kiba Inuzuka", village: "Konohagakure", lead: "Kurenai Yūhi", clan: "Inuzuka"},
  ]
}
