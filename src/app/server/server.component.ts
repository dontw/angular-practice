import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '.app-server', class selector: <div class="app-server"></div>
  // selector: '[app-server]', attribute selector: <div app-server></div>
  templateUrl: 'server.component.html',
  // styleUrls:['./server.component.css'],
  styles:[`
    .online{
      color:white;
    }
  `]
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
