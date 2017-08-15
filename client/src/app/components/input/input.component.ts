import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SocketService} from "../../services/socket.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const stockName = form.value.stock.replace(/\s/g, '');
    this.socketService.sendAdd(stockName);
    form.reset();
  }
}
