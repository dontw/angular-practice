import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-servers', templateUrl: './servers.component.html', styleUrls: ['./servers.component.css']})

export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus : string = 'No server was created!';
  serverName = null;
  servers = ['TestServer', 'TestServer2']

  userName = null;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Serve was Created! The Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServer(evt : any) {
    this.serverName = evt.target.value;
  }

  resetUserName() {
    this.userName = null
  }
}
