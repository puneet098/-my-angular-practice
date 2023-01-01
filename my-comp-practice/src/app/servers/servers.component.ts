import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',//it is an attribute
  //selector: '.app-servers',//by class
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreateStatus = 'No sever was created!';
  serverName = '';

  constructor(){
    setTimeout( () => {
      this.allowNewServer = true;
      console.log('allowNewServer will turn true in 2s'+this.allowNewServer);
    }, 2000);
    
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    console.log('Button was clicked...');
    this.serverCreateStatus= 'Sever was created!';
    console.log(this.serverCreateStatus);
  }

  onUpdateServerName(event:any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
