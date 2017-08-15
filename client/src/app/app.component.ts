import {Component, OnInit} from '@angular/core';
import {SocketService} from './services/socket.service';
import {Socket} from 'ng-socket-io';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private socketService: SocketService, private socket: Socket) {
  }

  ngOnInit() {
    this.socketService.getAdd();
    this.socketService.initialData();
    this.socketService.getRemove();
  }
}
