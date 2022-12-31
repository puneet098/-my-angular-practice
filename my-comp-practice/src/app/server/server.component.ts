import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  severId:number = 10;
  severStatus:string = 'offline';

  getSeverStatus():string{
    return this.severStatus;
  }
}
