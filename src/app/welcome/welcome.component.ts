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
  customwelcome='';
  error='';
  constructor(private route:ActivatedRoute,
    public service:WelcomeDataService)
  {
    
  }
  
  ngOnInit(){
    this.name=this.route.snapshot.params['name'];
  }
   getWelcomeMessage()
   {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
         response => this.handleSuccessfulResponse(response),
         error => this.handleErrorResponse(error)
    );
   }

   handleSuccessfulResponse(response:any)
   {
      console.log(response);
      console.log(response.message);

      this.customwelcome=response.message;
   }

   handleErrorResponse(error:any)
   {
    this.error=error.error.message
   }
}
