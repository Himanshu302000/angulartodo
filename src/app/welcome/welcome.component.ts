import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name='';
  constructor(private route:ActivatedRoute,
    public service:WelcomeDataService)
  {
    //console.log(this.route.snapshot.params['name'])
  }
  
  ngOnInit(){
    this.name=this.route.snapshot.params['name'];
  }
   getWelcomeMessage()
   {
    this.service.executeHelloWorldBeanService();
    ///console.log("get welcome message");
   }
}
