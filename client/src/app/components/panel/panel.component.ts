import {Component, OnInit} from '@angular/core';
import {SocketService} from "../../services/socket.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  stocks: any[];

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
    this.socketService.dataUpdate.subscribe(
      (result: any[]) => {
        this.stocks = [];
        result.forEach(
          item => {
            this.stocks.push(item.stock);
          }
        );
        console.log(this.stocks);
      }
    );
  }


  onDelet(stock) {
    console.log(stock);
    this.socketService.sendRemove(stock);
  }

}
