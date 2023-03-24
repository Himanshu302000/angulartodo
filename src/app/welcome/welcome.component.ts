import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name='';
  constructor(private route:ActivatedRoute)
  {
    //console.log(this.route.snapshot.params['name'])
  }
  
  ngOnInit(){
    this.name=this.route.snapshot.params['name'];
  }
   
}
